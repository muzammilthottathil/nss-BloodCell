import React from 'react';
import { phone, donorEditIcon, assignIcon } from '../../../../Assets/img';

import './DonorCardStyle/DonorCardStyle.css';
import { Link } from 'react-router-dom';

export default function DonorCard({ details, defaultValue = true }) {
    return (
        <div className="donor-card-component">
            <div className="last-donation">
                <p>Last Donated on : {details.lastDonation}</p>
            </div>
            <div className="name">
                <p>Name</p>
                <div className="name-of-donor">{details.name}</div>
            </div>
            <div className="department">
                <p>Department</p>
                <div className="dept-of-donor">{details.dept}</div>
            </div>
            {defaultValue && (
                <div className="body-features">
                    <div className="height">
                        <p>Height</p>
                        <div className="height-of-donor">{details.height}</div>
                    </div>
                    <div className="weight">
                        <p>Weight</p>
                        <div className="weight-of-donor">{details.weight}</div>
                    </div>
                </div>
            )}

            <div className="other-data">
                <div className="year-of-admin">
                    <p>Year of Admn</p>
                    <div className="year-of-donor">{details.yearOfAdmin}</div>
                </div>
                <div className="blood-group">
                    <p>Blood Group</p>
                    <div className="blood-of-donor">{details.bloodGroup}</div>
                </div>
            </div>
            <div className="contact">
                <img src={phone} alt="" />
                <div className="contact-of-donor">{details.contact}</div>
            </div>
            <div className="button">
                {(defaultValue && (
                    <Link>
                        <img src={donorEditIcon} alt="" />
                        Edit
                    </Link>
                )) || (
                    <Link>
                        <img src={assignIcon} alt="" />
                        Assign
                    </Link>
                )}
            </div>
        </div>
    );
}
