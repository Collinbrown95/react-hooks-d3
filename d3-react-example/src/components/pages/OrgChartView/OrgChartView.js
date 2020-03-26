import React, { useState } from "react";

import TreeChart from './TreeChart';

import initialData from './SampleData';

function OrgChartView() {
    return (
        <React.Fragment>
            <TreeChart data={initialData} />
        </React.Fragment>
    )
}

export default OrgChartView;