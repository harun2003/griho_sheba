import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import { useState } from 'react';
import LoginPopup from './component/LoginPopup/LoginPopup';
import SignUpPopup from './component/SignupPopUp/SignUpPopup';
import Footer from './component/Footer/Footer';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 

  return (
    <>
      {}
      {showLogin ? (
        isSignUp ? (
          <SignUpPopup setShowLogin={setShowLogin} setIsSignUp={setIsSignUp} />
        ) : (
          <LoginPopup setShowLogin={setShowLogin} setIsSignUp={setIsSignUp} />
        )
      ) : null}
      
      <div className="app">
        <Navbar setShowLogin={setShowLogin} setIsSignUp={setIsSignUp} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
