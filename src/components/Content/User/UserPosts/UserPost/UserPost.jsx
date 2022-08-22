import React from 'react';
import classes from './style.module.css'

const UserPost = (props) => {
    console.log(props.post)
    return (<>
        {props.post.map(post =>
            <div className={classes.user_post} key={post.id}>
                <img className={classes.user_post_avatar} src={props.avatar} width={'80'} height={'80'} alt=''></img>
                <p className={classes.user_post_text}>"{post.text}"</p>
            </div>)}
    </>
    )
}

export default UserPost; 