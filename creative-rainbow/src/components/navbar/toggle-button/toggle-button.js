import React, {useEffect, useState} from 'react';

const ToggleButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);

        toggle.addEventListener('click', () => {
            // Add show-menu class to nav menu
            nav.classList.toggle('show-menu');

            // Add show-icon to show and hide the menu icon
            toggle.classList.toggle('show-icon');

            // Update state to reflect menu status
            setIsMenuOpen(!isMenuOpen);
        });
    };

    // Call showMenu function on component mount
    useEffect(() => {

        showMenu('nav-toggle', 'nav-menu');
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            {/* Your JSX for component content */}
        </div>
    );
};

export default ToggleButton;
