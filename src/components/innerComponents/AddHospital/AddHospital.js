import React from 'react';
import HeadingInside from '../HeadingInside/HeadingInside';
import FormImages from '../FormImages/FormImages';
import HospitalFom from './HospitalFom';

export default function AddHospital(props) {
    return (
        <div>
            <HeadingInside headingContentInside="Add Hospital" />

            <FormImages
                typeOfForm={{
                    requirement: false,
                    hospital: true,
                    donor: false
                }}
            />

            <HospitalFom props={props} />
        </div>
    );
}
