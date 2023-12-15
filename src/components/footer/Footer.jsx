import React from "react";
import {Link} from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="row">
                        <div className="column col-lg-4 col-md-4 col-sm-12 col-12">
                            <h6>Corporate information</h6>
                            <Link to="">Cinnamon Hotels & Resorts</Link>
                            <Link to="">John Keells Group</Link>

                            <h6>Blogs</h6>
                            <Link to="">Cinnamon Ublog</Link>

                            <h6>Careers</h6>
                            <Link to="">Careers</Link>
                        </div>
                        <div className="column col-lg-4 col-md-4 col-sm-12 col-12">
                            <h6>News and Awards</h6>
                            <Link to="">News</Link>
                            <Link to="">Awards</Link>

                            <h6>Corporate Governance</h6>
                            <Link to="">CSR</Link>
                        </div>
                        <div className="column col-lg-4 col-md-4 col-sm-12 col-12">
                            <h6>Data Privacy & Security Policy</h6>
                            <Link to="">Terms & Conditions</Link>
                            <Link to="">Privacy Statement</Link>

                            <h6>Get In Touch</h6>
                            <Link to="">info@cinnamonhotels.com</Link>
                            <Link to="">Hotel Contact Information</Link>

                            <h6>Follow Us</h6>
                            <div className="social-media">
                                <Link to=""><img src="./img/facebook.png" /></Link>
                                <Link to=""><img src="./img/instagram.png" /></Link>
                                <Link to=""><img src="./img/x.png" /></Link>
                                <Link to=""><img src="./img/in.png" /></Link>
                                <Link to=""><img src="./img/yt.png" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="form col-lg-6 col-md-6 col-sm-12 col-12">
                        <form>
                            <h5>Get Cinnamon in your inbox</h5>
                            <div className="fill">
                                <input type="email" placeholder="Email Adress" />
                                <button type="submit">Submit</button>
                            </div>
                            <div className="check">
                                <input type = "checkbox" />
                                <label> By Checking this box, I consent to the processing of my Personal Data by Cinnamon for the purpose and within the Conditions set out in this form and the </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;