import React from 'react';
import AddMessage from '../../../../ui/AddMessage/AddMessage';
import Title from '../../../../ui/Title/Title';
import classes from './style.module.css'

const UserPosts = (props) => {
    return (
        <div className={classes.user_posts}>
            <Title text='My posts' />
            <ul className={classes.post_list}>
                {props.posts.map(post =>
                    <li className={classes.post_item} key={post.id}>
                        <img className={classes.user_post_avatar} src={props.avatar} width={'80'} height={'80'} alt={props.name}></img>
                        <p className={classes.user_post_text}>"{post.text}"</p>
                    </li>
                )
                }
            </ul>
            <AddMessage text='Add post' />
        </div>
    )
}
export default UserPosts; 