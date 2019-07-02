import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import getVisibleRecipe from '../selectors/recipes';
import RecipeListItem from './RecipeListItem';


const RecipeList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="list-header__1">Recipes</div>
                <div className="list-header__2">Created On</div>
            </div>
            {props.recipes.length === 0 ? <div>
                <span className="list-item message--list" ><FontAwesomeIcon icon={faSadCry} />Sorry! We cannot find recipes</span>
            </div> : 
            props.recipes.map((recipe) => {
                return <RecipeListItem 
                    key={recipe.id}
                    name={recipe.name}
                    createdAt={recipe.createdAt}
                    id={recipe.id}
                />
            })
        }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        recipes: getVisibleRecipe(state.recipes, state.filters)
    }
}

export default connect(mapStateToProps)(RecipeList);