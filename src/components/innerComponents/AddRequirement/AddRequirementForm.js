import React from 'react';
import './AddRequirementFormStyle/AddRequirementFormStyle.css';
import { useForm } from '../../useForm';
import { createDateFormat } from '../../../Utils';

export default function AddRequirementForm({ props }) {
    const [value, handleChange] = useForm({
        patientName: '',
        byStanderName: '',
        bloodGroup: '',
        noOfUnits: '',
        typeOfDonation: '',
        hospital: '',
        contact: '',
        dateOfRequirement: ''
    });

    const onSavingForm = (event) => {
        event.preventDefault();
        console.log(value.patientName);
        console.log(value.byStanderName);
        console.log(value.bloodGroup);
        console.log(value.noOfUnits);
        console.log(value.hospital);
        console.log(value.typeOfDonation);
        console.log(value.contact);
        let dateValue = createDateFormat(value.dateOfRequirement);
        console.log(dateValue);
        setTimeout(() => {
            props.history.push('/main/requirements/active');
        }, 2000);
    };

    const hospitalDataSet = [
        {
            h_id: 'hospital_1',
            name: 'Shivagamy ka priy puthr Amerander',
            contact: '+919798959694',
            address:
                'hello this is something bad about the world, that it is good.\
                 Just joking typing to complete the address space.\
                 hello this is something bad about the world, that it is good.\
                 Just joking typing to complete the address space.',
            landmark: 'No landmark is currently available'
        },
        {
            h_id: 'hospital_2',
            name: 'Shivagamy ka priy puthr Amerander',
            contact: '+919798959694',
            address:
                'hello this is something bad about the world, that it is good. Just joking typing to complete the address space.',
            landmark: 'No landmark is currently available'
        },
        {
            h_id: 'hospital_3',
            name: 'Shivagamy ka priy puthr Amerander',
            contact: '+919798959694',
            address:
                'hello this is something bad about the world, that it is good. Just joking typing to complete the address space.',
            landmark: 'No landmark is currently available'
        }
    ];

    return (
        <div className="add-req-form">
            <form>
                <div className="patient-name">
                    <p> Patient Name</p>
                    <input
                        type="text"
                        name="patientName"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="bystander-name">
                    <p>Name of Bystander</p>
                    <input
                        type="text"
                        name="byStanderName"
                        onChange={handleChange}
                    />
                </div>

                <div className="blood-group">
                    <p>Blood Group</p>
                    <select name="bloodGroup" required onChange={handleChange}>
                        <option defaultValue>Select Group</option>
                        <option value="Any">Any</option>
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
                        <option value="Whole Blood Donation">
                            Whole Blood Donation
                        </option>
                        <option value="Power Red Donation">
                            Power Red Donation
                        </option>
                        <option value="Platelet Doantion">
                            Platelet Doantion
                        </option>
                        <option value="Plasma Donation">Plasma Donation</option>
                    </select>
                </div>
                <div className="hospital">
                    <p>Hospital</p>
                    <select name="hospital" required onChange={handleChange}>
                        <option defaultValue>Select Hospital</option>
                        {hospitalDataSet.map((data, key) => (
                            <option value={data.name} key={key}>
                                {data.name}
                            </option>
                        ))}
                    </select>
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
                <div className="date">
                    <p>Date of Requirement</p>

                    <input
                        type="date"
                        name="dateOfRequirement"
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
