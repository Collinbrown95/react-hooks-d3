import React, { useState } from "react";

import TreeChartD3 from '../../components/TreeChartD3/TreeChartD3';

import ChartControls from '../../components/ChartControls/ChartControls';

import {
    ViewContainer
} from './org-chart-page-styles';


function OrgChartPage() {
    // State variable to hold whether or not a node was hovered over
    const [hoveredNode, setHoveredNode] = useState();

    return (
        <ViewContainer>
            <TreeChartD3
              hoveredNode={hoveredNode}
              setHoveredNode={setHoveredNode}
            />
            <ChartControls />
        </ViewContainer>  
    )
}

export default OrgChartPage;