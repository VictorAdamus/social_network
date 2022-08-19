import React from 'react'
import classes from './style.module.css'

const UserImage = (props) => {
    return (
        <li className={classes.user_img_item}>
            <a className={classes.user_img_link} href='#'>
                <img className={classes.user_img} src='' width='150' height='150' alt='' />
            </a>
        </li>
    )
}

export default UserImage;