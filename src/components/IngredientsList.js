import React from 'react';
import { connect } from 'react-redux';
import { startRemoveIngredient } from '../actions/recipes';

const IngredientsList = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <button onClick={(e) => {
                props.dispatch(startRemoveIngredient(props.recipeId, props.id))
            }}>X</button>
        </div>
    );
};

export default connect()(IngredientsList);