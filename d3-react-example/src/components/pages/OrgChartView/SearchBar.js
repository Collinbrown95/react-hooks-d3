import React from "react";

import {
    MDBInputStyled,
    MDBColStyled,
} from "./chart-controller-styles";

const SearchPage = () => {
  return (
    <MDBColStyled>
      <MDBInputStyled hint="Search" type="text" />
    </MDBColStyled>
  );
}

export default SearchPage;