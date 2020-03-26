import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
    BetaBannerDiv,
    BetaLogoStyle,
    BetaTextStyle,
    FeedbackContainer,
    Feedback,
    EmailButton,
} from "./beta-banner-styles.js";

import emailIcon from '../images/send-email.png';

import ReactTooltip from 'react-tooltip'

// TODO: change href to href='mailto:"

class BetaBanner extends Component {

    render() {
        return (
            <BetaBannerDiv>
                <BetaLogoStyle>&#x3B2;&eta;&tau;&alpha;</BetaLogoStyle>
                <BetaTextStyle>
                    Org Chart is in the 
                    <span style={{color: "#dc006c"}}>beta</span>
                     phase of development.
                </BetaTextStyle>
            </BetaBannerDiv>
        )
    }
}

export default BetaBanner;