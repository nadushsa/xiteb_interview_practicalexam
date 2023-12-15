import React from "react";

//import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/dist/modal.js';

import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./img/f1.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Shangri-La Colombo</h5>
                        <p>Come with us through the whimsical world of Shangri-La, where your personal paradise awaits.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="./img/f2.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Shangri-La Colombo</h5>
                        <p>A personal tropical sanctuary set within the heart of the city</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="./img/f3.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Rooms & Suites</h5>
                        <p>Tastefully designed with the modern traveler in mind</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="./img/f4.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Shang Palace</h5>
                        <p>Celebrate the art of Chinese cuisine in the heart of Colombo</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="./img/f5.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Points on Plates</h5>
                        <p>Earn up to 3X Points at restaurants and bars worldwide.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="featured-mobile">
                <button>Book a room now</button>
            </div>
        </div>
    );
}

export default Featured;