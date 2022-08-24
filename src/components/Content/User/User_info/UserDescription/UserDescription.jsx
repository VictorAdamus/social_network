import React from "react";
import classes from './style.module.css'

const UserDescription = (props) => {
    return (
        <ul className={classes.user_description}>
            <li className={classes.user_description_item}>Name: <span className={classes.user_data}>{props.name} </span></li>
            <li className={classes.user_description_item}>Age: <span className={classes.user_data}>{props.age}</span> y.o.</li>
            <li className={classes.user_description_item}>Gender: <span className={classes.user_data}>{props.gender}</span></li>
            <li className={classes.user_description_item}>Profession: <span className={classes.user_data}>{props.profession}</span></li>
            <li className={classes.user_description_item}>City: <span className={classes.user_data}>{props.city}</span></li>
        </ul>
    )
}

export default UserDescription;