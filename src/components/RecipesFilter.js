import React  from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const RecipesFilter = (props) => {
    return (
        <div>
            <input
                placeholder="Filter Recipes"
                onChange={(e) => {
                    const textValue = e.target.value
                    props.dispatch(setTextFilter(textValue))
                }}
            />
        </div>
    );
}

export default connect()(RecipesFilter);