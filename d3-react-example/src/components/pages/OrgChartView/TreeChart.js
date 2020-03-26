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
  const [currentZoomState, setCurrentZoomSate] = useState();
  // Flag for when node is clicked
  var nodeClicked = false;
  // we save data to see if it changed
  const previouslyRenderedData = usePrevious(data);

  // will be called initially and on every data change
  useEffect(() => {
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
    function toggleChildren(d) {
      /** Toggles children on click to open/close */
      if (d.children) {
      d.data._children = d.data.children;
      d.data.children = null;
      } else {
      d.data.children = d.data._children;
      d.data._children = null;
      }
    }

    svg.selectAll(".node").on("click", toggleChildren);
    // nodes
    svg
      .selectAll(".node")
      .data(root.descendants())
      .join(enter => enter
        .append("circle")
        .attr("opacity", 0))
      .attr("class", "node")
      .attr("cx", node => node.x)
      .attr("cy", node => node.y + 10)
      .attr("r", 12)
      .style("fill", function(d) {
        // the (_)children property is stored in the data object of each node
        return d.data._children ? "lightsteelblue" : "#fff"; 
      })
      .transition()
      .duration(500)
      .delay(node => node.depth * 300)
      .attr("opacity", 1);

    // links
    const enteringAndUpdatingLinks = svg
      .selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("d", linkGenerator)
      .attr("stroke-dasharray", function() {
        const length = this.getTotalLength();
        return `${length} ${length}`;
      })
      .attr("stroke", "black")
      .attr("fill", "none")
      .attr("opacity", 1);

    if (data !== previouslyRenderedData) {
      enteringAndUpdatingLinks
        .attr("stroke-dashoffset", function() {
          return this.getTotalLength();
        })
        .transition()
        .duration(500)
        .delay(link => link.source.depth * 500)
        .attr("stroke-dashoffset", 0);
    }

    // labels
    svg
      .selectAll(".label")
      .data(root.descendants())
      .join(enter => enter.append("text").attr("opacity", 0))
      .attr("class", "label")
      .attr("x", node => node.x)
      .attr("y", node => node.y)
      .attr("text-anchor", "middle")
      .attr("font-size", 24)
      .text(node => node.data.name)
      .transition()
      .duration(500)
      .delay(node => node.depth * 300)
      .attr("opacity", 1);

    function zoomed() {
      const zoomState = zoomTransform(svg.node());
      // console.log(zoomState.toString())
      svg
      .selectAll(".node,.link,.label")  // this is using D3's syntax for selecting multiple classes.
      .attr("transform", zoomState.toString())
    }
    const zoom1 = zoom().on("zoom", zoomed);;
    svg.call(zoom1)
    console.log("data was", data)
  }, [data, dimensions, currentZoomState, previouslyRenderedData, nodeClicked]);
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