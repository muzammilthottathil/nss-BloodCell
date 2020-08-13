import React, { useState } from 'react';
import LogoSection from '../LogoSection/LogoSection';
import './HeaderStyle/HeaderStyle.css';
import { hamburgerLines } from '../../Assets/img';
import NavLinks from '../NavLinks/NavLinks';
import auth from '../auth';

export default function Header({ props }) {
    const [hamburgerStatus, setHamburgerStatus] = useState(false);

    const onLogout = () => {
        // console.log(auth.isAuthenticated());
        auth.logout(() => {
            props.history.push('/');
        });
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
}
