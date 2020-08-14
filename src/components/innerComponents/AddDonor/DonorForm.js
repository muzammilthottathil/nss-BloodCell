import React from 'react';

import './DonorFormStyle/DonorFormStyle.css';
import { useForm } from '../../useForm';

export default function DonorForm({ props }) {
    const [value, handleChange] = useForm({
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
        console.log(value.donorName);
        console.log(value.donorDepartment);
        console.log(value.bloodGroup);
        console.log(value.yearOfAdmin);
        console.log(value.height);
        console.log(value.weight);
        console.log(value.contact);

        setTimeout(() => {
            props.history.push('/main/donors/view/edit');
        }, 2000);
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
