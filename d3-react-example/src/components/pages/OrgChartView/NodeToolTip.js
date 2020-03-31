import React from "react";
/**
 * A functional component that renders a tooltip at a given x,y position
 */
function NodeToolTip({hoveredNode, scales}) {
    console.log("scales are ", scales)
    const { xScale, yScale } = scales
    console.log("xscale is ", xScale)
    console.log("yscale is ", yScale)
    console.log("hovered node is ", hoveredNode)
    
    const styles = {
      x: xScale  - 80,
      y: yScale - 30,
      width: 50,
      height: 50,
      backgroundColor: "#282828",
      color: "#fff",
      transition: "opacity 0.5s",
      opacity: 1
    }

    const divStyles = {
      backgroundColor: "#282828",
      color: "#fff",
    }
  // The <foreignObject> SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.
    return (
      <foreignObject style={styles}>
        <div styles={divStyles} xmlns="http://www.w3.org/1999/xhtml">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed mollis mollis mi ut ultricies. Nullam magna ipsum,
          porta vel dui convallis, rutrum imperdiet eros. Aliquam
          erat volutpat.
        </div>
      </foreignObject>
      
    )
}

export default NodeToolTip