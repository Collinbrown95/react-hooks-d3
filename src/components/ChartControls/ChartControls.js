import React, { useState, useEffect } from "react";
import {
    ControlsDiv,
    ControllerTitle,
} from "./chart-controls-styles";

import DropDown from "../DropDown/DropDown";
import SearchBar from "../SearchBar/SearchBar";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import SearchResults from "../SearchResults/SearchResults";

import { dropDownOptions } from "./dropDownData";


// import SearchPage from "./SearchBar";

function ChartControls({setExpansionPath}) {
    // State variable to hold dropdown menu options
    const [dropDownList, setDropDownList] = useState(dropDownOptions);
    // For search results
    const [searchResult, setSearchResult] = useState();
    // active button in button group
    const [activeButton, setActiveButton] = useState("Employees");

    useEffect(() => {
        // To verify that state variables updated as expected
        // console.log("new state is ", activeButton);
    })

    const onSearchAcronym = (e) => {
      e.preventDefault(); // prevent the form from automatically submitting + refreshing the page.
      console.log("Submitted Search ", e)
    }

    const onSearchChange = (e) => {
      // TODO: incrementally update the search result state variable as the user types
      // console.log("Search Changed ", e.target.value)
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
  
    const setActiveButtonClick = (e) => {
      console.log(activeButton)
      setActiveButton(activeButton === "Employees" ? "BusinessUnits" : "Employees");
    }

    return (
        <ControlsDiv>
            <ControllerTitle>
                Chart Controls
            </ControllerTitle>
            <SearchBar
              onSearchAcronym={onSearchAcronym}
              onSearchChange={onSearchChange}
              setExpansionPath={setExpansionPath}
            />
            <DropDown
              title="Select Department"
              list={dropDownList}
              resetThenSet={resetThenSet}
            />
            <ButtonGroup
              activeButton={activeButton}
              setActiveButtonClick={setActiveButtonClick}
            />
            <SearchResults />
        </ControlsDiv>
    )
}

export default ChartControls;