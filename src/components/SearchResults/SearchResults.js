import React, { useContext } from 'react';

import {
    SearchResultsDiv,
} from "./search-results-styles";

import { D3Context } from "../../contexts/D3Context";

import EmployeeResult from "../EmployeeResult/EmployeeResult";

const SearchResults = () => {
    // Get the d3 state and action dispatcher
    const { d3State } = useContext(D3Context);
    // TODO: Using index position as key temporarily; should use ID provided by ElasticSearch in future.
    return ( 
        <SearchResultsDiv>
            {
                d3State.employeeSearchResults.map((employee, idx) => (
                    <EmployeeResult
                      key={idx}
                      employeeData={employee}
                    />
                ))
            }
        </SearchResultsDiv>
     );
}
 
export default SearchResults;