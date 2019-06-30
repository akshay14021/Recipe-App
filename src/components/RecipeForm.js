import React, { Component } from 'react';
import moment from 'moment';

class RecipeForm extends Component {

    state = {
        name: this.props.recipe ? this.props.recipe.name : '',
        instructions: this.props.recipe ? this.props.recipe.instructions : '',
        createdAt: this.props.recipe ? moment(this.props.recipe.createdAt) : moment(),
        error: ''
    }

    onNameChange = (e) => {
        const name = e.target.value
        this.setState({ name })
    }

    onInstructionChange = (e) => {
        const instructions = e.target.value
        this.setState({ instructions })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        if(this.state.name) {
            this.props.onSubmit(this.state.name, this.state.instructions, this.state.createdAt.valueOf())
            this.setState({ error: '' })
        } else {
            this.setState({ error: 'Please give a name and instructions for recipe' })
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                    type="text" 
                    placeholder="Recipe Name" 
                    autoFocus
                    value={this.state.name}
                    onChange={this.onNameChange}    
                />
                <textarea 
                    placeholder="Instructions"
                    value={this.state.instructions}
                    onChange={this.onInstructionChange}
                >

                </textarea>
                {this.props.recipe ? <button>Edit Recipe</button> : <button>Add Recipe</button>}
            </form>
        );
    }
}

export default RecipeForm;