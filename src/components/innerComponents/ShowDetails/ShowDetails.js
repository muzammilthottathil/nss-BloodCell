import React, { useState } from 'react';
import HeadingInside from '../HeadingInside/HeadingInside';
import { Link } from 'react-router-dom';
import { closeIcon, phone, deleteIcon } from '../../../Assets/img';
import './ShowDetailsStyle/ShowDetailsStyle.css';

export default function ShowDetails(props) {
    const [closeReqStatus, setCloseReqStatus] = useState(false);

    const type = props.location.data.typeOfCard;
    const details = props.location.data.details;

    console.log(details);
    console.log(closeReqStatus);
    return (
        <div className="show-detail-complete-window">
            <HeadingInside headingContentInside="Patient Details" />
            <div className="show-details-section">
                {type && (
                    <div className="close-req-button">
                        <Link
                            to="#"
                            // onClick={() => {
                            //     setCloseReqStatus(!closeReqStatus);
                            // }}
                        >
                            <img src={closeIcon} alt="" />
                            Close Requirement
                        </Link>
                    </div>
                )}

                <div className="date">
                    <p>Date</p>
                    <p>:</p>
                    <p>{details.date}</p>
                </div>

                <div className="patient-name">
                    <p> Patient Name</p>
                    <div>{details.patient}</div>
                </div>

                <div className="bystander-name">
                    <p>Bystander</p>
                    <div>{details.bystander}</div>
                </div>

                <div className="hospital-name">
                    <p>Hospital</p>
                    <div>{details.hospital}</div>
                </div>

                <div className="blood-group">
                    <p>Blood Group</p>
                    <div>{details.bloodGroup}</div>
                </div>

                <div className="type-of-donation">
                    <p>Type Of Donation</p>
                    <div>{details.typeOfDonation}</div>
                </div>

                <div className="contact">
                    <img src={phone} alt="" />
                    <div>{details.contactNo}</div>
                </div>

                <div className="unit-assigned-details">
                    <div className="no-units">
                        <p>No. of Units</p>
                        <div>{details.noOfUnits}</div>
                    </div>

                    <div className="donors-assigned">
                        <p>Donors Assigned</p>
                        <div>{details.donors.length}</div>
                    </div>
                </div>

                {details.donors.length !== 0 && (
                    <div className="assigned-donors-name">
                        <p>Donors</p>
                        <div className="assigned-donors-name-list">
                            {details.donors.map((donor, key) => (
                                <div className="name-and-delete-icon" key={key}>
                                    <p>{donor.donorName}</p>
                                    <img src={deleteIcon} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
