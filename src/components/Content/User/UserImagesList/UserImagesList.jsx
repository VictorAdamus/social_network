import React from "react";
import classes from './style.module.css'

const UserImagesList = (props) => {
    console.log(props.images)
    return (
        <div className={classes.user_imgs}>
            <p className={classes.title}> Photo Album</p>
            <ul className={classes.user_img_list}>
                {props.images.map(img =>
                    <li className={classes.user_img_item} key={img.id}>
                        <img className={classes.user_img} src={img.link} width='150' height='150' alt='' />
                    </li>
                )}
            </ul>
        </div>
    )
}
export default UserImagesList;