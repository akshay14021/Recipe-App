import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Copyright = (props) => {
    return (
        <div className="copyright">
            <div className="content-container">
                <div className="copyright__content">
                    <h1 className="header__title">Recipe<span className="header__title--span">maker</span></h1><p className="copyright__para">Copyright <FontAwesomeIcon icon={faCopyright} /> 2019, Akshay Joshi</p>
                </div>
            </div>
        </div>
    );
};

export default Copyright;