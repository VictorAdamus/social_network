import React from "react";
import { NavLink } from "react-router-dom";
import classes from './style.module.css';
import classname from 'classnames';

const styles = classname.bind(classes);

const SidebarItem = (props) => {
    const activeLink = styles(classes.sidebarLink, classes.activeLink);
    const link = styles(classes.sidebarLink);
    const setActive = ({ isActive }) => (isActive ? activeLink : link);
    return (
        <li className={classes.sidebar__item}><NavLink className={setActive} to={props.to}>{props.name}</NavLink></li>
    )
}

export default SidebarItem;