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
    const [data, setData] = useState(largeTreeDiagram);
    // const [data, setData] = useState(initialData);
    // const [data, setData] = useState(treeData);
    return (
        <div style={simpleLayout}>
            <SimpleTreeChart
              data={data}
              setData={setData}
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