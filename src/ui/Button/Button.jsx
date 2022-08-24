import React from 'react'
import classes from './style.module.css'
const Button = (props) => {
    return (
        <button className={classes.button} type='button'>{props.text}</button>
    )
}

export default Button;