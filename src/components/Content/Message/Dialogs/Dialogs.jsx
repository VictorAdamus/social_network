import React from 'react'
import DialogItem from './DialogsItem/DialogsItem';
import classes from './style.module.css'



const Dialogs = () => {
    return (
        <ul className={classes.dialogList}>
            <DialogItem name='Marge Simpson' id='2' />
            <DialogItem name='Lisa Simpson' id='3' />
            <DialogItem name='Ned Flanders' id='4' />
            <DialogItem name='Krusty the Clown' id='5' />
            <DialogItem name='Nelson Muntz' id='6' />
            <DialogItem name='Mo Shizlack' id='7' />
            <DialogItem name='Bart Simpson' id='8' />
            {/* <li className={classes.dialogItem}><NavLink className={`${classes.dialogLink} ${classes.active}`} to='/message/2'>Bart Simpson</NavLink></li> */}
        </ul>
    )
}

export default Dialogs;