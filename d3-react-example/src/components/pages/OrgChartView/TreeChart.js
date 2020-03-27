import React, { useRef, useEffect, useState } from "react";
import { select, hierarchy, tree, linkVertical, zoom, zoomTransform } from "d3";
import useResizeObserver from "./useResizeObserver";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function TreeChart({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [currentZoomState, setCurrentZoomSate] = useState("translate(-1,0) scale(1)");
  const [nestedStateChange, setNestedStateChange] = useState(false);
  // const [nodesAdded, setNodesAdded] = useState()
  // const [nodesRemoved, setNodesRemoved] = useState()
  // const [previousNodes, setPreviousNodes] = useState()
  // we save data to see if it changed
  const previouslyRenderedData = usePrevious(data);

  // will be called initially and on every data change
  useEffect(() => {
    // console.log("removed nodes ", nodesRemoved)
    // console.log("added nodes ", nodesAdded)
    const svg = select(svgRef.current);

    // use dimensions from useResizeObserver,
    // but use getBoundingClientRect on initial render
    // (dimensions are null for the first render)
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();
      // console.log("Dimensions are ", dimensions);
      // console.log("Bounding rectangle is ", wrapperRef.current.getBoundingClientRect())
    // transform hierarchical data
    const root = hierarchy(data);
    
    // Need to flip width and height when chart is vertical vs. horizontal
    const treeLayout = tree().size([width, height]);

    const linkGenerator = linkVertical()
      .x(link => link.x)
      .y(link => link.y);

    // enrich hierarchical data with coordinates
    treeLayout(root);

    // console.warn("descendants", root.descendants());
    // console.warn("links", root.links());
    // Callbacks for events on nodes
    function toggleChildren(d, i, nodes) {
      /** Toggles children on click to open/close */
      // setPreviousNodes(root.descendants())
      // case 1: children are showing and we want to hide them
      if (d.children) {
      d.data._children = d.data.children;
      d.data.children = null;
      // setNodesRemoved(hierarchy(d.data._children).descendants())
      }
      // case 2: children are hidden and we want to show them
      else {
      d.data.children = d.data._children;
      d.data._children = null;
      // setNodesAdded(hierarchy(d.data.children).descendants())
      }
      
      setNestedStateChange(!nestedStateChange)
    }
    // console.log("selection bound to root descendants")
    // console.log(svg.selectAll(".node").data(root.descendants()))
    const enteringAndUpdatingNodes = svg
      .selectAll(".node")
      .data(root.descendants())
      .join(enter => enter
        .append("circle")
        .attr("opacity", 0)
        )
      .attr("transform", currentZoomState)
      .attr("class", "node")
      .attr("cx", node => node.x)
      .attr("cy", node => node.y)
      .attr("r", 20)
      .style("fill", function(d) {
        // the (_)children property is stored in the data object of each node
        return d.data._children ? "lightsteelblue" : "#fff"; 
      })
      .on("click", toggleChildren)
      .transition()
      .duration(500)
      .delay(300)
      .attr("opacity", 1)

    // If any nodes were added, animate them
    // if (data !== previouslyRenderedData) {
    //   // console.log("Node Condition triggered")
    //   enteringAndUpdatingNodes
    //     .attr("opacity", 0)
    //     .transition()
    //     .duration(500)
    //     .delay(node => node.depth * 300)
    //     .attr("opacity", 1);
    // }

    // If any nodes were removed, animate them

    // Clear both nodes added/removed states

    // links
    const enteringAndUpdatingLinks = svg
      .selectAll(".link")
      .data(root.links())
      .join(enter => enter
        .append("path")
        .attr("opacity", 0))
      .attr("class", "link")
      .attr("transform", currentZoomState)
      .attr("d", linkGenerator)
      .attr("stroke-dasharray", function() {
        const length = this.getTotalLength();
        return `${length} ${length}`;
      })
      .transition()
      .duration(500)
      // .delay(link => link.source.depth * 500)
      .attr("stroke-dashoffset", 0)
      .attr("stroke", "black")
      .attr("fill", "none")
      .attr("opacity", 1);

    // if (data === previouslyRenderedData) {
    //   // console.log("Link condition triggered")
    //   enteringAndUpdatingLinks
    //     .attr("stroke-dashoffset", function() {
    //       return this.getTotalLength();
    //     })
    //     .transition()
    //     .duration(500)
    //     .delay(link => link.source.depth * 500)
    //     .attr("stroke-dashoffset", 0);
    // }

    // labels
    svg
      .selectAll(".label")
      .data(root.descendants())
      .join(enter => enter
        .append("text")
        .attr("opacity", 0))
      .attr("transform", currentZoomState)  // the zoom state should be applied to all entering elements
      .attr("class", "label")
      .attr("x", node => node.x*0.9)
      .attr("y", node => node.y*1.1)
      .attr("text-anchor", "middle")
      .attr("font-size", 24)
      .text(node => node.data.name)
      .transition()
      .duration(500)
      .delay(300)
      .attr("opacity", 1);

    function zoomed() {
      const zoomState = zoomTransform(svg.node());
      setCurrentZoomSate(zoomState.toString())
      // console.log(zoomState.toString())
      svg
      .selectAll(".node,.link,.label")  // this is using D3's syntax for selecting multiple classes.
      .attr("transform", zoomState.toString())
    }
    const zoom1 = zoom().on("zoom", zoomed);;
    svg.call(zoom1)
  }, [data,
      dimensions,
      currentZoomState,
      // previouslyRenderedData,
      nestedStateChange]);
  // ^ When dimensions change (which will happen whenever a resize occurs), the svg drawings
  // will re-render with new dimensions.
  return (
    <div ref={wrapperRef} style={wrapperStyles}>
      <svg ref={svgRef}>
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

export default TreeChart;