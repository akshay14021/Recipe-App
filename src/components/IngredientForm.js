import React, { Component } from 'react';

class IngredientForm extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Ingredient Name" />
                <button>Add Ingredient</button>
            </form>
        );
    }
}

export default IngredientForm;