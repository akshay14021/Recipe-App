import React from 'react';
import { connect } from 'react-redux';
import { startRemoveIngredient } from '../actions/recipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const IngredientsList = (props) => {
    return (
        <div className="ingredients-list">
            <h3 className="ingredients-list__title">{props.name}</h3>
            <button className="button button--removeingredient" onClick={(e) => {
                props.dispatch(startRemoveIngredient(props.recipeId, props.id))
            }}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default connect()(IngredientsList);