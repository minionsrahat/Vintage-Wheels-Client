import React from 'react';
import './Spinner.css'
const Spinner = () => {
    return (
        <>
            <div className="preloader">
                <div className="meter">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="subline"></div>
                    <div className="subline"></div>
                    <div className="subline"></div>
                    <div className="subline"></div>
                    <div className="subline"></div>
                    <div className="loader-circle-1">
                        <div className="loader-circle-2"></div>
                    </div>
                    <span className="loadtext">Loading</span>
                </div>
            </div>
        </>

    );
};

export default Spinner;