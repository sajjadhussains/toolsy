import React, { useEffect } from 'react';
import './ServiceCard.scss';
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceCard = (service) => {
    const {title,description,img,bottomTitle,subDescription} = service.service;
    console.log(service.service.animationLeft);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div className={`service-card mb-5 service-${service.service.spacing}`} data-aos={service.service.animationLeft} >
        <div >
            <div class="d-flex">
                <div class="service-img">
                    <img class="" src={img} alt=""/>
                </div>
                <div class="service-text">
                    <span className="title">{title}</span>
                    <p className="description">{description} {subDescription}</p>   
                    <span className="bottom-title">{bottomTitle}</span>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;