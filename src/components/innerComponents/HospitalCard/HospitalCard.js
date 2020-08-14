import React from 'react';
import { phone } from '../../../Assets/img';

import './HospitalCardStyle/HospitalCardStyle.css';

export default function HospitalCard({ details }) {
    return (
        <div className="hospital-card-component">
            <div className="hospital-name">
                <p>Name</p>
                <div>{details.name}</div>
            </div>
            <div className="address">
                <p>Address</p>
                <div>{details.address}</div>
            </div>
            <div className="landmark">
                <p>Landmark</p>
                <div>{details.landmark}</div>
            </div>

            <div className="contact">
                <img src={phone} alt="" />
                <div>{details.contact}</div>
            </div>
        </div>
    );
}
