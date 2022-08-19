import React from "react";
import classes from './style.module.css';
const AboutUser = (props) => {
    return (<div className={classes.about}>
        <p className={classes.aboutme}>About Me:</p>
        <p className={classes.aboutuser}>{props.about}</p>
    </div>
    )
}

export default AboutUser;