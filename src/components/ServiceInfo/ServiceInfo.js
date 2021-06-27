import React from 'react';
import coin from '../../images/coin.png';
import delivery from '../../images/delivery.png';
import hands from '../../images/hands.png';
import selection from '../../images/selection.png'
import ServiceCard from '../ServiceCard/ServiceCard';
import './ServiceInfo.scss';

const ServiceInfo = () => {
    const serviceData=[
        {
            title:'Deliveries',
            description:'Your rentals will be delivered to you',
            subDescription:' on time',
            bottomTitle:'Get Started',
            img:delivery,
            id:1,
            animationLeft:'fade-right',
            spacing:'first' 
        },
        {
            title:'Insurance',
            description:'Your equipment are insured. Rent with',
            subDescription:'peace of mind.',
            bottomTitle:'Get Started',
            img:hands,
            id:2,
            animationLeft:'fade-left',
            spacing:'second'
        },
        {
            title:'Pay later',
            description:'Yes. You heard right. Rent now and',
            subDescription:'pay later',
            bottomTitle:'Get Started',
            img:coin,
            id:3,
            animationLeft:'fade-right',
            spacing:'third'
        },
        {
            title:'20% off',
            description:'Share and receive 20%OFF your next',
            subDescription:'rental',
            bottomTitle:'Share',
            img:selection,
            id:4,
            animationLeft:'fade-left',
            spacing:'fourth'
        }
        
    ]
    return (
        <div className="container">
            <div className="service-section">
                <div className="service-container">
                    {
                        serviceData.map(service =><ServiceCard service={service} key={service.id}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;