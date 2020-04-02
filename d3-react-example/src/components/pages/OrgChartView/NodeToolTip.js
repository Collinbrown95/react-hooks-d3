import React from "react";
/**
 * A functional component that renders a tooltip at a given x,y position
 */
function NodeToolTip({hoveredNode, scales}) {
    if (scales) {
      var xScale;
      var yScale;
      var { xScale, yScale } = scales
    }
    
    const styles = {
      display: "none",
      opacity: 0,
      zIndex: 10000000,
      x: xScale ? xScale  - 80 : 0,
      y: yScale ? yScale - 30 : 0,
      width: 50,
      height: 50,
      backgroundColor: "#282828",
      color: "#fff",
    }

    const divStyles = {
      backgroundColor: "#282828",
      color: "#fff",
    }
  // The <foreignObject> SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.
    return (
      <foreignObject id="TooltipID" style={styles}>
        <a href="#">click me</a>
      </foreignObject>
      
    )
}

export default NodeToolTip