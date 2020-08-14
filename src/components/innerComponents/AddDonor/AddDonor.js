import React from 'react';
import HeadingInside from '../HeadingInside/HeadingInside';
import FormImages from '../FormImages/FormImages';
import DonorForm from './DonorForm';

export default function AddDonor(props) {
    return (
        <div>
            <HeadingInside headingContentInside="Add Donor" />

            <FormImages
                typeOfForm={{
                    requirement: false,
                    hospital: false,
                    donor: true
                }}
            />
            <DonorForm props={props} />
        </div>
    );
}
