import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import RecipeDashboard from '../components/RecipeDashboard';
import AddRecipe from '../components/AddRecipe';
import PrivateRoute from './PrivateRoute';
import EditRecipe from '../components/EditRecipe';
import RecipeItemDetail from '../components/RecipeItemDetail';


export const history = createHistory()

const AppRouter = (props) => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/" component={LoginPage} exact={true} />
                        <PrivateRoute>
                            <Route path="/dashboard" component={RecipeDashboard} />
                            <Route path="/add" component={AddRecipe} />
                            <Route path="/read/:id" component={RecipeItemDetail} />
                            <Route path="/edit/:id" component={EditRecipe} />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default AppRouter;