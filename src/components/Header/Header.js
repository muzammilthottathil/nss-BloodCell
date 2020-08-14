import React, { useState } from 'react';
import LogoSection from '../LogoSection/LogoSection';
import './HeaderStyle/HeaderStyle.css';
import { hamburgerLines } from '../../Assets/img';
import NavLinks from '../NavLinks/NavLinks';
import auth from '../auth';
import { connect } from 'react-redux';
import * as actions from '../../actions';

function Header(props) {
    const [hamburgerStatus, setHamburgerStatus] = useState(false);

    const onLogout = () => {
        // console.log(auth.isAuthenticated());
        // auth.logout(() => {
        //     props.history.push('/');
        // });
        props.logoutUser();

    };

    // console.log(hamburgerStatus);

    return (
        <div className="header-component">
            <LogoSection />
            {!hamburgerStatus && (
                <img
                    className="hamburgerLines"
                    src={hamburgerLines}
                    alt=""
                    onClick={() => setHamburgerStatus(!hamburgerStatus)}
                />
            )}

            <NavLinks
                hamburgerStatus={hamburgerStatus}
                changeHamburgerStatus={() =>
                    setHamburgerStatus(!hamburgerStatus)
                }
                onLogout={onLogout}
            />
        </div>
    );
};

export default connect(null, actions)(Header); 

