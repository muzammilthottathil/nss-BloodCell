import React, { useEffect } from 'react';
import ActiveClosedCard from './ActiveClosedCard/ActiveClosedCard';
import HeadingInside from './HeadingInside/HeadingInside';
import { connect, useSelector } from 'react-redux';
import * as actions from '../../actions';

function ActiveRequirement(props) {
    const style = {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    };
    const style1 = {
        minHeight: '75vh'
    };

    const activeRequirements = useSelector((state) => state.activeRequirements);

    const getActiveRequirementList = () => {
        if (!activeRequirements) {
            console.log('Async call for fetching active requirements');
            props.fetchActiveRequirements();
        }
    };

    useEffect(() => {
        getActiveRequirementList();
    });

    const renderHelper = () => {
        // console.log(activeRequirements);
        if (activeRequirements) {
            return (
                <div style={style1}>
                    <div style={style}>
                        {activeRequirements.map((data) => (
                            <ActiveClosedCard
                                key={data._id}
                                details={data}
                                type={'active'}
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
        <div className="active-requirement-route">
            <HeadingInside headingContentInside="Active Requirements" />
            {renderHelper()}
        </div>
    );
}

export default connect(null, actions)(ActiveRequirement);
