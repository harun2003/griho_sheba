import { useState } from 'react';
import './loginpopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin, setIsSignUp }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    {}
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
                </div>

                <div className="login-popup-input">
                    {currState === "Sign Up" && <input type="text" placeholder='Your name' required />}
                    
                    <input type="email" placeholder='Your e-mail' required />
                    {currState === "Sign Up" && <input type="tel" placeholder='Your phone number' required />}
                    <input type="password" placeholder='Password' required />
                </div>

                <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
                
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>

                {}
                {currState === "Login" ? (
                    <p>Want to create a new account? 
                        {}
                        <span onClick={() => setIsSignUp(true)}>Click here</span> {}
                    </p>
                ) : (
                    <p>Already have an account? 
                        {}
                        <span onClick={() => setCurrState("Login")}>Login here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
