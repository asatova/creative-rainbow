 import './navbar.css';
 import React from "react";
function Navbar() {
    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__data">
                    <a href="#" className="nav__logo">
                        <i className="ri-planet-line"></i> Company
                    </a>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className="ri-menu-line nav__burger"></i>
                        <i className="ri-close-line nav__close"></i>
                    </div>
                </div>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li><a href="#" className="nav__link">Home</a></li>

                        <li><a href="#" className="nav__link">Company</a></li>


                        <li className="dropdown__item">
                            <div className="nav__link">
                                Analytics <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>

                            <ul className="dropdown__menu">
                                <li>
                                    <a href="#" className="dropdown__link">
                                        <i className="ri-pie-chart-line"></i> Overview
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="dropdown__link">
                                        <i className="ri-arrow-up-down-line"></i> Transactions
                                    </a>
                                </li>

                            </ul>
                        </li>

                        <li><a href="#" className="nav__link">Products</a></li>

                        <li><a href="#" className="nav__link">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
