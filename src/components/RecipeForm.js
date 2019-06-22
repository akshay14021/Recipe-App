import React, { Component } from 'react';
import IngredientForm from './IngredientForm';

class RecipeForm extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Recipe Name" />
                <textarea placeholder="Instructions">

                </textarea>
                <button>Add Recipe</button>
            </form>
        );
    }
}

export default RecipeForm;