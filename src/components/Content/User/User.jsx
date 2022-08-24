import React from "react";
import classes from './style.module.css'
import AboutUser from "./AboutUser/AboutUser";
import UserImagesList from "./UserImagesList/UserImagesList";
import UserInfo from "./User_info/UserInfo";

import users from "../../../backend/users.js";
import UserPosts from "./UserPosts/UserPosts";

const User = () => {
    const user = users[0];
    const age = user.age;
    const gender = user.gender;
    const city = user.city
    const profession = user.profession
    const about = user.about
    const images = user.images;
    const posts = user.posts;
    const avatar = user.avatar;
    const name = user.name;
    return (
        <div className={classes.user}>
            <UserInfo avatar={avatar} name={name} age={age} profession={profession} gender={gender} city={city} />
            <AboutUser about={about} />
            <UserImagesList images={[...images]} />
            <UserPosts name={name} posts={[...posts]} avatar={avatar} />
        </div>
    )
}

export default User;