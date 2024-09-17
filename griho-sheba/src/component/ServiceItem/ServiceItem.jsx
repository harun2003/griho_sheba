import { assets } from '../../assets/assets';
import './serviceitem.css'

const ServiceItem = ({id,name,description,image}) => {

    return (
        <div className='service-item'>
            <div className="service-item-img-container">
                <img className='service-item-image' src={image} alt="" />
            </div>
            <div className="service-item-info">
                <div className="service-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='service-item-desc'>{description}</p>
                
            </div>
        </div>
    );
};

export default ServiceItem;