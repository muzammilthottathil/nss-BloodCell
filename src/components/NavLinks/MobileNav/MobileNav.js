import React from 'react';
import { hamburgerCross, logout, addIcon } from '../../../Assets/img';
import { Link } from 'react-router-dom';

import './MobileNavStyle/MobileNavStyle.css';

export default function MobileNav({ changeHamburgerStatus, onLogout }) {
    return (
        <div className="navLink-component-mobile">
            <img src={hamburgerCross} onClick={changeHamburgerStatus} alt="" />

            <ul>
                <li>
                    <Link
                        to="/main/requirements/active"
                        onClick={changeHamburgerStatus}
                    >
                        Active Requirements
                    </Link>
                </li>

                <li>
                    <Link
                        to="/main/requirements/closed"
                        onClick={changeHamburgerStatus}
                    >
                        Closed Requirements
                    </Link>
                </li>

                <li>
                    <Link
                        to="/main/donors/view"
                        onClick={changeHamburgerStatus}
                    >
                        Available Donors
                    </Link>
                </li>

                <li>
                    <Link
                        to="/main/hospital/view"
                        onClick={changeHamburgerStatus}
                    >
                        Available Hospitals
                    </Link>
                </li>

                <li>
                    <Link
                        to="/main/requirements/add"
                        onClick={changeHamburgerStatus}
                    >
                        <img src={addIcon} alt="" />
                        Add Requirement
                    </Link>
                </li>

                <li>
                    <Link
                        to="/main/hospital/add"
                        onClick={changeHamburgerStatus}
                    >
                        <img src={addIcon} alt="" />
                        Add Hospital
                    </Link>
                </li>

                <li>
                    <Link to="/main/donors/add" onClick={changeHamburgerStatus}>
                        <img src={addIcon} alt="" />
                        Add Donor
                    </Link>
                </li>

                <li onClick={() => onLogout()} className="logout-link-mobile">
                    <img src={logout} alt="" />
                    Logout
                </li>
            </ul>
        </div>
    );
}
