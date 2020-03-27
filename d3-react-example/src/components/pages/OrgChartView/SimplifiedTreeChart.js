import React, { useRef, useEffect, useState } from "react";
import { select, hierarchy, tree, linkVertical, zoom, zoomTransform } from "d3";
import useResizeObserver from "./useResizeObserver";

// useDidMountEffect lets you specify a useEffect hook that fires if anything in the dependency
// array changes but NOT on initial render.
import useDidMountEffect from "./useDidMountEffect";

function SimpleTreeChart({ data }) {
  const svgRef = useRef();  // hold reference to the SVG element that d3 will render its content into
  const wrapperRef = useRef();  // hold reference to the div element that contains the svg (used for resizing)
  const dimensions = useResizeObserver(wrapperRef);  // dimensions will change on window resize
  // The curent zoom state; will rescale the visualization whenever a zoom or pan event occurs
  const [currentZoomState, setCurrentZoomSate] = useState("translate(-1,0) scale(1)");
  const [clickedNode, setClickedNode] = useState(false);
  // Initial margins
  const margin = {top: 20, right: 120, bottom: 20, left: 120};
  const duration = 750;  // duration is 750 ms
  // Create link generator function
  const linkGenerator = linkVertical()
  .x(link => link.x)
  .y(link => link.y);
  // Hold a reference to the SVG returned by this component (i.e. the one referenced by svgRef). Append
  // a group tag and offset it by the margins.
  const svg = select(svgRef.current)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  // Apply zoom handling to the parent container group.
  svg
    .call(
      zoom().on("zoom", () => {
        const zoomState = zoomTransform(svg.node())
        svg.select("#parentContainer")
        .attr("transform", zoomState.toString())
      })
    )
  // TODO: check if i can be moved safely to the SimpleTreeChart scope so that it does not need to be passed
  // as an argument to update.
  /**
   * 
   * @param {*} source 
   * @param {*} root
   * @param {int} i A global variable keeping track of the number of nodes. Used to assign ID to nodes.
   */
  function update(source, root, i, treeLayout) {
    // The treeLayout enriches the root with x and y coordinates
    treeLayout(root)
    // Get the nodes and links (edges) of the subtree rooted at root.
    const nodes = root.descendants().reverse(), links = root.links();
    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 180; });
    // Update the nodes; start by storing a selector for all elements bound to the nodes array.
    const node = svg.select("#parentContainer").selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); })
    
    // Enter new nodes at the parent's previous position
    const nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
      .on("click", click)
    // Append a circle SVG to the set of entering elements. Node that each element of nodeEnter is its own group
    // container that will hold a circle and a text element.
    nodeEnter.append("circle")
      .attr("r", 1e-6)  // Node initializes with very small size.
      // nodes are white if leaf and light blue otherwise.
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
    // Append the text in the name field to each node (TODO: this should respond to the treechart layout in a more sophisticated way)
    nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);
    
    // Apply a transition to all updating nodes. All entering nodes have been set up so that the transition will
    // animate them to their desired position; all existing nodes will remain in place.
    console.log("Node is ", nodeEnter.transition())
    const nodeUpdate = nodeEnter.transition()
      .duration(duration)
      // All entering nodes are initialized at the position of their parent (root is initialized at its own position),
      // so this transformation translates them from (x0, y0) to (x, y) in `duration` amount of time.
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    // Once the transition is complete, the set of circles in the updating group should arrive at the below final state.
    nodeUpdate.select("circle")
	  .attr("r", 10)
	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
    // Once the transition is complete, the set of text elements in the updating group should arrive at the below final state.
    nodeUpdate.select("text")
	  .style("fill-opacity", 1);
  }
  
  /**
   * The callback for when a click event is registered on an org chart node.
   * @param {*} d TODO
   */
  function click(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
    // update(root);
  }
  /**
   * The hand-off point between react and d3 is here; we let d3 take control of the updating pattern inside
   * of the useEffect hook.
   */
  useEffect(() => {
    // Get width and height of the tree based on the window size/size of bounding rectangle.
    var { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();
    // Apply margins to the initial height and width (TODO: dynamically pick margins to fit window size)
    width = width - margin.right - margin.left;
    height = height - margin.top - margin.bottom;
    // Variables to hold animation duration and node counter
    var i;
    
    // Create the tree layout
    const treeLayout = tree().size([width, height]);
    
   
    // Get the root node from JSON using d3's hierarchy method
    const root = hierarchy(data);
    // Set initial position of the root
    root.x0 = width/2;
    root.y0 = 0;
    update(root, root, i, treeLayout);
  }, [dimensions]);
//    [dimensions,
//       currentZoomState,
//       clickedNode]);

  // ^ When dimensions change (which will happen whenever a resize occurs), the svg drawings
  // will re-render with new dimensions.
  return (
    <div ref={wrapperRef} style={wrapperStyles}>
      <svg ref={svgRef}>
          <g id="parentContainer"></g>
      </svg>
    </div>
  );
}

const wrapperStyles = {
  background: "#eee",
  // TODO: this height difference needs to be recalculated when the header/banner/footer are resized responsively
  // height calculation: 100% height - 5% height (footer) - 7.5% height (header) - 2.5% height (beta banner)
  height: "85%",
  width: "80%" 
}

export default SimpleTreeChart;