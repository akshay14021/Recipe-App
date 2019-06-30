const defaultRecipeReducerState = []
const ingredients = []

const recipesReducer  = (state = defaultRecipeReducerState, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return [ ...state, action.recipe] 
            
        case 'REMOVE_RECIPE':
            return state.filter((recipe) => {
                return recipe.id !== action.id
            })

        case 'EDIT_RECIPE':
            return state.map((recipe) => {
                if (recipe.id === action.id) {
                    return { ...recipe, ...action.updates }
                } else {
                    return recipe
                }
            })

        case 'ADD_INGREDIENTS': 
            return state.map((recipe) => {
                if (recipe.id === action.recipeId) {
                    return { ...recipe, ingredients: [...ingredients, action.ingredient] }
                } else {
                    return recipe
                }
            })

        case 'REMOVE_INGREDIENT':
            return state.map((recipe) => {
                if (recipe.id === action.recipeId) {
                    const igArray = recipe.ingredients.filter((ig) => {
                        return ig.id !== action.ingredientId
                    })
                    return { ...recipe, ingredients: igArray }
                } else {
                    return recipe
                }
            })

        case 'SET_RECIPES':
            return action.recipes

        case 'SET_INGREDIENTS':
            return state.map((recipe) => {
                if (recipe.id === action.recipeId) {
                    return { ...recipe, ingredients: action.ingredients }
                } else {
                    return recipe
                }
            })

        default:
            return state
    }
}

export default recipesReducer