import firebase from '../firebase/firebase';

export const addRecipe = (recipe) => {
    return {
        type: 'ADD_RECIPE',
        recipe
    }
}

export const startAddRecipe = (name = '', instructions = '', createdAt) => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/recipes`).push({ name, instructions, createdAt}).then((ref) => {
            dispatch(addRecipe({ id: ref.key, name, instructions, createdAt }))
        })
    }
}

export const removeRecipe = (id) => {
    return {
        type: 'REMOVE_RECIPE',
        id
    }
}

export const startRemoveRecipe = (id) => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/recipes/${id}`).remove().then(() => {
            dispatch(removeRecipe(id))
        })
    }
}

export const editRecipe = (id, updates) => {
    return {
        type: 'EDIT_RECIPE',
        id,
        updates
    }
}

export const startEditRecipe = (id, updates) => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/recipes/${id}`).update({ ...updates }).then(() => {
            dispatch(editRecipe(id, updates))
        })
    }
}

export const addIngredients = (recipeId, ingredient) => {
    return {
        type: 'ADD_INGREDIENT',
        ingredient,
        recipeId
    }
}

export const startAddIngredient = (recipeId, name, available = false) => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/recipes/${recipeId}/ingredients`).push({ name, available }).then((ref) => {
            dispatch(addIngredients(recipeId, { id: ref.key, name, available }))
        })
    }
}

export const removeIngredient = (recipeId, ingredientId) => {
    return {
        type: 'REMOVE_INGREDIENT',
        recipeId,
        ingredientId
    }
}

export const startRemoveIngredient = (recipeId, ingredientId) => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/recipes/${recipeId}/ingredients/${ingredientId}`).remove().then(() => {
            dispatch(removeIngredient(recipeId, ingredientId))
        })
    }
}

export const setRecipes = (recipes) => {
    return {
        type: 'SET_RECIPES',
        recipes
    }
}

export const startSetRecipes = () => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/recipes`).once('value').then((snapshot) => {
            const recipes = []
            snapshot.forEach((childSnapshot) => { 
                recipes.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val(),
                })
            })
            dispatch(setRecipes(recipes))
        })
    }
}


export const setIngredients = (recipeId, ingredients) => {
    return {
        type: 'SET_INGREDIENTS',
        recipeId,
        ingredients
    }
}

export const startSetIngredients = (recipeId) => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/recipes/${recipeId}/ingredients`).once('value').then((snapshot) => {
            const ingredients = []
            snapshot.forEach((childSnapshot) => {
                ingredients.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setIngredients(recipeId, ingredients))
        })
    }
}
