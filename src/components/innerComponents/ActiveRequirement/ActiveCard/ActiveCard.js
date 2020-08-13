import React from 'react';
import { showDetailIcon, assignIcon, closeIcon } from '../../../../Assets/img';

import './ActiveCardStyle/ActiveCardStyle.css';

export default function ActiveCard({ info }) {
    return (
        <div className="active-card-component">
            <div className="patient-name-active">
                <p> Patient Name</p>
                <div>{info.patient}</div>
            </div>

            <div className="bystander-name-active">
                <p>Bystander</p>
                <div>{info.byStander}</div>
            </div>

            <div className="blood-group-active">
                <p>Blood Group</p>
                <div>{info.bloodGroup}</div>
            </div>

            <div className="no-units-active">
                <p>No. of Units</p>
                <div>{info.numberOfUnits}</div>
            </div>

            <div className="donors-assigned-active">
                <p>Donors Assigned</p>
                <div>{info.donorsAssigned}</div>
            </div>

            <div className="info-icon-part">
                <img src={showDetailIcon} alt="" />
            </div>

            <div className="close-icon-part">
                <span>
                    <img src={closeIcon} alt="" />
                    Close
                </span>
            </div>

            <div className="assign-icon-part">
                <span>
                    <img src={assignIcon} alt="" />
                    Assign
                </span>
            </div>
        </div>
    );
}
