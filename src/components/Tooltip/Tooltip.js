import React from "react";

import FontAwesome from 'react-fontawesome';

import {
  ToolTipForeignObject,
  ToolTipButtonGroupDiv,
  ToolTipInnerButton,
} from "./tooltip-styles";


/**
 * A functional component that renders a tooltip at a given x,y position
 */
function Tooltip({hoveredNode, tooltipCoordinates}) {
  if (tooltipCoordinates) {
    // TODO: could display metadata from the hoveredNode
    // console.log("hovered node is ", hoveredNode);
    var { xScale, yScale } = tooltipCoordinates;
  }

  // The <foreignObject> SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.
  return (
    <ToolTipForeignObject
      id="TooltipID"
      xScale={xScale}
      yScale={yScale}
    >
      <ToolTipInnerButton>
        <FontAwesome
        style={{
          paddingRight: "5px",
        }}
        name="fas fa-users" />
        See the team
      </ToolTipInnerButton>
    </ToolTipForeignObject>
    
  )
}

export default Tooltip