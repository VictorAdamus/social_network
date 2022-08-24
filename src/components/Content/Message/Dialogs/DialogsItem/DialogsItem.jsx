import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './style.module.css'
import classname from 'classnames';

const styles = classname.bind(classes);
const DialogItem = (props) => {
    const activeLink = styles(classes.dialogLink, classes.activeLink);
    const link = styles(classes.dialogLink);
    const setActive = ({ isActive }) => (isActive ? activeLink : link);
    return (
        <li className={classes.dialogItem} >
            <NavLink className={setActive} to={props.id}>{props.name}</NavLink>
        </li >
    )
}

export default DialogItem;