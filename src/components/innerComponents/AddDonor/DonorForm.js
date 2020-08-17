import React from 'react';

import './DonorFormStyle/DonorFormStyle.css';
import { useForm } from '../../useForm';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

function DonorForm(props) {
    const [value, handleChange, resetForm] = useForm({
        donorName: '',
        donorDepartment: '',
        bloodGroup: '',
        yearOfAdmin: '',
        height: '',
        weight: '',
        contact: ''
    });

    const onSavingForm = (event) => {
        event.preventDefault();

        props.addDonor({
            name: value.donorName,
            yearOfAdmission: value.yearOfAdmin,
            department: value.donorDepartment,
            contactNo: value.contact,
            bloodGroup: value.bloodGroup,
            height: value.height,
            weight: value.weight,
            lastDonation: null
        });

        resetForm();
        alert('Saved SuccessFully...');
        props.props.history.push('/main/donors/view/edit');
    };

    return (
        <div className="add-donor-form">
            <form>
                <div className="donor-name">
                    <p> Name</p>
                    <input
                        type="text"
                        name="donorName"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="donor-department">
                    <p>Department</p>
                    <input
                        type="text"
                        name="donorDepartment"
                        onChange={handleChange}
                    />
                </div>

                <div className="blood-group">
                    <p>Blood Group</p>
                    <select name="bloodGroup" required onChange={handleChange}>
                        <option defaultValue>Select Group</option>
                        <option value="A+ve">A+ve</option>
                        <option value="A-ve">A-ve</option>
                        <option value="B+ve">B+ve</option>
                        <option value="B-ve">B-ve</option>
                        <option value="AB+ve">AB+ve</option>
                        <option value="AB-ve">AB-ve</option>
                        <option value="O+ve">O+ve</option>
                        <option value="O-ve">O-ve</option>
                    </select>
                </div>
                <div className="year-of-admin">
                    <p>Year Of Admission</p>
                    <input
                        type="number"
                        name="yearOfAdmin"
                        min="2005"
                        defaultValue="2012"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="height">
                    <p>Height (cm)</p>
                    <input
                        type="number"
                        name="height"
                        min="100"
                        defaultValue="100"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="weight">
                    <p>Weight (Kg)</p>
                    <input
                        type="number"
                        name="weight"
                        min="40"
                        defaultValue="40"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="contact">
                    <p>Contact</p>
                    <input
                        type="text"
                        name="contact"
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
export default connect(null, actions)(DonorForm);
