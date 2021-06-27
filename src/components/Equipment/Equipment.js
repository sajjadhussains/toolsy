import React, { useEffect } from 'react';
import builder from '../../images/builder.png';
import './Equipment.scss';
import Aos from "aos";
import "aos/dist/aos.css";

const Equipment = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <section class="equipment-section">
        <div class="container">
            <div class="equipment-main">
                <div class="equipment-p-left">
                    <div class="equipment-left">

                    </div>

                    <div class="e-image-section" data-aos="fade-right">
                        <img class="img-fluid" src={builder} alt=""/>
                    </div>

                </div>
                <div class="equipment-p-right">
                    <div class="equipment-right pt-5 mt-5" data-aos="fade-left">

                        <h1 class="heading-text">A new way of Renting tools and equipment</h1>
                        <p>From a growing community of trusted hosts across the region of Montreal. Guests choose from a totally unique selection of nearby equipmrnt, while hosts earn extra money to offset the cost of their equipmrnt.</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Equipment;