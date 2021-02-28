import React from 'react';
import logo from '../../images/epl.png';
import "./Header.css";
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img class="image-logo" src={logo} alt=""/></a>
                <div>
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white"  href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Players Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Feedback</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;