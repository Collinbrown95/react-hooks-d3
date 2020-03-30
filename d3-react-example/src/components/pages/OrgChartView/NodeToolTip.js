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
      left: `${xScale - 30}px`,
      top: `${yScale}px`
    }
  
    return (
      <div className="Tooltip" style={styles}>
        <table>
          <thead>
            <tr>
              <th colSpan="2">{hoveredNode.title}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="1">Bodies</td>
              <td colSpan="1">{hoveredNode.value}</td>
            </tr>
            <tr>
              <td colSpan="1">Year</td>
              <td colSpan="1">{hoveredNode.year}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default NodeToolTip