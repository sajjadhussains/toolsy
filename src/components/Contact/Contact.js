import React, { useEffect } from 'react';
import './Contact.scss'
import capture from '../../images/Capture.png';
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <section className="contact-section">
            <div className="contact-header">
                <h1>Contact</h1>
            </div>
            <div className="row contact-form">
                <div className="col-md-5 " data-aos="fade-right">
                    <form action="/">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" name="name" placeholder="Enter Your name" /><br />
                        <label htmlFor="name">Email</label><br />
                        <input type="text" id="email" name="email" placeholder="Enter Your Emai" /><br />
                        <label htmlFor="message">Message</label><br />
                        <textarea name="message" id="message" placeholder="Enter Your message" style={{ height: '110px' }}></textarea>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <div className="col-md-7" data-aos="fade-left">
                    <div class="google-map">
                        {/* <div class="d-flex justify-content-end">
                        <div class="google-map-bg">

                        </div>
                    </div>  */}
                        <div className="google-map-image-section">
                            <p className="pt-2">Find Us on Québec, Canada</p>
                            <div className="map-image">
                                <img className="img-fluid" src={capture} alt="" />
                            </div>
                            <p className="">**Coming soon: ontario - alberta - colombie britanique</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;