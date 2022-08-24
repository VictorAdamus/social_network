import React from "react";
import classes from './style.module.css'
import AboutUser from "./AboutUser/AboutUser";
import UserImagesList from "./UserImagesList/UserImagesList";
import UserInfo from "./User_info/UserInfo";

import users from "../../../backend/users.js";
import UserPosts from "./UserPosts/UserPosts";

const User = () => {
    const name = users[0].name;
    const images = users[0].images;
    const posts = users[0].posts;
    const avatar = users[0].avatar;
    return (
        <div className={classes.user}>
            <UserInfo avatar={avatar} name={name} age={`${users[0].age}`} profession={`${users[0].profession}`} gender={`${users[0].gender}`} city={`${users[0].city}`} />
            <AboutUser about={`${users[0].about}`} />
            <UserImagesList images={[...images]} />
            <UserPosts name={name} posts={[...posts]} avatar={`${users[0].avatar}`} />
        </div>
    )
}

export default User;