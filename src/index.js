import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import firebase from './firebase/firebase';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';
import { startSetRecipes, startSetIngredients } from './actions/recipes';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

let appRendered = true
const renderApp = () => {
    if (appRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        appRendered = false
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetRecipes()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
            const recipes = store.getState().recipes
            recipes.forEach((recipe) => {
                store.dispatch(startSetIngredients(recipe.id))
            })
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
