import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import LogoSection from '../LogoSection/LogoSection';
import { bloodHandPulse } from '../../Assets/img';
import './HomeStyle/HomeStyle.css';
import Footer from '../Footer/Footer';
import LoginBox from '../LoginBox/LoginBox';
import { connect } from 'react-redux'
import Main from '../Main';

class Home extends Component {

    renderHelper() {
        switch(this.props.auth) {
            case null:
                return 'We are not sure what to render'
            case false:
                return (
                    <div>
                        <LogoSection />
                        <div className="home-page-content">
                            <img src={bloodHandPulse} alt="" />
                            <h1>Blood Cell</h1>
                            <LoginBox props={this.props}/>
                        </div>
                        <Footer />
                    </div>
                );
            default:
                // return <div><Main /></div>
                return (
                    <div>
                        <Redirect
                            to={{
                                pathname: '/main/requirements/active',
                                state: {
                                    from: this.props.location
                                }
                            }}
                        />
                    </div>
                    
                )
        }       
    }

    render() {
        return (
            <div className="home-page">
                { this.renderHelper() }
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Home);
