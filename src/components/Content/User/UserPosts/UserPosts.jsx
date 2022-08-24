import React from 'react';
import AddMessage from '../../../../ui/AddMessage/AddMessage';
import Title from '../../../../ui/Title/Title';
import UserPhoto from '../User_info/UserPhoto/UserPhoto';
import classes from './style.module.css'

const UserPosts = (props) => {
    return (
        <div className={classes.user_posts}>
            <Title text='My posts' />
            <ul className={classes.post_list}>
                {props.posts.map(post =>
                    <li className={classes.post_item} key={post.id_post}>
                        <UserPhoto w='80px' h='80px' avatar={props.avatar} />
                        <span className={classes.likeHeart}></span><span className={classes.likeCount}>{post.likes_count}</span>
                        <p className={classes.user_post_text}>"{post.text}"</p>
                    </li>
                )
                }
            </ul>
            <AddMessage text='Add post' />
        </div >
    )
}
export default UserPosts; 