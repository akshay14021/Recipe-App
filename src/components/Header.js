import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faSearch, faHotdog } from '@fortawesome/free-solid-svg-icons'
import { startLogout } from '../actions/auth';
import { setTextFilter } from '../actions/filters';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__content">
                <FontAwesomeIcon className="header__icon--hotdog" icon={faHotdog} />
                <Link className="header__title" to='/dashboard' >
                    <h1>Recipe<span className="header__title--span">maker</span></h1>
                </Link>
                <FontAwesomeIcon className="header__icon" icon={faSearch} />
                <input
                    className="filter__input"
                    placeholder="Search Recipes"
                    onChange={(e) => {
                        const textValue = e.target.value
                        props.dispatch(setTextFilter(textValue))
                    }}
                />
                <button className="button button--logout" onClick={props.dispatch(startLogout)} >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
            </div>
        </header>
    );
};

export default connect()(Header);