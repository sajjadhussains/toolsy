import React from 'react';
import './ContactInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faEnvelope,faClock, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

const ContactInfo = () => {
    return (
        <section className="contact-info-section">
            <div className="contact-info-container">
                <div className="phone-message phone-message-1">
                    <div className="fontAwesome-icon">
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                    </div>
                    <div className="fontAwesome-text">
                    <span>+8801670308632</span>
                    </div>
                </div>
                <div className="phone-message phone-message-2">
                        <div className="fontAwesome-icon">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                        <div className="fontAwesome-text">
                        <span>hello@toolsy.com</span>
                        </div>
                </div>
                <div className="phone-message phone-message-3">
                        <div className="fontAwesome-icon">
                                <FontAwesomeIcon icon={faClock}/>
                        </div>
                        <div className="fontAwesome-text">
                        <span>Wednesday - Sunday</span>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;