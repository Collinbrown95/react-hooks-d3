import React, { useState, useEffect } from "react";
import {
    ControlsDiv,
    ControllerTitle,
} from "./org-chart-view-styles";

import DropDown from "./DropDown";
import SearchBar from "./SearchBar";

import { dropDownOptions } from "./dropDownData";


// import SearchPage from "./SearchBar";

function ChartController() {
    // State variable to hold dropdown menu options
    const [dropDownList, setDropDownList] = useState(dropDownOptions);
    // For search results
    const [searchResult, setSearchResult] = useState();

    useEffect(() => {
        // To verify that state variables updated as expected
        console.log("new state is ", dropDownList);
    })

    const onSearchAcronym = (e) => {
      e.preventDefault(); // prevent the form from automatically submitting + refreshing the page.
      console.log("Submitted Search ", e)
    }

    const onSearchChange = (e) => {
      // TODO: incrementally update the search result state variable as the user types
      console.log("Search Changed ", e.target.value)
    }
  
    const resetThenSet = (id, key) => {
      // Get a deep copy of the dropDownList
      let temp = JSON.parse(JSON.stringify(dropDownList))
      // Reset the selected property for each item
      temp.forEach(item => item.selected = false);
      // Flag the current item as selected
      temp[id].selected = true;
      // Update the dropDownList state
      setDropDownList(temp);
    }
    
    return (
        <ControlsDiv>
            <ControllerTitle>
                Chart Controls
            </ControllerTitle>
            <SearchBar
              onSearchAcronym={onSearchAcronym}
              onSearchChange={onSearchChange}
            />
            <DropDown
              title="Dropdown Menu"
              list={dropDownList}
              resetThenSet={resetThenSet}
            />
        </ControlsDiv>
    )
}

export default ChartController;