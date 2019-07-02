import React  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const RecipesFilter = (props) => {
    return (
        <div>
            <div className="content-container">
                <Link to="/add" >
                    <h1 className="button button--add">Add<span className="button__span--add">Recipe</span></h1>
                </Link>
            </div>
        </div>
    );
}

export default connect()(RecipesFilter);