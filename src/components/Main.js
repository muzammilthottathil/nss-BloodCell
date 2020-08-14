import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AddRequirement from './innerComponents/AddRequirement/AddRequirement';
import ActiveRequirement from './innerComponents/ActiveRequirement';
import ClosedRequirement from './innerComponents/ClosedRequirement';
import HospitalList from './innerComponents/HospitalList';
import AddHospital from './innerComponents/AddHospital/AddHospital';
import DonorsList from './innerComponents/DonorsList/DonorsList';
import AddDonor from './innerComponents/AddDonor/AddDonor';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Main(props) {
    return (
        <Router>
            <Header props={props} />
            <Route
                path="/main/requirements/add"
                exact
                component={AddRequirement}
            />
            <Route
                path="/main/requirements/active"
                exact
                component={ActiveRequirement}
            />
            <Route
                path="/main/requirements/closed"
                exact
                component={ClosedRequirement}
            />
            <Route path="/main/hospital/view" exact component={HospitalList} />
            <Route path="/main/hospital/add" exact component={AddHospital} />
            <Route
                path="/main/donors/view/:type"
                exact
                component={DonorsList}
            />
            <Route path="/main/donors/add" exact component={AddDonor} />
            <Footer />
        </Router>
    );
}
