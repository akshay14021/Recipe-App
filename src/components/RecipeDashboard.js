import React from 'react';
import RecipeList from './RecipeList';
import RecipesFilter from './RecipesFilter';

const RecipeDashboard = (props) => {
    return (
        <div>
            <RecipesFilter />
            <RecipeList />
        </div>
    );
};

export default RecipeDashboard;