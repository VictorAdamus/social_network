import React from 'react';
import classes from './style.module.css'

const UserPost = ({ avatar, post }) => {
    return (
        <div className={classes.user_post}>
            <img className={classes.user_post_avatar} src={avatar} width={'80'} height={'80'}></img>
            <p className={classes.user_post_text}>"{post}"</p>
        </div>
    )
}

export default UserPost; 