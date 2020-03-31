import React, { useState, useEffect } from "react";
import {
    ControlsDiv,
    ControllerTitle,
} from "./org-chart-view-styles";

import DropDown from "./DropDown";

import { dropDownOptions } from "./dropDownData";


// import SearchPage from "./SearchBar";

function ChartController() {
    // State variable to hold dropdown menu options
    const [dropDownList, setDropDownList] = useState(dropDownOptions);

    useEffect(() => {
        // To verify that state variables updated as expected
        console.log("new state is ", dropDownList);
    })

    function toggleSelected(id, key) {
        let temp = JSON.parse(JSON.stringify(dropDownList[key]))
        temp[id].selected = !temp[id].selected
        console.log("temp is now ", temp)
        this.setState({
          [key]: temp
        })
      }
    
      function resetThenSet(id, key) {
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
            {/* <SearchPage /> */}
            <DropDown
              title="Dropdown Menu"
              list={dropDownList}
              resetThenSet={resetThenSet}
            />
        </ControlsDiv>
    )
}

export default ChartController;