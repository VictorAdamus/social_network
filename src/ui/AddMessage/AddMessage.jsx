import React from 'react'
import Button from '../Button/Button';
import classes from './style.module.css'


const AddMessage = (props) => {
    return (
        <div className={classes.messageOption}>
            <input className={classes.messagesInput} type='text'></input>
            <Button text={props.text} />
        </div>
    )
}

export default AddMessage;