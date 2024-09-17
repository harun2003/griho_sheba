import { useContext } from 'react';
import './servicedisplay.css'
import { StoreContext } from '../context/StoreContext';
import ServiceItem from '../ServiceItem/ServiceItem';

const ServiceDisplay = ({category}) => {

    const {solution_list} = useContext(StoreContext)
    return (
        <div className='service-display' id='service-display'>
            <h2>Quality services near you</h2>
            <div className="service-displai-list">
                {solution_list.map((item,index)=>{
                     return  <ServiceItem  key={index}
                     id={item._id} 
                     name={item.name} 
                     description={item.description} 
                     image={item.image}/>
                })}
            </div>
        </div>
    );
};

export default ServiceDisplay;