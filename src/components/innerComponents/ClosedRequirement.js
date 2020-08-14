import React from 'react';
import HeadingInside from './HeadingInside/HeadingInside';
import ActiveClosedCard from './ActiveClosedCard/ActiveClosedCard';

export default function ClosedRequirement() {
    const closedDataSet = [
        {
            p_id: 'patient_1',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 1,
            donorsAssigned: 1,
            date: '16-April-2018'
        },
        {
            p_id: 'patient_2',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 2,
            donorsAssigned: 2,
            date: '16-April-2018'
        },
        {
            p_id: 'patient_3',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 3,
            donorsAssigned: 3,
            date: '16-April-2018'
        },
        {
            p_id: 'patient_4',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 4,
            donorsAssigned: 4,
            date: '16-April-2018'
        },
        {
            p_id: 'patient_5',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 5,
            donorsAssigned: 5,
            date: '16-April-2018'
        },
        {
            p_id: 'patient_6',
            patient: 'Prabhas as Amerendra Bahubali',
            byStander: 'Prabhas as Amerendra Bahubali',
            bloodGroup: 'B+ve',
            numberOfUnits: 6,
            donorsAssigned: 6,
            date: '16-April-2018'
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
                    <ActiveClosedCard
                        key={data.p_id}
                        details={data}
                        type={'closed'}
                    />
                ))}
            </div>
        </div>
    );
}
