import React from 'react';
import './LoginBoxStyle/LoginBoxStyle.css';
import { useForm } from '../useForm';
import auth from '../auth';
import { connect } from 'react-redux';
import * as actions from '../../actions';

function LoginBox(props) {
    const [value, handleChange] = useForm({
        username: '',
        password: ''
    });

    const onLoginSubmit = (event) => {
        event.preventDefault();
        props.loginUser({ email: value.username, password: value.password });
        // auth.login(
        //     () => {
        //         props.history.push('/main/requirements/active');
        //     },
        //     value.username,
        //     value.password
        // );
    };

    return (
        <div className="login-box">
            <h2>User Login</h2>
            <form action="#">
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>

                <button onClick={onLoginSubmit}>Login</button>
            </form>
        </div>
    );
};

export default connect(null, actions)(LoginBox)
