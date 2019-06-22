import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = (props) => {
    return (
        <div>
            <Link to='/dashboard' >
                <h1>Recipe Maker</h1>
            </Link>
            <button onClick={props.dispatch(startLogout)} >Logout</button>
        </div>
    );
};

export default connect()(Header);