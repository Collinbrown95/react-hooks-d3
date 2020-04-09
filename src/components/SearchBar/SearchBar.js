import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

import { D3Context } from "../../contexts/D3Context";

import { employeeSearchResults } from "../../data/SearchResultData/employeeSearchResults";


import {
    SearchBarDiv,
    FormStyle,
    SearchBarStyle,
    SubmitButtonStyle
} from "./search-bar-styles";


const SearchBar = () => {
  // Get the d3 state and action dispatcher
  const { dispatch } = useContext(D3Context);

  /**
   * Sets fake results to the employeeSearchResults state variable.
   * @param {object} e The event object 
   */
  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_EMPLOYEE_SEARCH_RESULTS",
      employeeSearchResults,
    })
  }

  const onSearchChange = (e) => {
    // TODO: incrementally update the search result state variable as the user types
    // console.log("Search Changed ", e.target.value)
    e.preventDefault();
  }

  return (
    <SearchBarDiv>
      <FormStyle
        onSubmit={onSearchSubmit}
        autoComplete="off"
      >
        <SearchBarStyle
          type="text"
          name="acronym"
          aria-label="search bar"
          onChange={onSearchChange}
          placeholder="Search"
        />
        <SubmitButtonStyle
          type="submit"
          aria-label="submit search"
          value=""
        >
          <FontAwesome name="fas fa-search"/>
        </SubmitButtonStyle>
      </FormStyle>
    </SearchBarDiv>
      
  )
}

export default SearchBar;