import React from 'react';
import HeadingInside from './HeadingInside/HeadingInside';
import HospitalCard from './HospitalCard/HospitalCard';

export default function HospitalList() {
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

    const style = {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    };

    return (
        <div>
            <HeadingInside headingContentInside="Available Hospitals" />
            <div style={style}>
                {hospitalDataSet.map((data, key) => (
                    <HospitalCard key={key} details={data} />
                ))}
            </div>
        </div>
    );
}
