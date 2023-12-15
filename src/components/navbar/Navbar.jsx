import React, { useState } from "react";
import {Link} from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [isDropdown1Open, setDropdown1Open] = useState(false);
    const [isDropdown2Open, setDropdown2Open] = useState(false);
    const [isDropdown3Open, setDropdown3Open] = useState(false);
    const [isDropdown4Open, setDropdown4Open] = useState(false);
    const [isDropdown5Open, setDropdown5Open] = useState(false);
    const [isDropdown6Open, setDropdown6Open] = useState(false);

    const handleMouseEnter1 = () => {
      setDropdown1Open(true);
    };
    const handleMouseEnter2 = () => {
      setDropdown2Open(true);
    };
    const handleMouseEnter3 = () => {
      setDropdown3Open(true);
    };
    const handleMouseEnter4 = () => {
      setDropdown4Open(true);
    };
    const handleMouseEnter5 = () => {
      setDropdown5Open(true);
    };
    const handleMouseEnter6 = () => {
      setDropdown6Open(true);
    };
    
    const handleMouseLeave1 = () => {
      setDropdown1Open(false);
    };
    const handleMouseLeave2 = () => {
      setDropdown2Open(false);
    };
    const handleMouseLeave3 = () => {
      setDropdown3Open(false);
    };
    const handleMouseLeave4 = () => {
      setDropdown4Open(false);
    };
    const handleMouseLeave5 = () => {
      setDropdown5Open(false);
    };
    const handleMouseLeave6 = () => {
      setDropdown6Open(false);
    };

    return (
        <nav>
            <img 
                className="menu-icon" 
                onClick = {() => {
                    setMenuOpen(!menuOpen);
                }} src="./img/menu.png" />
            
            <div className={`navs ${menuOpen ? 'open' : ''}`}>
                <div className="nav1">
                    <div className="container">
                        <div className="logo">
                            <img src="./img/main-logo.jpeg" />
                        </div>

                        <div className="menu">
                            <ul>
                                <li>
                                    <Link to=" ">Sign In</Link>
                                    <div className="line">|</div>
                                </li>
                                <li>
                                    <Link to=" ">Join Now</Link>
                                    <div className="line">|</div>
                                </li>
                                <li>
                                    <Link to=" ">Find Reservations</Link>
                                    <div className="line">|</div>
                                </li>
                                <li>
                                    <Link to=" ">English</Link>
                                    <div className="line">|</div>
                                </li>
                                <li>
                                    <Link to=" ">LKR</Link>
                                    <div className="line">|</div>
                                </li>
                                <li>
                                    <Link to=" ">
                                        <img src="./img/mobile.png" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="nav2">
                    <div className="container">
                        <div className="menu">
                            <ul>
                                <li onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                                    <div className="dropdown dropdown-container" >
                                        ABOUT
                                    </div>
                                    <img className="down" src="./img/drop-down.png" />
                                    <img className="up" src="./img/drop-up.png" />

                                    {isDropdown1Open && (
                                        <div className="dropdown-content">
                                            <div className="column">
                                                <div>
                                                    <h6>About The Hotel</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Overview</Link></div>
                                                <div className="item"><Link to=" ">Explore Colombo</Link></div>
                                                <div className="item"><Link to=" ">Services & Facilities</Link></div>
                                                <div className="item"><Link to=" ">Map & Directions</Link></div>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                                    <div className="dropdown dropdown-container">
                                        ROOMS & SUITES
                                    </div>
                                    <img className="down" src="./img/drop-down.png" />
                                    <img className="up" src="./img/drop-up.png" />

                                    {isDropdown2Open && (
                                        <div className="dropdown-content">
                                            <div className="column">
                                                <div>
                                                    <h6>Rooms</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Deluxe Lake View</Link></div>
                                                <div className="item"><Link to=" ">Deluxe Ocean View</Link></div>
                                                <div className="item"><Link to=" ">Premier Balcony</Link></div>
                                                <div className="item"><Link to=" ">Premier Ocean View</Link></div>
                                            </div>
                                            
                                            <div className="column">
                                                <div>
                                                    <h6>Horizon Club</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Horizon Club Lake View</Link></div>
                                                <div className="item"><Link to=" ">Horizon Club Ocean View</Link></div>
                                            </div>
                                            
                                            <div className="column">
                                                <div>
                                                    <h6>Suites</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Executive Suites</Link></div>
                                                <div className="item"><Link to=" ">Specialty Suites</Link></div>
                                                <div className="item"><Link to=" ">Shangri-La Suite</Link></div>
                                                
                                            </div>

                                            <div className="column">
                                                <div>
                                                    <h6>Connecting Rooms</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Executive Suite & Premier Ocean Room Connecting</Link></div>
                                                <div className="item"><Link to=" ">Two Deluxe Lake View Rooms Connecting</Link></div>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                <li onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                                    <div className="dropdown dropdown-container">
                                        DINING
                                    </div>
                                    <img className="down" src="./img/drop-down.png" />
                                    <img className="up" src="./img/drop-up.png" />

                                    {isDropdown3Open && (
                                        <div className="dropdown-content">
                                            <div className="column">
                                                <div>
                                                    <h6>Restaurants</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Cake Temptations by Shangri-La Colombo</Link></div>
                                                <div className="item"><Link to=" ">Shang Palace</Link></div>
                                                <div className="item"><Link to=" ">Capital Bar & Grill</Link></div>
                                                <div className="item"><Link to=" ">Central</Link></div>
                                                <div className="item"><Link to=" ">Central café</Link></div>
                                            </div>

                                            <div className="column">
                                                <div>
                                                    <h6>Bars & Lounges</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Sapphyr Lounge</Link></div>
                                                <div className="item"><Link to=" ">Capital Bar & Grill</Link></div>
                                                <div className="item"><Link to=" ">Pool Bar</Link></div>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                <li onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                                    <div className="dropdown dropdown-container">
                                        EXPERIENCE
                                    </div>
                                    <img className="down" src="./img/drop-down.png" />
                                    <img className="up" src="./img/drop-up.png" />

                                    {isDropdown4Open && (
                                        <div className="dropdown-content">
                                          <div className="column">
                                                <div>
                                                    <h6>For Kids</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Overview</Link></div>
                                                <div className="item"><Link to=" ">Adventure Zone</Link></div>
                                                <div className="item"><Link to=" ">Celebrations</Link></div>
                                            </div>

                                            <div className="column">
                                                <div>
                                                    <h6>Health & Leisure</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Overview</Link></div>
                                                <div className="item"><Link to=" ">Health Club</Link></div>
                                                <div className="item"><Link to=" ">Chi, The Spa</Link></div>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                <li onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
                                    <div className=" dropdown dropdown-container">
                                        EVENTS
                                    </div>
                                    <img className="down" src="./img/drop-down.png" />
                                    <img className="up" src="./img/drop-up.png" />

                                    {isDropdown5Open && (
                                        <div className="dropdown-content">
                                          <div className="column">
                                                <div>
                                                    <h6>Meetings & Events</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Overview</Link></div>
                                                <div className="item"><Link to=" ">Experience It</Link></div>
                                                <div className="item"><Link to=" ">Coworking Space</Link></div>
                                                <div className="item"><Link to=" ">Outside Catering</Link></div>
                                                <div className="item"><Link to=" ">Request For Proposal</Link></div>
                                                <div className="item"><Link to=" ">Book Meeting Room Online</Link></div>
                                            </div>

                                            <div className="column">
                                                <div>
                                                    <h6>Wedding and Celebrations</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Overview</Link></div>
                                                <div className="item"><Link to=" ">Wedding Planning</Link></div>
                                                <div className="item"><Link to=" ">Weddings By Shangri-La</Link></div>
                                                <div className="item"><Link to=" ">Request for Proposal</Link></div>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                <li>
                                    <div className="dropdown">
                                        GALLERY
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        OFFERS
                                    </div>
                                </li>

                                <li onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                                    <div className="dropdown dropdown-container">
                                        MORE
                                    </div>
                                    <img className="down" src="./img/drop-down.png" />
                                    <img className="up" src="./img/drop-up.png" />

                                    {isDropdown6Open && (
                                        <div className="dropdown-content">
                                            <div className="column">
                                                <div>
                                                    <h6>Apartments</h6>
                                                </div>
                                                <div className="item"><Link to=" ">Learn More</Link></div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>

                        <div className="button">
                            <button>FIND A HOTEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;