import React, { useRef, useEffect } from "react";
import { select, hierarchy, tree, linkHorizontal } from "d3";
import useResizeObserver from "../pages/OrgChartView/useResizeObserver";

const logoData = {
    name: "Dynamic",
    children: [
        {
            name: "Org"
        },
        {
            name: "Chart"
        }
    ]
}

function Logo() {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();
    // transform hierarchical data
    const root = hierarchy(logoData);
    const treeLayout = tree().size([width, height]);

    const linkGenerator = linkHorizontal()
      .x(link => link.y)
      .y(link => link.x);

    // enrich hierarchical data with coordinates
    treeLayout(root);

    console.warn("descendants", root.descendants());
    console.warn("links", root.links());

    // nodes
    svg
      .selectAll(".node")
      .data(root.descendants())
      .join(enter => enter.append("circle").attr("opacity", 0))
      .attr("class", "node")
      .attr("cx", node => node.y)
      .attr("cy", node => node.x)
      .attr("r", 4)
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
    enteringAndUpdatingLinks
      .attr("stroke-dashoffset", function() {
        return this.getTotalLength();
      })
      .transition()
      .duration(500)
      .delay(link => link.source.depth * 500)
      .attr("stroke-dashoffset", 0);
    // labels
    svg
      .selectAll(".label")
      .data(root.descendants())
      .join(enter => enter.append("text").attr("opacity", 0))
      .attr("class", "label")
      .attr("x", node => node.y)
      .attr("y", node => node.x)
      .attr("text-anchor", "middle")
      .attr("font-size", 16)
      .text(node => node.data.name)
      .transition()
      .duration(500)
      .delay(node => node.depth * 300)
      .attr("opacity", 1);
  }, [logoData]);

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
export default Logo