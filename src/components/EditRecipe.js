import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import RecipeForm from './RecipeForm'
import { startEditRecipe, startRemoveRecipe } from '../actions/recipes';

const EditRecipe = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1>Edit Recipe</h1>
                </div>
            </div>
            <div className="content-container">
                <RecipeForm
                    recipe={props.recipe}
                    onSubmit={(name, instructions, createdAt) => {
                        props.dispatch(startEditRecipe(props.recipe.id, { name, instructions, createdAt }))
                        props.history.push(`/read/${props.recipe.id}`)
                    }}
                />
                <button className="button button--remove" onClick={(e) => {
                    props.dispatch(startRemoveRecipe(props.recipe.id))
                    props.history.push('/dashboard')
                }} ><FontAwesomeIcon icon={faTrashAlt} /></button>
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

export default connect(mapStateToProps)(EditRecipe);