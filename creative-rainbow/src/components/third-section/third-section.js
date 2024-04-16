import './third.css';
import React from "react";
import thirdSectionimg from './images/third.png'

function ThirdSection() {
    return (
        <div className="main">
            <div className="container">
                <div className="main-items">
                    <div className="left-main-section">
                    <img src={thirdSectionimg} alt="heroimg"/>
                </div>
                    <div className="right-main-section">
                        <h1>UI/UX design subscription: Elevate your startup.</h1>
                        <p className="hero-desc">Boost your startup with our UI/UX design subscription – affordable and adaptable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThirdSection;