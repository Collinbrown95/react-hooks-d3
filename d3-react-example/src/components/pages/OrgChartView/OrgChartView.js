import React, { useState } from "react";

import SimpleTreeChart from './SimplifiedTreeChart';
import TreeChart from './TreeChart';

import initialData from './SampleData';
import treeData from './SimpleSampleData';

function OrgChartView() {
    // const [data, setData] = useState(initialData);
    const [data, setData] = useState(treeData);
    return (
        <React.Fragment>
            {/* <TreeChart
            data={initialData}
            setData={setData}/> */}
            <SimpleTreeChart
            data={treeData}
            setData={setData}/>
        </React.Fragment>
    )
}

export default OrgChartView;