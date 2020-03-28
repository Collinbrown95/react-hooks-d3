import React from "react";
import {
    ControlsDiv,
    ControllerTitle,
} from "./org-chart-view-styles";
import DropDownSelection from "./DropDownSelection";

function ChartController() {
    return (
        <ControlsDiv>
            <ControllerTitle>
                Chart Controls
            </ControllerTitle>
            <DropDownSelection />
        </ControlsDiv>
    )
}

export default ChartController;