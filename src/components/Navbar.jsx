/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logosdata from '../data/logosdata';
import currentClub from './CurrentClub';
import isClubPage from './isClubPage';

const appear = (dropdownType) => {
    const dropdown = `dropdown-${dropdownType}`;
    document.getElementById(dropdown).style.visibility = 'visible';
    document.getElementById(dropdown).style.opacity = '1';
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const redirect = (page) => {
    window.location.href = `/${page}`;
};

const disappear = (dropdownType, club = '') => {
    const dropdown = `dropdown-${dropdownType}`;
    document.getElementById(dropdown).style.visibility = 'hidden';
    document.getElementById(dropdown).style.opacity = '0';
    if (club !== '') {
        if (club !== 'noscroll') {
            currentClub.currentClub = club;
            scrollToTop();
        }
    }
};

function Navbar() {
    const path = useLocation().pathname;
    if (path !== '/clubs') {
        isClubPage.isClubPage = false;
    }

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
                            <Link to="/" className="nav-link" onClick={scrollToTop}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle text-truncate" onMouseEnter={() => appear('about')} id="navbarDropdown-about" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={scrollToTop}>
                                About
                            </Link>
                            <div className="dropdown-menu fade-down" aria-labelledby="navbarDropdown" id="dropdown-about" onMouseLeave={() => disappear('about', 'noscroll')}>
                                <Link to="/community" className="dropdown-item" onClick={() => { disappear('about', 'Community'); }}>Our Community</Link>
                                <Link to="/directors" className="dropdown-item" onClick={() => { disappear('about', 'Directors'); }}>Directors</Link>
                                <Link to="/competitive" className="dropdown-item" onClick={() => { disappear('about', 'Competitive'); }}>Competitive</Link>
                                <Link to="/discord" className="dropdown-item" onClick={() => { disappear('about', 'Discord'); }}>Discord</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/clubs" className="nav-link dropdown-toggle text-truncate" onMouseEnter={() => appear('clubs')} id="navbarDropdown-clubs" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => { scrollToTop(); redirect('clubs'); }}>
                                Clubs
                            </Link>
                            <div className="dropdown-menu fade-down" aria-labelledby="navbarDropdown" id="dropdown-clubs" onMouseLeave={() => disappear('clubs', 'noscroll')}>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'Call of Duty')}>Call of Duty</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'CS:GO')}>CS:GO</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'DotA 2')}>DotA 2</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'Fighting Games Community (FGC)')}>Fighting Games Community (FGC)</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'Hearthstone')}>Hearthstone</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'League of Legends')}>League of Legends</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'RU Valowatch')}>Overwatch/Valorant</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'Pokemon')}>Pokemon</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'Rainbow Six Siege')}>Rainbow 6 Siege</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'Rhythm Games Club (RGC)')}>Rhythm Games Club (RGC)</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'Rocket League')}>Rocket League</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'Smash Melee')}>Smash Melee</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', 'Smash Ultimate')}>Smash Ultimate</Link>
                                <Link to="/clubs" className="dropdown-item" onClick={() => disappear('clubs', "Women's Gaming League")}>Women&apos;s Gaming League</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link" onClick={scrollToTop}>
                                Teams
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link" onClick={scrollToTop}>
                                Events
                            </Link>
                        </li>
                        <li className="nav-item text-truncate">
                            <Link to="#" className="nav-link" onClick={scrollToTop}>
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
