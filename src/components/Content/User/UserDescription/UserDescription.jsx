import React from "react";
import classes from './style.module.css'

const UserDescription = (props) => {
    return (
        <div className={classes.user_description}>
            <p className={classes.user_description_item}>Name: <span className={classes.user_data}>{props.name} </span></p>
            <p className={classes.user_description_item}>Age: <span className={classes.user_data}>{props.age}</span> y.o.</p>
            <p className={classes.user_description_item}>Gender: <span className={classes.user_data}>{props.gender}</span></p>
            <p className={classes.user_description_item}>Profession: <span className={classes.user_data}>{props.profession}</span></p>
        </div>
    )
}

export default UserDescription;