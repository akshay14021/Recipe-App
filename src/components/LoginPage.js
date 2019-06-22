import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => {
    return (
        <div>
            <h1>Recipe Maker</h1>
            <p>Write your recipe and never forget</p>
            <button onClick={props.dispatch(startLogin)} >Login</button>
        </div>
    );
};

export default connect()(LoginPage);