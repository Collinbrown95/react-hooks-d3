import React, { useState } from "react";

import TreeChartD3 from '../../components/TreeChartD3/TreeChartD3';

import ChartControls from '../../components/ChartControls/ChartControls';

import {
    ViewContainer
} from './org-chart-page-styles';

import largeTreeDiagram from "../../data/TreeChartData/treeWithSize";

function OrgChartPage() {
    // State variable to hold whether or not a node was hovered over
    const [hoveredNode, setHoveredNode] = useState();
    // Node expansion path contains the data to expand the d3 tree chart to a specified node.
    const [nodeExpansionPath, setNodeExpansionPath] = useState();

    /**
     * For now this just sets the nodeExpansionPath state variable.
     */
    const setExpansionPath = (e) => {
        e.preventDefault();
        const tempExpansionPath = [0, 0, 0];
        setNodeExpansionPath(tempExpansionPath);
    }

    return (
        <ViewContainer>
            <TreeChartD3
              hoveredNode={hoveredNode}
              setHoveredNode={setHoveredNode}
              nodeExpansionPath={nodeExpansionPath}
              setNodeExpansionPath={setNodeExpansionPath}
            />
            <ChartControls
              setExpansionPath={setExpansionPath}
            />
        </ViewContainer>  
    )
}

export default OrgChartPage;