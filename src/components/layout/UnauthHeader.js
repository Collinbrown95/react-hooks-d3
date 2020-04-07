import React, { Component } from 'react';

import { 
    HeaderContainer,
    Title,
    OptionsContainer,
    OptionsLink,
    OptionsIcon,
    AcronymLogo,
    HeaderButtonContainer,
    HeaderButton
} from './header-styles.js';

import acronymerLogo from '../images/thumbnail.png';
import searchIcon from '../images/search.png';
import aboutIcon from '../images/about.png';


class UnauthHeader extends Component {

    render() {
        const {appTitle: enAppTitle, searchNav: enSearchNav, addAcrNav: enAddAcrNav, aboutNav: enAboutNav, langButton: enLangButton, loginButton: enLoginButton} = this.props.englishTemplate;
        const {appTitle: frAppTitle, searchNav: frSearchNav, addAcrNav: frAddAcrNav, aboutNav: frAboutNav, langButton: frLangButton, loginButton: frLoginButton} = this.props.frenchTemplate;
        return (
            <HeaderContainer>
                <AcronymLogo>
                    <img src={acronymerLogo} width="50" height="50" />
                    <Title>{this.props.language === "en" ? enAppTitle : frAppTitle}</Title>
                </AcronymLogo>
                <OptionsContainer>
                    <OptionsLink to="/" onClick={this.props.goBack}>
                        {this.props.language === "en" ? enSearchNav : frSearchNav}
                    </OptionsLink>
                    <OptionsIcon to="/" onClick={this.props.goBack}>
                        <img src={searchIcon} width="25" height="25" />
                    </OptionsIcon>
                    <OptionsLink to="/about">{this.props.language === "en" ? enAboutNav : frAboutNav}</OptionsLink>
                    <OptionsIcon to="/about"><img src={aboutIcon} width="25" height="25" /></OptionsIcon>
                </OptionsContainer>
                <HeaderButtonContainer>
                    <HeaderButton
                      className="btn btn-primary"
                      onClick={this.props.toggleLanguage}
                      style={{fontWeight: '200'}}
                    >{this.props.language === "fr" ? enLangButton : frLangButton}</HeaderButton>
                    <HeaderButton
                      className="btn btn-primary"
                      onClick={this.props.loginRequired}
                      style={{fontWeight: '200'}}
                    >{this.props.language === "en" ? enLoginButton : frLoginButton}</HeaderButton>
                </HeaderButtonContainer>
            </HeaderContainer>
        )
    }
}

export default UnauthHeader;