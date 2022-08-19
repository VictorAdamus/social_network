import React from "react";
import classes from './style.module.css';


const UserPhoto = ({ avatar }) => {
    return (
        <img className={classes.user__img} src={avatar} width={'250'} height={'250'} alt='' ></img >
    )
}

export default UserPhoto;