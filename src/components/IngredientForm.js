import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class IngredientForm extends Component {

    state = {
        name: '',
        error: ''
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        if (this.state.name) {
            this.props.onSubmit(this.state.name)
            this.setState({ error: '' })
            this.setState({ name: '' })
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
            <form class="form--ingredient" onSubmit={this.onSubmitHandler}>
                {this.state.error && <p className="form__error" >{this.state.error}</p>}
                <div className="ingredient-form__content">
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Ingredient Name"
                        onChange={this.onNameChange}
                        value={this.state.name}
                    />
                    <button className="button button--addingredient"><FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </form>
        );
    }
}

export default IngredientForm;