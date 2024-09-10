
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import { useState } from 'react';
import LoginPopup from './component/LoginPopup/LoginPopup';
const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
   <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
       
    </div>
    </>
  );
};

export default App;
