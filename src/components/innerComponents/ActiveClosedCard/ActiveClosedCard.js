import React, { useState, useEffect } from 'react';
import { assignIcon, showDetailIcon } from '../../../Assets/img';
import { Link } from 'react-router-dom';

import './ActiveClosedCardStyle/ActiveClosedCardStyle.css';

export default function ActiveClosedCard({ details, type }) {
    const [typeOfCard, setTypeOfCard] = useState(true);

    const findTypeOfCard = () =>
        type === 'closed' ? setTypeOfCard(false) : setTypeOfCard(true);

    useEffect(() => {
        findTypeOfCard();
    });

    console.log('active closed card');

    return (
        <div className="active-closed-card">
            <div className="date">
                <p>{details.date}</p>
            </div>
            <div className="patient-name">
                <p> Patient Name</p>
                <div>{details.patient}</div>
            </div>

            <div className="bystander-name">
                <p>Bystander</p>
                <div>{details.byStander}</div>
            </div>

            <div className="blood-group">
                <p>Blood Group</p>
                <div>{details.bloodGroup}</div>
            </div>

            <div className="unit-assigned-details">
                <div className="no-units">
                    <p>No. of Units</p>
                    <div>{details.numberOfUnits}</div>
                </div>

                <div className="donors-assigned">
                    <p>Donors Assigned</p>
                    <div>{details.donorsAssigned}</div>
                </div>
            </div>

            <div className="button-section">
                <div className="show-details">
                    <Link>
                        <img src={showDetailIcon} alt="" />
                        Details
                    </Link>
                </div>

                {typeOfCard && (
                    <div className="assigning-donor">
                        <Link
                            to={{
                                pathname: '/main/donors/view/assign'
                            }}
                        >
                            <img src={assignIcon} alt="" />
                            Assign
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
