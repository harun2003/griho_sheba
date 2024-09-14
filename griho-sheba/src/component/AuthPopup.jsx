import React, { useState } from 'react';
import LoginPopup from './LoginPopup/LoginPopup';
import SignUpPopup from './SignupPopUp/SignUpPopup';

const AuthPopup = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            {showLogin ? (
                <LoginPopup setShowLogin={setShowLogin} />
            ) : (
                <SignUpPopup setShowLogin={setShowLogin} />
            )}
        </div>
    );
};

export default AuthPopup;
