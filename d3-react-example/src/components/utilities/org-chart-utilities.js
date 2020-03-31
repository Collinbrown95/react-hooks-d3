import * as d3 from "d3";

import {
    generateTextSize,
    staggerText,
  } from "./d3-utilities";

export function presentToolTip(d, i, nodes) {
  // console.log(d3.select("#TooltipID"))
  d3.select("#TooltipID")
    .style("opacity", 0)
    .transition()
    .duration(500)
    .style("opacity", 1)
    .style("display", "flex")
}

export function hideToolTip() {
  d3.select("#TooltipID")
    .transition()
    .delay(2000)
    .duration(20)
    .style("opacity", 0)
    .style("display", "hidden")

}