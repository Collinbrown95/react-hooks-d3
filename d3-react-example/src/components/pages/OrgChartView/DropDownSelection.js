import React from "react";

import {
    Dropdown,
    Button,
    ButtonGroup,
} from 'react-bootstrap';

import {
    DropDown,
    DropdownToggle,
    DropDownMenu,
    DropDownContent,
    DropDownItem,
} from "./chart-controller-styles";

function DropDownSelection() {

    return (
        <DropDown>
            <DropdownToggle variant="success" id="dropdown-basic">
                Dropdown Button
            </DropdownToggle>

            <DropDownMenu>
                <DropDownItem href="#/action-1">Action</DropDownItem>
                <DropDownItem href="#/action-2">Another action</DropDownItem>
                <DropDownItem href="#/action-3">Something else</DropDownItem>
            </DropDownMenu>
        </DropDown>
    )
}

export default DropDownSelection;