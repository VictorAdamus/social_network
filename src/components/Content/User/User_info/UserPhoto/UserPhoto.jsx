import React from "react";
import classes from './style.module.css';


const UserPhoto = (props) => {
    return (
        <img className={classes.user__img} src={props.avatar} alt={props.name} ></img >
    )
}

export default UserPhoto;