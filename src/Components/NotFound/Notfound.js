import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Notfound.css'

const Notfound = () => {
    const navigate=useNavigate();
    const goHomepage=()=>{
        navigate('/');
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <img src="https://media0.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif?cid=ecf05e47p041qy8rl3jpr0ll1kmtoyxmwa95w5x151ox5ckm&rid=giphy.gif&ct=g" alt="" />
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                            <button onClick={goHomepage} className='feature-btn'>Take Me Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Notfound;