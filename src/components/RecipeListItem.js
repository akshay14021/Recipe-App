import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const RecipeListItem = (props) => {
    const link = `read/${props.id}`
    return (
        <Link className="list-item" to={link} >
            <h3 className="list-item__title">{props.name}</h3>
            <span className="list-item__date">{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
        </Link>
    );
};

export default RecipeListItem;