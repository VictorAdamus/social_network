import React from 'react'
import classes from './style.module.css'
const Dialogs = () => {
    return (
        <ul className={classes.dialogList}>
            <li className={`${classes.dialogItem} ${classes.active}`}>Bart Simpson</li>
            <li className={classes.dialogItem}>Marge Simpson</li>
            <li className={classes.dialogItem}>Lisa Simpson</li>
            <li className={classes.dialogItem}>Maggie Simpson</li>
            <li className={classes.dialogItem}>Ned Flanders</li>
            <li className={classes.dialogItem}>Krusty the Clown</li>
            <li className={classes.dialogItem}>Nelson Muntz</li>
            <li className={classes.dialogItem}>Mo Shizlack</li>
        </ul>
    )
}

export default Dialogs;