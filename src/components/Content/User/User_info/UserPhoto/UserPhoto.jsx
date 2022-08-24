import React from "react";
import classes from './style.module.css';


const UserPhoto = (props) => {
    console.log(props.w)
    return (
        <img className={classes.user__img} src={props.avatar} alt={props.name} style={{ width: props.w, height: props.h }}></img >
    )
}

export default UserPhoto;