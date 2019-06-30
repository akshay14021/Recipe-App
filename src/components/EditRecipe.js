import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm'
import { startEditRecipe, startRemoveRecipe } from '../actions/recipes';

const EditRecipe = (props) => {
    return (
        <div>
            <RecipeForm
                recipe={props.recipe}
                onSubmit={(name, instructions, createdAt) => {
                    props.dispatch(startEditRecipe(props.recipe.id, { name, instructions, createdAt }))
                    props.history.push(`/read/${props.recipe.id}`)
                }}
            />
            <button onClick={(e) => {
                props.dispatch(startRemoveRecipe(props.recipe.id))
                props.history.push('/dashboard')
            }} >Remove Recipe</button>
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

export default connect(mapStateToProps)(EditRecipe);