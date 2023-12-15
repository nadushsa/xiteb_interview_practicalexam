import React, { useState } from "react";

//import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/dist/modal.js';

import './Home.css';

import Featured from "../../components/featured/Featured";

const Content1 = () => (
    <div className="content1">
        <div className="img-container col-lg-12 col-md-12 col-sm-12 col-12">
            <img src="./img/cinnamon_life.jpg" />
        </div>
        
        <div className="content row">
            <div className="img-container col-lg-4 col-md-4 col-sm-12 col-12">
                <img src="./img/sl.png"/>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-0 col-0"></div>
            <div className="text-area col-lg-3 col-md-5 col-sm-12 col-12">
                <h3>Cinnamon Life</h3>
                <p>Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options.</p>
                <button>Discover More</button>
            </div>
        </div>
    </div> 
);

const Content2 = () => (
    <div className="content2">
        <div className="img-container col-lg-12 col-md-12 col-sm-12 col-12">
            <img src="./img/cinnamon_grand.jpg" />
        </div>
        
        <div className="content row">
            <div className="img-container col-lg-4 col-md-4 col-sm-12 col-12"></div>
            <div className="col-lg-4 col-md-3 col-sm-0 col-0"></div>
            <div className="text-area col-lg-3 col-md-5 col-sm-12 col-12">
                <h3>Cinnamon Grand Colombo</h3>
                <p>Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options.</p>
                <button>Discover More</button>
            </div>
        </div>
    </div> 
);

const Content3 = () => (
    <div className="content3">
        <div className="img-container col-lg-12 col-md-12 col-sm-12 col-12">
            <img src="./img/cinnamon_lakeside.jpg" />
        </div>
        
        <div className="content row">
            <div className="img-container col-lg-4 col-md-4 col-sm-12 col-12"></div>
            <div className="col-lg-4 col-md-3 col-sm-0 col-0"></div>
            <div className="text-area col-lg-3 col-md-5 col-sm-12 col-12">
                <h3>Cinnamon Lakeside Colombo</h3>
                <p>Spend time with those who matter by a calm, rippling lake at Cinnamon Lakeside, the plush oasis of peace and warmth, right in the middle of Colombo.</p>
                <button>Discover More</button>
            </div>
        </div>
    </div>  
);

const Home = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
    };

    return (
        <div className="home">
            <Featured />

            <div className="destinations">
                <div className="container">
                    <h1>Our Destinations</h1>

                    <select value={selectedValue} onChange={handleSelectChange}>
                        <option value="option1">Cinnamon Life</option>
                        <option value="option2">Cinnamon Grand Colombo</option>
                        <option value="option3">Cinnamon Lakeside Colombo</option>
                    </select>

                    {selectedValue === 'option1' && <Content1 />}
                    {selectedValue === 'option2' && <Content2 />}
                    {selectedValue === 'option3' && <Content3 />}
                </div>
            </div>

            <div className="news">
                <div className="container">
                    <h1>Wonderful stays await</h1>
                    <h6>Indulge in a cozy getaway with our exclusive offers.</h6>
                    <div className="offer-container row">
                        <div className="card-container col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="card text-bg-dark">
                                <img src="./img/c1.jpg" class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">ADVANCE PURCHASE DISCOUNT - SAVE UP TO 17%</h5>
                                </div>
                            </div>
                        </div>

                        <div className="card-container col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="card text-bg-dark">
                                <img src="./img/c2.jpg" class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">MULTIPY YOUR POINTS</h5>                                  
                                </div>
                            </div>
                        </div>

                        <div className="card-container col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="card text-bg-dark">
                                <img src="./img/c3.jpg" class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">FREE BONUS POINTS AT NEW HOTELS</h5>
                                </div>
                            </div>
                        </div>

                        <div className="card-container col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="card text-bg-dark">
                                <img src="./img/c4.jpg" class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">PARK & STAY</h5>
                                </div>
                            </div>
                        </div>

                        <div className="card-container col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="card text-bg-dark">
                                <img src="./img/c5.jpg" class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">EXPERIENCE THE STAY</h5>
                                </div>
                            </div>
                        </div>

                        <div className="card-container col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="card text-bg-dark">
                                <img src="./img/c6.jpg" class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">BREAKFAST INCLUDED PACKAGE</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offers">
                <div className="container">
                    <h1>Offers</h1>

                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src="./img/o1.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div className="text">
                                        <p className="p1">Rooms & Suites</p>
                                        <p className="p2">Shangri–La Circle Exclusive Member Rate with Breakfast</p>
                                        <p className="p3">Exclusive Member Rate with Breakfast for Shangri-La Circle member.</p>
                                        <p className="p4">From LKR 58,797.00 Average Per Night</p>
                                    </div>
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="./img/o2.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div className="text">
                                        <p className="p1">Rooms & Suites</p>
                                        <p className="p2">Shangri–La Circle Exclusive Member Rate</p>
                                        <p className="p3">Exclusive Member Rate for Shangri-La Circle member.</p>
                                        <p className="p4">From LKR 52,264.00 Average Per Night</p>
                                    </div>
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="./img/o3.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div className="text">
                                        <p className="p1">Weddings</p>
                                        <p className="p2">Engagements and Registrations 2023</p>
                                        <p className="p3">Begin your journey to matrimony with an intimate event for your loved ones.</p>
                                        <p className="p4"></p>
                                    </div>
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;