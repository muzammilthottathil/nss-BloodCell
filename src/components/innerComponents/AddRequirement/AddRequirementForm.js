import React, { useEffect } from 'react';
import './AddRequirementFormStyle/AddRequirementFormStyle.css';
import { useForm } from '../../useForm';
import { createDateFormat } from '../../../Utils';
import { useSelector, connect } from 'react-redux';
import * as actions from '../../../actions';

function AddRequirementForm(props) {
    const hospitals = useSelector((state) => state.hospitals);

    const getHospitalList = () => {
        if (!hospitals) {
            console.log('Async call for fetching hospitals list intiated');
            props.fetchHospitals();
        }
    };

    const [value, handleChange, resetForm] = useForm({
        patient: '',
        bystander: '',
        bloodGroup: '',
        noOfUnits: '',
        typeOfDonation: '',
        hospital: '',
        contactNo: '',
        date: ''
    });

    const bloodGroups = [
        'Any',
        'A+ve',
        'A-ve',
        'B+ve',
        'B-ve',
        'AB+ve',
        'AB-ve',
        'O+ve',
        'O-ve'
    ];

    const donationType = [
        'Whole Blood Donation',
        'Power Red Donation',
        'Platelet Doantion',
        'Plasma Donation'
    ];
    console.log(props);

    const onSavingForm = (event) => {
        event.preventDefault();
        props.addRequirement({
            patient: value.patient,
            bystander: value.bystander,
            bloodGroup: value.bloodGroup,
            noOfUnits: value.noOfUnits,
            typeOfDonation: value.typeOfDonation,
            hospital: value.hospital,
            contactNo: value.contactNo,
            date: createDateFormat(value.date)
        });

        resetForm();
        alert('Submitted SuccessFully...');
        props.props.history.push('/main/requirements/active');
    };

    const hospitalNameRenderHelper = () => {
        if (hospitals) {
            return (
                <>
                    {hospitals.map((data, key) => (
                        <option value={data.name} key={key}>
                            {data.name}
                        </option>
                    ))}
                </>
            );
        } else {
            return null;
        }
    };

    useEffect(() => {
        getHospitalList();
    });

    return (
        <div className="add-req-form">
            <form>
                <div className="patient-name">
                    <p> Patient Name</p>
                    <input
                        type="text"
                        name="patient"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="bystander-name">
                    <p>Name of Bystander</p>
                    <input
                        type="text"
                        name="bystander"
                        onChange={handleChange}
                    />
                </div>

                <div className="blood-group">
                    <p>Blood Group</p>
                    <select name="bloodGroup" required onChange={handleChange}>
                        <option defaultValue>Select Group</option>
                        {bloodGroups.map((group, index) => (
                            <option value={group} key={index}>
                                {group}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="no-units">
                    <p>No. of Units</p>
                    <input
                        type="number"
                        name="noOfUnits"
                        min="0"
                        defaultValue="0"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="type-of-donation">
                    <p>Type of Doantion</p>
                    <select
                        name="typeOfDonation"
                        required
                        onChange={handleChange}
                    >
                        <option defaultValue>Select type</option>

                        {donationType.map((types, key) => (
                            <option value={types} key={key}>
                                {types}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="hospital">
                    <p>Hospital</p>
                    <select name="hospital" required onChange={handleChange}>
                        <option defaultValue>Select Hospital</option>
                        {hospitalNameRenderHelper()}
                    </select>
                </div>
                <div className="contact">
                    <p>Contact</p>
                    <input
                        type="text"
                        name="contactNo"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="date">
                    <p>Date of Requirement</p>

                    <input
                        type="date"
                        name="date"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="button">
                    <button type="submit" onClick={onSavingForm}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default connect(null, actions)(AddRequirementForm);
