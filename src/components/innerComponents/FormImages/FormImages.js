import React from 'react';
import { addDonorImage, hospital, doctor } from '../../../Assets/img';
import './FormImagesStyle/FormImagesStyle.css';

export default function FormImages({ typeOfForm }) {
    return (
        <div className="form-images">
            {(typeOfForm.requirement && <img src={doctor} alt="" />) ||
                (typeOfForm.donor && <img src={addDonorImage} alt="" />) ||
                (typeOfForm.hospital && <img src={hospital} alt="" />)}
        </div>
    );
}
