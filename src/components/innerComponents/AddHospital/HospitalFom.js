import React from 'react';
import { useForm } from '../../useForm';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './HospitalFomStyle/HospitalFomStyle.css';

function HospitalFom(state) {
    const [value, handleChange, resetForm] = useForm({
        hospitalName: '',
        hospitalAddress: '',
        hospitalLandmark: '',
        contact: ''
    });
    const onSavingForm = (event) => {
        event.preventDefault();
        state.addHospital({
            name: value.hospitalName,
            address: value.hospitalAddress,
            landmark: value.hospitalLandmark,
            contactNo: value.contact
        });
        console.log(value.hospitalName);
        console.log(value.hospitalAddress);
        console.log(value.hospitalLandmark);
        console.log(value.contact);

        // resetForm();
        alert('Saved SuccessFully...');
        console.log(state);
        state.props.history.push('/main/hospital/view');
    };
    return (
        <div className="add-hospital-form">
            <form>
                <div className="hospital-name">
                    <p> Name</p>
                    <input
                        type="text"
                        name="hospitalName"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="hospital-address">
                    <p>Address</p>
                    <textarea
                        name="hospitalAddress"
                        cols="30"
                        rows="8"
                        required
                        placeholder="Address Here..."
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="hospital-landmark">
                    <p>Landmark</p>
                    <input
                        type="text"
                        name="hospitalLandmark"
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

export default connect(null, actions)(HospitalFom);
