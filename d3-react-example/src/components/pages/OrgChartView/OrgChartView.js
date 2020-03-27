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
            <div style={simpleLayout}>
                <SimpleTreeChart
                data={data}
                setData={setData}/>
                <button onClick={function(){
                    console.log("component's data is");
                    console.log(data);
                }}>I am button</button>
            </div>
            {/* <TreeChart
            data={initialData}
            setData={setData}/> */}     
        </React.Fragment>
    )
}

const simpleLayout = {
    display: "flex",
    flexDirection: "row",
    height: "90%",
    width: "80%"
}

export default OrgChartView;