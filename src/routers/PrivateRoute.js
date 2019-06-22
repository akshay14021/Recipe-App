import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = (props) => {
    return (
        <div>
            {props.authId ? 
            <div>
                <Header/>
                {props.children}
            </div> : <Redirect to="/" />
        }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        authId: state.auth.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute);