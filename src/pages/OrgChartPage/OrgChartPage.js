import React, { useState } from "react";

import TreeChartD3 from '../../components/TreeChartD3/TreeChartD3';

import ChartControls from '../../components/ChartControls/ChartControls';

import {
    ViewContainer
} from './org-chart-page-styles';

import largeTreeDiagram from "./treeWithSize";

function OrgChartPage() {
    // State variable for the tree data
    const [data, setData] = useState(largeTreeDiagram);
    // State variable to hold whether or not a node was hovered over
    const [hoveredNode, setHoveredNode] = useState();
    const [scales, setScales] = useState();
    // Node expansion path contains the data to expand the d3 tree chart to a specified node.
    const [nodeExpansionPath, setNodeExpansionPath] = useState();
    // State to keep track of identity assignment for the data-DOM pairs
    const [identity, setIdentity] = useState(0);
    // const [data, setData] = useState(initialData);
    // const [data, setData] = useState(treeData);

    /**
     * For now this just sets the nodeExpansionPath state variable.
     */
    const setExpansionPath = (e) => {
        e.preventDefault();
        const tempExpansionPath = [10, 1, 0];
        setNodeExpansionPath(tempExpansionPath);
    }

    return (
        <ViewContainer>
            <TreeChartD3
              data={data}
              setData={setData}
              hoveredNode={hoveredNode}
              setHoveredNode={setHoveredNode}
              scales={scales}
              setScales={setScales}
              nodeExpansionPath={nodeExpansionPath}
              setNodeExpansionPath={setNodeExpansionPath}
              identity={identity}
              setIdentity={setIdentity}
            />
            <ChartControls
              setExpansionPath={setExpansionPath}
            />
        </ViewContainer>  
    )
}

export default OrgChartPage;