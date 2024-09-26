//import React from 'react';
import { useState } from 'react';
import ExploreService from '../../component/ExploreService/ExploreService';
import Header from '../../component/Header/Header';
import './home.css'
import ServiceDisplay from '../../component/ServiceDisplay/ServiceDisplay';
import AppDownload from '../../component/appDownload/AppDownload';
const Home = () => {

  const [category,setCategory] = useState("All");

    return (
        <div>
            <Header/>
            <ExploreService category={category} setCategory={setCategory}/>
            <ServiceDisplay category={category}/>
            <AppDownload/>
        </div>
    );
};

export default Home;