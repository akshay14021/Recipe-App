import React from 'react';
import { connect } from 'react-redux';
import getVisibleRecipe from '../selectors/recipes';
import RecipeListItem from './RecipeListItem';


const RecipeList = (props) => {
    return (
        <div>
            {props.recipes.length === 0 ? <div>
                <span>No recipes found</span>
            </div> : 
            props.recipes.map((recipe) => {
                return <RecipeListItem 
                    key={recipe.id}
                    name={recipe.name}
                    createdAt={recipe.createdAt}
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