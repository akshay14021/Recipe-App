import React from 'react';
import { connect } from 'react-redux';
import IngredientForm from './IngredientForm';

const RecipeItemDetail = (props) => {
    return (
        <div>
            <h1>{props.recipe.name}</h1>
            {props.recipe.instructions}
            <IngredientForm 

            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        recipe: state.recipes.find((recipe) => {
            return recipe.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(RecipeItemDetail);