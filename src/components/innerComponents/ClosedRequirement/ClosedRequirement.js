import React from 'react';
import HeadingInside from '../HeadingInside/HeadingInside';
import ClosedCard from './ClosedCard/ClosedCard';

export default function ClosedRequirement() {
    const closedDataSet = [
        {
            p_id: 'patient_1',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 1,
            donorsAssigned: 1
        },
        {
            p_id: 'patient_2',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 2,
            donorsAssigned: 2
        },
        {
            p_id: 'patient_3',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 3,
            donorsAssigned: 3
        },
        {
            p_id: 'patient_4',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 4,
            donorsAssigned: 4
        },
        {
            p_id: 'patient_5',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 5,
            donorsAssigned: 5
        },
        {
            p_id: 'patient_6',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 6,
            donorsAssigned: 6
        }
    ];

    const style = {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    };
    return (
        <div>
            <HeadingInside headingContentInside="Closed Requirements" />
            <div style={style}>
                {closedDataSet.map((data) => (
                    <ClosedCard key={data.p_id} info={data} />
                ))}
            </div>
        </div>
    );
}
