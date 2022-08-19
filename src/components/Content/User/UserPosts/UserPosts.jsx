import React from 'react';
import UserPost from './UserPost/UserPost';
import classes from './style.module.css'

const UserPosts = ({ avatar, posts }) => {
    return (
        <div className={classes.user_posts}>
            <p className={classes.title}>My posts:</p>
            <ul className={classes.post_list}>
                <li className={classes.post_item}><UserPost avatar={avatar} post={posts} /></li>
            </ul>
        </div>
    )
}

export default UserPosts; 