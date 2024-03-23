import React from 'react';
function Menu({ App }) {
    return (
        <div className="menu-body" data-testid="menu-content">
            <div className="company-content">
                <a href="#">General Automobiles</a>
            </div>
            <div className="navbar-content" id="navbarNav">
                <ul className="navbar-content-items">
                    <li className="nav-item">
                        <a className="nav-link" href=".nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="my-app\src\Component\Home.js">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.royalenfield.com/in/en/motorcycles/">Vehicles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.royalenfield.com/in/en/service">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.royalenfield.com/in/en/locate-us/">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.royalenfield.com/in/en/locate-us/">Locate Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Menu;