import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => {
    return (
        <div className="login-layout">
            <div className="login-layout__content">
                <h1 className="login-layout__title">Recipe Maker</h1>
                <p className="login-layout__subtitle">Write your recipe and never forget</p>
                <button className="button" onClick={props.dispatch(startLogin)} >Google Login</button>
            </div>
        </div>
    );
};

export default connect()(LoginPage);