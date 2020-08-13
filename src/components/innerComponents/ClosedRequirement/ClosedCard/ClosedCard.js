import React from 'react';
import { showDetailIcon } from '../../../../Assets/img';
import './ClosedCardStyle/ClosedCardStyle.css';

export default function ClosedCard({ info }) {
    return (
        <div className="closed-card-component">
            <div className="patient-name-closed">
                <p> Patient Name</p>
                <div>{info.patient}</div>
            </div>

            <div className="bystander-name-closed">
                <p>Bystander</p>
                <div>{info.byStander}</div>
            </div>

            <div className="blood-group-closed">
                <p>Blood Group</p>
                <div>{info.bloodGroup}</div>
            </div>

            <div className="no-units-closed">
                <p>No. of Units</p>
                <div>{info.numberOfUnits}</div>
            </div>

            <div className="donors-assigned-closed">
                <p>Donors Assigned</p>
                <div>{info.donorsAssigned}</div>
            </div>

            <div className="info-icon-part">
                <img src={showDetailIcon} alt="" />
            </div>
        </div>
    );
}
