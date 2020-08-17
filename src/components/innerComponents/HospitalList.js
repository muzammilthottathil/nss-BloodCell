import React, { useEffect } from 'react';
import HeadingInside from './HeadingInside/HeadingInside';
import HospitalCard from './HospitalCard/HospitalCard';
import { useSelector, connect } from 'react-redux';
import * as actions from '../../actions';

// export default function HospitalList() {
//     const hospitalDataSet = [
//         {
//             h_id: 'hospital_1',
//             name: 'Shivagamy ka priy puthr Amerander',
//             contact: '+919798959694',
//             address:
//                 'hello this is something bad about the world, that it is good.\
//                  Just joking typing to complete the address space.\
//                  hello this is something bad about the world, that it is good.\
//                  Just joking typing to complete the address space.',
//             landmark: 'No landmark is currently available'
//         },
//         {
//             h_id: 'hospital_2',
//             name: 'Shivagamy ka priy puthr Amerander',
//             contact: '+919798959694',
//             address:
//                 'hello this is something bad about the world, that it is good. Just joking typing to complete the address space.',
//             landmark: 'No landmark is currently available'
//         },
//         {
//             h_id: 'hospital_3',
//             name: 'Shivagamy ka priy puthr Amerander',
//             contact: '+919798959694',
//             address:
//                 'hello this is something bad about the world, that it is good. Just joking typing to complete the address space.',
//             landmark: 'No landmark is currently available'
//         }
//     ];

//     const style = {
//         display: 'flex',
//         width: '100%',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around'
//     };

//     return (
//         <div>
//             <HeadingInside headingContentInside="Available Hospitals" />
//             <div style={style}>
//                 {hospitalDataSet.map((data, key) => (
//                     <HospitalCard key={key} details={data} />
//                 ))}
//             </div>
//         </div>
//     );
// }

function HospitalList(props) {
    const style = {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    };
    const style1 = {
        minHeight: '75vh'
    };

    const hospitals = useSelector((state) => state.hospitals);

    const getHospitalList = () => {
        if (!hospitals) {
            console.log('Async call for fetching hospitals list intiated');
            props.fetchHospitals();
        }
    };

    useEffect(() => {
        getHospitalList();
    });

    const renderHelper = () => {
        console.log(hospitals);
        if (hospitals) {
            return (
                <div style={style1}>
                    <div style={style}>
                        {hospitals.map((data, key) => (
                            <HospitalCard key={key} details={data} />
                        ))}
                    </div>
                </div>
            );
        }
    };

    return (
        <div>
            <HeadingInside headingContentInside="Available Hospitals" />
            {renderHelper()}
        </div>
    );
}

export default connect(null, actions)(HospitalList);
