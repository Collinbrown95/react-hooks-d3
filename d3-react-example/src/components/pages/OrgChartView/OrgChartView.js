import React, { useState } from "react";

import SimpleTreeChart from './SimplifiedTreeChart';
import TreeChart from './TreeChart';

import ChartController from './ChartController';

import {
    ViewContainer, ControlsDiv,
} from './org-chart-view-styles';


import initialData from './SampleData';
import treeData from './SimpleSampleData';
import largeTreeData from './treeWithSize';
import largeTreeDiagram from "./treeWithSize";

function OrgChartView() {
    // State variable for the tree data
    const [data, setData] = useState(largeTreeDiagram);
    // State variable to hold whether or not a node was hovered over
    const [hoveredNode, setHoveredNode] = useState();
    const [scales, setScales] = useState();
    // const [data, setData] = useState(initialData);
    // const [data, setData] = useState(treeData);
    return (
        <div style={simpleLayout}>
            <SimpleTreeChart
              data={data}
              setData={setData}
              hoveredNode={hoveredNode}
              setHoveredNode={setHoveredNode}
              scales={scales}
              setScales={setScales}
            />
            <ChartController/>
        </div>  
    )
}

const simpleLayout = {
    display: "flex",
    flexDirection: "row",
    height: "84.5%",
    width: "100%"
}

export default OrgChartView;