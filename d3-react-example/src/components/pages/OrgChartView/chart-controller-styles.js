import styled from 'styled-components';

import {
    Dropdown,
    Button,
    ButtonGroup,
} from 'react-bootstrap';

export const DropDown = styled(Dropdown)`
    margin-top: 1%;
    width: 95%;
    border-radius: 0px;

    &:active {
        border: 0.5px solid #fff !important;
        background: #282828 !important;
        box-shadow: none !important;
    }

    &:focus {
        border: 0.5px solid #fff !important;
        background: #282828 !important;
        color: #fff !important;
        box-shadow: none !important;
    }
`;

export const DropdownToggle = styled(Dropdown.Toggle)`
    width: 100%;

    background: #fff;
    border: 0.5px solid #282828;
    border-radius: 0px;

    color: #282828;
    font-size: 14px;
    font-weight: 300;

    &:hover {
        border: 0.5px solid #fff;
        background: #282828;
        color: #fff;
    }

    &:active {
        border: 0.5px solid #fff !important;
        background: #282828 !important;
        box-shadow: none !important;
    }

    &:focus {
        border: 0.5px solid #fff !important;
        background: #282828 !important;
        color: #fff !important;
        box-shadow: none !important;
    }
`;

export const DropDownItem = styled(Dropdown.Item)`
  background: #fff;

  border: none !important;
  border-radius: 0px;
`;

export const DropDownMenu = styled(Dropdown.Menu)`
    width: 100%;

    background: #fff;
    border: 0.5px solid #282828;
    border-radius: 0px;
    
    &:active {
        border: 0.5px solid #fff !important;
        background: #282828 !important;
        box-shadow: none !important;
    }
`;