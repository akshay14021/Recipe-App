import React, { Component } from 'react';

class IngredientForm extends Component {

    state = {
        name: '',
        error: ''
    }

    onSubmitHandler = (e) => {
        if (this.state.name) {
            this.props.onSubmit(this.state.name)
            this.setState({ error: '' })
        } else {
            this.setState({ error: 'Please enter ingredient name' })
        }
    }

    onNameChange = (e) => {
        const name = e.target.value
        this.setState({ name })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                    type="text" 
                    placeholder="Ingredient Name" 
                    autoFocus
                    onChange={this.onNameChange}
                    value={this.state.name}
                />
                <button>Add Ingredient</button>
            </form>
        );
    }
}

export default IngredientForm;