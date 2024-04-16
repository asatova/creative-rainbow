import './hero-section.css';
import React from "react";
import heroimg from './images/.gitignore.png'

function HeroSection() {
    return (
       <div className="main">
           <div className="container">
               <div className="main-items">
                   <div className="right-main-section">
                    <h1>UI/UX design subscription: Elevate your startup.</h1>
                       <p className="hero-desc">Boost your startup with our UI/UX design subscription – affordable and adaptable.</p>
                       <button className="hero-button">See plans</button>
                   </div>
                   <div className="left-main-section">
                       <img src={heroimg} alt="heroimg"/>
                   </div>
               </div>
           </div>
       </div>
    );
}

export default HeroSection;