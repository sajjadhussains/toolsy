import React, { useEffect } from 'react';
import construction from '../../images/construction.png';
import './Construction.scss';
import Aos from "aos";
import "aos/dist/aos.css";

const Construction = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div className="construction-section " data-aos="zoom-in">
            <div className="construction-inner-div  row">
                <div className="col-md-8">
                    <div className="construction-inner-image ms-md-5 mt-5 mb-md-3">
                        <img className="" src={construction} alt="" />
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
            <div className="construction-p-outer">
            <div className="construction-outer-div row">
                <div className="col-md-7">

                </div>
                <div className="col-md-5 construction-outer-text">
                    <div className="ms-5">
                        <h1 className="mt-md-3">Construction Equipement</h1>
                        <p>Toolsy give you the biggest inventory and price range from any particular and shop around you.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Construction;