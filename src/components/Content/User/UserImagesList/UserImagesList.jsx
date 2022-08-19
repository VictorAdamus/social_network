import React from "react";
import UserImage from "../UserImage/UserImage";
import classes from './style.module.css'

const UserImagesList = (props) => {
    console.log(props)
    return (
        <div className={classes.user_imgs}>
            <p className={classes.title}> Photo Album</p>
            <ul className={classes.user_img_list}>
                <UserImage img={props.images} />
            </ul>
        </div>
    )
}
export default UserImagesList;