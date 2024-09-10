//import React from 'react';
import  './exploreservice.css'
import { service_list } from '../../assets/assets';
const ExploreService = () => {
    return (
        <div className='explore-service' id='explore-menu'>
            <h1>Explore our services</h1>
            <p className='explore-service-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti minus provident sequi? Quo libero quae.</p>
             <div className='explore-service-list'>
            
                {service_list.map((item,index)=>{
                    return (
                        <div key={index} className="explore-service-list-item">
                            <img src={item.service_image} alt="" />
                            <p>{item.service_name}</p>
                        </div>
                    )
                })}
             </div>
             <hr />
            
        </div>
    );
};

export default ExploreService;