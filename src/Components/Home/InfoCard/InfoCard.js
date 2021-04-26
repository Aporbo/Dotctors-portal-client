import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({ info }) => {

    console.log(info.title)

    return (
        <div className="col-md-4 text-white" >

            <div className={`d-flex justify-content-center info-container info-${info.background} `} >
                <div className="icon-space" >

                    <FontAwesomeIcon className="font-icon" icon={info.icon} ></FontAwesomeIcon>

                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;