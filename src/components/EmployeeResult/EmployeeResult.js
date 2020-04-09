import React, { useContext } from 'react';

import { D3Context } from "../../contexts/D3Context";

import CanadaOrgChart from "../../data/GovernmentCanadaOrgChart/GovernmentOrgChart";

import {
    EmployeeResultOuterDiv,
    NameTitleDiv,
    NameText,
    TitleText,
    BusinessUnitDiv,
    BusinessUnitText,
    BusinessUnitLink,
    ContactInfoDiv,
    ContactInfoText,
} from "./employee-result-styles";

const EmployeeResult = ({ employeeData }) => {
    // Get the d3 state and action dispatcher
    const { dispatch } = useContext(D3Context);
    
    /**
     * Dispatches an action to set the root node and expansion path to open the chart where the user searched.
     * @param {object} e 
     * @param {object} employeeData 
     */
    const openInOrgChart = (e, employeeData) => {
        console.log("clicked link: ", e.target)
        console.log("data are ", employeeData)
        dispatch({
            type: "SET_TREECHART_ROOT",
            dataRoot: CanadaOrgChart[employeeData.department][0],
            nodeExpansionPath: employeeData.expansionPath,
        })

    }

    return ( 
        <EmployeeResultOuterDiv>
            <NameTitleDiv>
                <NameText>
                    {employeeData.name}
                </NameText>
                <TitleText>
                    {employeeData.title}
                </TitleText>
            </NameTitleDiv>
            <BusinessUnitDiv>
                <div>
                    <BusinessUnitText>
                        {employeeData.department}
                        <span> > </span>
                    </BusinessUnitText>
                </div>
                <BusinessUnitLink
                  onClick={(e) => {
                      openInOrgChart(e, employeeData);
                  }}
                >
                    {employeeData.businessUnit}
                </BusinessUnitLink>
            </BusinessUnitDiv>
            <ContactInfoDiv>
                <ContactInfoText>
                    {employeeData.email}
                    <span> | </span>
                    {employeeData.phone}
                </ContactInfoText>
                <ContactInfoText>
                    {employeeData.address}
                </ContactInfoText>
            </ContactInfoDiv>
        </EmployeeResultOuterDiv>
     );
}
 
export default EmployeeResult;