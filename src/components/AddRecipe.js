import React from 'react';
import RecipeForm from './RecipeForm';
import { connect } from 'react-redux';
import { startAddRecipe } from '../actions/recipes';

const AddRecipe = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Recipe</h1>
                </div>
            </div>
            <div className="content-container">
                <RecipeForm
                    onSubmit={(name, instruction, createdAt) => {
                        props.dispatch(startAddRecipe(name, instruction, createdAt))
                        props.history.push('/dashboard')
                    }}
                />
            </div>
        </div>
    );
};

export default connect()(AddRecipe);