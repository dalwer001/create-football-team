import React from 'react';
import logo from '../../images/epl.png';
import "./Header.css";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-bg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="image-logo" src={logo} alt=""/></a>
                <div>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white"  href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Players Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Feedback</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;