import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IngredientForm from './IngredientForm';
import IngredientsList from './IngredientsList';
import { startAddIngredient, startSetIngredients } from '../actions/recipes';

const RecipeItemDetail = (props) => {
    const link = `/edit/${props.recipe.id}`
    return (
        <div className="details">
            <div className="content-container">
                <p className="details__heading">Recipe Name</p>
                <h1 className="details__title">{props.recipe.name}</h1>
                <p className="details__heading">Preperation Instructions</p>
                <div className="details__instructions">
                    {props.recipe.instructions}
                </div>
                <Link to={link}><button className="button button--edit" >Edit Recipe</button></Link>
            </div>
            <div className="ingredients">
                <div className="content-container">
                    <h1 className="ingredients__title">Ingredients</h1>
                    {Array.isArray(props.recipe.ingredients) ? props.recipe.ingredients.map((ig) => {
                        return <IngredientsList
                            recipeId={props.recipe.id}
                            key={ig.id}
                            name={ig.name}
                            id={ig.id}
                        />
                    }) : <p>No Ingredients Added</p>}
                    <IngredientForm
                        onSubmit={(name) => {
                            props.dispatch(startAddIngredient(props.recipe.id, name))
                            props.dispatch(startSetIngredients(props.recipe.id))
                            props.history.push(`/read/${props.recipe.id}`)
                        }}
                    />
                </div>
            </div>
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