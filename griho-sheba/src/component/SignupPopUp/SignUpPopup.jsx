import React from 'react';
import './signuppopup.css';
import { assets } from '../../assets/assets';

const SignUpPopup = ({ setShowLogin, setIsSignUp }) => {
    return (
        <div className='signup-popup'>
            <form className="signup-popup-container">
                <div className="signup-popup-title">
                    <h2>Sign Up</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
                </div>
                <div className="signup-popup-input">
                    <input type="text" placeholder='Your name' required />
                    <input type="email" placeholder='Your e-mail' required />
                    <input type="tel" placeholder='Your phone number' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>Create Account</button>
                <div className="signup-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                <p>
                    Already have an account? 
                    <span onClick={() => setIsSignUp(false)}>Login here</span> {/* Switch back to login */}
                </p>
            </form>
        </div>
    );
};

export default SignUpPopup;
