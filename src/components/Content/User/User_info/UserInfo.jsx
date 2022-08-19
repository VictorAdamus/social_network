import React from "react";
import UserPhoto from "../UserPhoto/UserPhoto";
import UserDescription from '../UserDescription/UserDescription'
import classes from './style.module.css'

const UserInfo = (props) => {
    return (
        <div className={classes.user__info}>
            <UserPhoto avatar={props.avatar} />
            <UserDescription name={`${props.name}`} age={`${props.age}`} gender={`${props.gender}`} profession={`${props.profession}`} />
        </div>
    )
}

export default UserInfo;