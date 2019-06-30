import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IngredientForm from './IngredientForm';
import IngredientsList from './IngredientsList';
import { startAddIngredient } from '../actions/recipes';

const RecipeItemDetail = (props) => {
    const link = `/edit/${props.recipe.id}`
    return (
        <div>
            <h1>{props.recipe.name}</h1>
            {props.recipe.instructions}
            {Array.isArray(props.recipe.ingredients) ? props.recipe.ingredients.map((ig) => {
                return <IngredientsList 
                    recipeId={props.recipe.id}
                    key={ig.id}
                    name={ig.name}
                    id={ig.id}
                />
            }): <p>No Ingredients Added</p>}

            <IngredientForm 
                onSubmit={(name) => {
                    props.dispatch(startAddIngredient(props.recipe.id, name))
                    props.history.push(`/read/${props.recipe.id}`)
                }}
            />
            <Link to={link}><button>Edit Recipe</button></Link>
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