import React from "react";
import classes from './style.module.css'
import AboutUser from "./AboutUser/AboutUser";
import UserImagesList from "./UserImagesList/UserImagesList";
import UserInfo from "./User_info/UserInfo";

import users from "../../../backend/users.js";
import UserPosts from "./UserPosts/UserPosts";

const User = () => {
    const images = (users[0].images)
    console.log(images)
    return (
        <div className={classes.user}>
            <UserInfo avatar={`${users[0].avatar}`} name={`${users[0].name}`} age={`${users[0].age}`} profession={`${users[0].profession}`} gender={`${users[0].gender}`} />
            <AboutUser about={`${users[0].about}`} />
            <UserImagesList images={`${[...images]}`} />
            <UserPosts posts={`${users[0].posts}`} avatar={`${users[0].avatar}`} />
        </div>
    )
}

export default User;