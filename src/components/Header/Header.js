import React from 'react';
import logo from '../../images/logo.png';
import './Header.scss';
const Header = () => {
    return (
        <div>
            <nav className="navbar top-navbar sticky-top navbar-expand-lg">
    <div className="container">
        <a className="navbar-brand" href="/">
            <img src={logo} alt="Vantage"/>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi-list"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav right-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="/training.html">
                        Feature
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/coaches.html">
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard.html">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard.html">
                        Get Started
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

        </div>
    );
};

export default Header;