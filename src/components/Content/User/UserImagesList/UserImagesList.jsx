import React from "react";
import Title from "../../../../ui/Title/Title";
import classes from './style.module.css'

const UserImagesList = (props) => {
    return (
        <div className={classes.user_imgs}>
            <Title text='Photo Album' />
            <ul className={classes.user_img_list}>
                {props.images.map(img =>
                    <li className={classes.user_img_item} key={img.id}>
                        <img className={classes.user_img} src={img.link} width='200' height='200' alt={img.description} />
                        <div className={classes.user_img_item_description}>
                            <p className={classes.user_img_item_text}>{img.description}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default UserImagesList;