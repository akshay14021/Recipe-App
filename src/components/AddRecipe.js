import React from 'react';
import RecipeForm from './RecipeForm';
import { connect } from 'react-redux';
import { startAddRecipe } from '../actions/recipes';

const AddRecipe = (props) => {
    return (
        <div>
            <h1>Add Recipe</h1>
            <RecipeForm
                onSubmit={(name, instruction, createdAt) => {
                    props.dispatch(startAddRecipe(name, instruction, createdAt))
                    props.history.push('/dashboard')
                }}
            />
        </div>
    );
};

export default connect()(AddRecipe);