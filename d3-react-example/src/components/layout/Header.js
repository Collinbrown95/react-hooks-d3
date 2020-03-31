import React, { Component } from 'react';

import { 
    HeaderContainer,
    Title,
    OptionsContainer,
    OptionsLink,
    OptionsIcon,
    AcronymLogo,
} from './header-styles.js';

import BetaBanner from "./BetaBanner.js";

import orgChartLogo from '../images/org-chart-logo.png';
import searchIcon from '../images/search.png';
import aboutIcon from '../images/about.png';
import Logo from './Logo.js';


class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <HeaderContainer>
                    {/* <AcronymLogo> */}
                        {/* <Logo/> */}
                        {/* <img alt="Acronym Wiki" src={orgChartLogo} width="50" height="50" /> */}
                    <Title>Dynamic Org Chart</Title>
                    {/* </AcronymLogo> */}
                    <OptionsContainer>
                        <OptionsLink to="/" onClick={this.props.goBack}>
                            Org Chart
                        </OptionsLink>
                        <OptionsIcon to="/" onClick={this.props.goBack}>
                            <img alt="Search Page" src={searchIcon} width="25" height="25" />
                        </OptionsIcon>
                        <OptionsLink to="/about">About</OptionsLink>
                        <OptionsIcon to="/about"><img alt="About Page" src={aboutIcon} width="25" height="25" /></OptionsIcon>
                    </OptionsContainer>
                </HeaderContainer>
                <BetaBanner/>
            </React.Fragment>
            
        )
    }
}

export default Header;