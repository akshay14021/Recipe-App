import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItem = (props) => {
    const link = `/read/${props.id}`
    return (
        <div>
            <Link to={link} >
                <h1>{props.name}</h1>
                <span>{props.createdAt}</span>
            </Link>
        </div>
    );
};

export default RecipeListItem;