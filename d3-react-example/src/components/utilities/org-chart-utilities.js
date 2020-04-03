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
    .style("display", "hidden")
    .style("opacity", 0)
}

/**
 * Applies pre-processing (if any) to the raw label before it is
 * assigned to the text svg for a node.
 * @param {*} label 
 */
export function preProcessNodeLabel(label) {
  // case: label is an array of names
  if (typeof(label) === "object") {
    return label.join(" ");
  } else {
    return label;
  }
}

/**
 * Simple animation for the target node
 */
