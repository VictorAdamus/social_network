import React from 'react'
import DialogItem from './DialogsItem/DialogsItem';
import classes from './style.module.css'

const Dialogs = (props) => {
    return (
        <ul className={classes.dialogList}>
            {props.users.map((user) => <DialogItem name={user.name} id={`${user.id_user}`} key={user.id_user} />)}
        </ul>
    )
}

export default Dialogs;