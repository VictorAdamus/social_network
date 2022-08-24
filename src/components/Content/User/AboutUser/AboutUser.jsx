import React from "react";
import Title from "../../../../ui/Title/Title";
import classes from './style.module.css';
const AboutUser = (props) => {
    return (<div className={classes.about}>
        <Title text='About Me' />
        <p className={classes.aboutuser}>{props.about}</p>
    </div>
    )
}

export default AboutUser;