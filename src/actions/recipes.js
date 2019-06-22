import firebase from '../firebase/firebase';

export const addRecipe = (recipe) => {
    return {
        type: 'ADD_RECIPE',
        recipe
    }
}

export const startAddRecipe = (name = '', instructions = '', createdAt) => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/recipes`).push({ name, instructions, createdAt }).then((ref) => {
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

export const addIngredients = (ingredient) => {
    return {
        type: 'ADD_INGREDIENT',
        ingredient
    }
}

// export const startAddIngredient = (recipeId, name, available) => {
//     return (dispatch, getState) => {
//         return firebase.database().ref(`users/${getState().auth.uid}/recipes`).once('value').then((snapshot) => {
//             let id
//             snapshot.forEach((childSnapshot) => {
//                 id = childSnapshot.key
//             })
//             if (recipeId === id) {
//                 return firebase.database().ref(`users/${getState().auth.uid}/recipes/${id}/ingredients`).push({ name, available }).then((ref) => {
//                     dispatch(addIngredients({ id: ref.key, name, available }))
//                 })
//             }
//         })
//     }
// }

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
                    ...childSnapshot.val()
                })
            })
            dispatch(setRecipes(recipes))
        })
    }
}

