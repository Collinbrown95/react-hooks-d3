import React, { useState } from "react";

import TreeChart from './TreeChart';

import initialData from './SampleData';

function OrgChartView() {
    const [data, setData] = useState(initialData);
    return (
        <React.Fragment>
            <TreeChart
            data={initialData}
            setData={setData}/>
        </React.Fragment>
    )
}

export default OrgChartView;