import * as d3 from "d3";

import {
    generateTextSize,
    staggerText,
  } from "./d3-utilities";


// TODO: make this animation move in from side using x,y coords.
export function presentToolTip(d, i, nodes) {
  // console.log(d3.select("#TooltipID"))
  d3.select("#TooltipID")
    .style("opacity", 0)
    .transition()
    .duration(500)
    .style("opacity", 1)
    .style("display", "flex")
}
// TODO: tooltip needs to stay open when the tooltip itself is moused over
export function hideToolTip() {
  d3.select("#TooltipID")
    .transition()
    .delay(1000)
    .duration(20)
    .style("opacity", 0)
    .style("display", "hidden")
}

export function hideToolTipInstant() {
  d3.select("#TooltipID")
    .transition()
    .delay(0)
    .duration(0)
    .style("opacity", 0)
    .style("display", "hidden")
}
