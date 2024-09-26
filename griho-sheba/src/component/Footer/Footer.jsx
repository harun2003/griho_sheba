//import React from 'react';
import './footer.css'
import { assets } from './../../assets/assets';
const Footer = () => {
    return (
        <div className='footer' id='footer'>
           <div className="footer-content">
            <div className="footer-content-left">
                 <img src={assets.logo} alt="" />
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi odio ea quod repellendus nesciunt aliquid deleniti doloremque facere inventore provident perferendis, deserunt tempore blanditiis explicabo id soluta, reprehenderit nihil!</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privecy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+8801817844031</li>
                    <li>contact@grihosheba.com</li>
                </ul>
            </div>
           </div>
           <hr />
           <p className="footer-copyright">Copyright 2024 © Grihosheba.com - All Right Reserved</p>
        </div>
    );
};

export default Footer;