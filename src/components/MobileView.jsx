import React from 'react';
import smallGirl from '../images/hero-mobile.jpg';
import Logo from "./Logo";
import Heading from "./Heading";
import EmailInput from "./EmailInput";

function MobileView() {
    return (
    <div className="s-container">
        <div className="s-logo">
            <Logo />
        </div>
        <div className="s-image">
            <img src={smallGirl} alt="Girl" />
        </div>
        <div className="s-content">
            <Heading />
            <EmailInput />
        </div>
    </div>
    ); 
}

export default MobileView;