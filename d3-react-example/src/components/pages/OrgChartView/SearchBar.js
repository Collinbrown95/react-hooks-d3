import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

import {
    SearchBarDiv,
    FormStyle,
    SearchBarStyle,
    SubmitButtonStyle
} from "./chart-controller-styles.js";


class SearchBar extends Component {
    render() {
        return (
          <SearchBarDiv>
            <FormStyle
              onSubmit={this.props.onSearchAcronym.bind(this)}
              autoComplete="off"
            >
              <SearchBarStyle
                type="text"
                name="acronym"
                aria-label="search bar"
                onChange={this.props.onSearchChange}
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
}

export default SearchBar;