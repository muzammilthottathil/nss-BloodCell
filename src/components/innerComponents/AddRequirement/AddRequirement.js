import React from 'react';
import HeadingInside from '../HeadingInside/HeadingInside';
import AddRequirementForm from './AddRequirementForm';
import FormImages from '../FormImages/FormImages';

export default function AddRequirement(props) {
    return (
        <div>
            <HeadingInside headingContentInside="Add Requirement" />
            <FormImages
                typeOfForm={{
                    requirement: true,
                    hospital: false,
                    donor: false
                }}
            />

            <AddRequirementForm props={props} />
        </div>
    );
}
