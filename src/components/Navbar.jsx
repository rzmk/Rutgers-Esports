/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logosdata from '../data/logosdata';

function appear(dropdownType) {
    const dropdown = `dropdown-${dropdownType}`;
    document.getElementById(dropdown).style.visibility = 'visible';
    document.getElementById(dropdown).style.opacity = '1';
}

function disappear(dropdownType) {
    const dropdown = `dropdown-${dropdownType}`;
    document.getElementById(dropdown).style.visibility = 'hidden';
    document.getElementById(dropdown).style.opacity = '0';
}

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top">
                <Link to="/" className="navbar-brand p-0">
                    <img src={logosdata.red.logo} width="75" height="75" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle text-truncate" onMouseEnter={() => appear('about')} id="navbarDropdown-about" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                            </Link>
                            <div className="dropdown-menu fade-down" aria-labelledby="navbarDropdown" id="dropdown-about" onMouseLeave={() => disappear('about')}>
                                <Link to="/community" className="dropdown-item" onClick={() => disappear('about')}>Our Community</Link>
                                <Link to="/competitive" className="dropdown-item" onClick={() => disappear('about')}>Competitive</Link>
                                <Link to="/discord" className="dropdown-item" onClick={() => disappear('about')}>Discord</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle text-truncate" onMouseEnter={() => appear('clubs')} id="navbarDropdown-clubs" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Clubs
                            </Link>
                            <div className="dropdown-menu fade-down" aria-labelledby="navbarDropdown" id="dropdown-clubs" onMouseLeave={() => disappear('clubs')}>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Call of Duty</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>CS:GO</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>DotA 2</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Fighting Games Community (FGC)</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Hearthstone</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>League of Legends</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Overwatch/Valorant</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Pokemon</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Rainbow 6 Siege</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Rhythm Games Club (RGC)</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Rocket League</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Smash Melee</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Smash Ultimate</Link>
                                <Link to="#" className="dropdown-item" onClick={() => disappear('clubs')}>Women&apos;s Gaming League</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                Teams
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                Events
                            </Link>
                        </li>
                        <li className="nav-item text-truncate">
                            <Link to="#" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="search-box ml-auto col-lg-3 p-0">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="button">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
