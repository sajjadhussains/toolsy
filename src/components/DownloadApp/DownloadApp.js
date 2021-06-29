import React from 'react';
import './DownloadApp.scss';
import group70 from '../../images/group70.png';

const DownloadApp = () => {
    return (
        <section className="download-app-section">
            <div className="download-app-container">
                    <div className="download-app-text">
                        <h1 className="mb-5">Download Our App <br></br>from App Stores</h1>
                        <a className="btn btn-google" href="#" title="Google Play">Google Play</a>
                <a className="btn btn-google btn-apple" href="#"  title="Google Play">App Store</a>
                    </div>
            </div>
            <div className="download-app-image">
                <img src={group70} alt="" />
            </div>
        </section>
    );
};

export default DownloadApp;