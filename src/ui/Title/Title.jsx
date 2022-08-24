import React from 'react';
import classes from './style.module.css';

const Title = (props) => {
    return (
        <p className={classes.title}>{props.text}</p>
    )
}
export default Title;