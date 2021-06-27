import React, { useEffect } from 'react';
import Group77 from '../../images/Group 77.png';
import './HeaderMain.scss';
import Aos from "aos";
import "aos/dist/aos.css";
const HeaderMain = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <section className="container position-relative">
        <div className="hero-section">
            <div className="hero-1" data-aos="fade-right">
                <h1 className="heading-text">Toolsy - Rent tools and <br /> equipmrnt in your community </h1>

                <p className="sub-heading-text">Toolsy is a peer-to-peer tools and equipmrnt marketplace where you can rent any equipmrnt you need wherever you want it</p>
                <a className="btn btn-google" href="#" title="Google Play">Google Play</a>
                <a className="btn btn-google btn-apple" href="#"  title="Google Play">App Store</a>
            </div>
            <div className="hero-2" data-aos="fade-left">
                <img className="img-fluid" src={Group77} alt=""/>
            </div>
        </div>
    </section>
    );
};

export default HeaderMain;