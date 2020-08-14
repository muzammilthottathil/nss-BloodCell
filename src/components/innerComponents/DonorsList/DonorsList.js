import React, { useState, useEffect } from 'react';
import HeadingInside from '../HeadingInside/HeadingInside';
import DonorCard from './DonorCard/DonorCard';
import { useSelector, connect } from 'react-redux';
import * as actions from '../../../actions';



function DonorsList(props) {
    const [typeOfView, setTypeOfView] = useState(true);

    const donorsDataSet = useSelector(state => state.donors);

    const style = {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    };

    const findTypeOfView = () => {
        if (props.match.params.type === 'assign') {
            setTypeOfView(false);
        } else if (props.match.params.type === 'edit') {
            setTypeOfView(true);
        }
    };

    const getDonorList = () => {
        if(!donorsDataSet) {
            console.log('Async call for fetching donors initiated')
            props.fetchDonors();
        };
    }

    useEffect(() => {
        findTypeOfView();
        getDonorList();
    });

    const renderHelper = () => {
        if(donorsDataSet) {
            return(
                <div style={style}>
                    {donorsDataSet.map((data, key) => (
                        <DonorCard
                            key={key}
                            details={data}
                            defaultValue={typeOfView}
                        />
                    ))}
                </div>
            )    
        } else {
            return <div>Waiting</div>
        }
    }

    return (
        <div>
            <HeadingInside headingContentInside="Available Donors" />
            {renderHelper()}
            
        </div>
    );
}

export default connect(null, actions)(DonorsList);


// export default function DonorsList(props) {
//     const [typeOfView, setTypeOfView] = useState(true);

//     const donorsDataSet = [
//         {
//             d_id: 'donor_1',
//             name: 'Prabhas as Amerendra Bahubali',
//             dept: 'Electrical and Electronics Engineering',
//             bloodGroup: 'B+ve',
//             height: '175cm',
//             weight: '200kg',
//             yearOfAdmin: 2018,
//             contact: '+919798959694',
//             lastDonation: '16-April-2018'
//         },
//         {
//             d_id: 'donor_2',
//             name: 'Prabhas as Amerendra Bahubali',
//             dept: 'Electrical and Electronics Engineering',
//             bloodGroup: 'B+ve',
//             height: '175cm',
//             weight: '200kg',
//             yearOfAdmin: 2018,
//             contact: '+919798959694',
//             lastDonation: '16-April-2018'
//         },
//         {
//             d_id: 'donor_3',
//             name: 'Prabhas as Amerendra Bahubali',
//             dept: 'Electrical and Electronics Engineering',
//             bloodGroup: 'B+ve',
//             height: '175cm',
//             weight: '200kg',
//             yearOfAdmin: 2018,
//             contact: '+919798959694',
//             lastDonation: '16-April-2018'
//         },
//         {
//             d_id: 'donor_4',
//             name: 'Prabhas as Amerendra Bahubali',
//             dept: 'Electrical and Electronics Engineering',
//             bloodGroup: 'B+ve',
//             height: '175cm',
//             weight: '200kg',
//             yearOfAdmin: 2018,
//             contact: '+919798959694',
//             lastDonation: '16-April-2018'
//         },
//         {
//             d_id: 'donor_5',
//             name: 'Prabhas as Amerendra Bahubali',
//             dept: 'Electrical and Electronics Engineering',
//             bloodGroup: 'B+ve',
//             height: '175cm',
//             weight: '200kg',
//             yearOfAdmin: 2018,
//             contact: '+919798959694',
//             lastDonation: '16-April-2018'
//         }
//     ];

//     const style = {
//         display: 'flex',
//         width: '100%',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around'
//     };

//     const findTypeOfView = () => {
//         if (props.match.params.type === 'assign') {
//             setTypeOfView(false);
//         } else if (props.match.params.type === 'edit') {
//             setTypeOfView(true);
//         }
//     };

//     useEffect(() => {
//         findTypeOfView();
//     });

//     return (
//         <div>
//             <HeadingInside headingContentInside="Available Donors" />
//             <div style={style}>
//                 {donorsDataSet.map((data, key) => (
//                     <DonorCard
//                         key={key}
//                         details={data}
//                         defaultValue={typeOfView}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }