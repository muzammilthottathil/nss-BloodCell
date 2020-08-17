import React, { useState, useEffect } from 'react';
import HeadingInside from '../HeadingInside/HeadingInside';
import DonorCard from './DonorCard/DonorCard';
import { useSelector, connect } from 'react-redux';
import * as actions from '../../../actions';

function DonorsList(props) {
    const [typeOfView, setTypeOfView] = useState(true);

    const donorsDataSet = useSelector((state) => state.donors);

    const style = {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    };
    const style1 = {
        minHeight: '75vh'
    };

    const findTypeOfView = () => {
        if (props.match.params.type === 'assign') {
            setTypeOfView(false);
        } else if (props.match.params.type === 'edit') {
            setTypeOfView(true);
        }
    };

    const getDonorList = () => {
        if (!donorsDataSet) {
            console.log('Async call for fetching donors initiated');
            props.fetchDonors();
        }
    };

    useEffect(() => {
        findTypeOfView();
        getDonorList();
    });

    const createAssignAPI = (donorID) => {
        props.assignDonor(donorID, props.location.details._id);
        alert('Assigned Successfully...');
        props.history.push('/main/requirements/active');
    };

    const renderHelper = () => {
        if (donorsDataSet) {
            return (
                <div style={style1}>
                    <div style={style}>
                        {donorsDataSet.map((data, key) => (
                            <DonorCard
                                key={key}
                                details={data}
                                defaultValue={typeOfView}
                                createAssignAPI={createAssignAPI}
                            />
                        ))}
                    </div>
                </div>
            );
        } else {
            return <div>Waiting</div>;
        }
    };

    return (
        <div>
            <HeadingInside headingContentInside="Available Donors" />
            {renderHelper()}
        </div>
    );
}

export default connect(null, actions)(DonorsList);
