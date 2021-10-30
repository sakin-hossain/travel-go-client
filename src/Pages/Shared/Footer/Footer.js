import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div>
                    <h2>Contact</h2>
                    <p><i class="fas fa-phone"></i> Phone <br /> <span>11-55-777-88</span></p>
                    <p><i class="fas fa-envelope"></i> Email <br /> <span>travel@go.com</span></p>
                    <p><i class="fas fa-map-marker"></i> Address <br /> <span>123, Uttara, Dhaka</span></p>
                </div>
                <div>
                    <h2>About us</h2>
                    <ul>
                        <li><Link to='/doctor'>Doctors</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/Services'>Services</Link></li>
                        <li><Link to='/contract'>Contract</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Support</h2>
                    <ul>
                        <li>Online Support</li>
                        <li>Free Consultancy</li>
                        <li>24/7 Service</li>
                        <li>Make Call</li>
                        <li>Contract Support</li>
                    </ul>
                </div>
            </div>
            {/* copyright section */}
            <div className="copyright">
                <p>Copyright &copy; 2021 MediWise. Designed By Md. Sakin Hossain</p>
                <p> <Link to="/home">Terms &amp; Conditions </Link> | <Link to="/home"> Privacy Policy</Link></p>
            </div>
        </>
    );
};

export default Footer;