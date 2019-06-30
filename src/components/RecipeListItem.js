import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const RecipeListItem = (props) => {
    const link = `read/${props.id}`
    return (
        <div>
            <Link to={link} >
                <h1>{props.name}</h1>
                <span>{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
            </Link>
        </div>
    );
};

export default RecipeListItem;