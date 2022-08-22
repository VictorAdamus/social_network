import React from 'react';
import classes from './style.module.css'

const Messages = () => {
    return (
        <div className={classes.messages}>
            <ul className={classes.messagesList}>
                <li className={classes.messagesItem}><span className={classes.messagesItemAvatar}>Bart Simpson:</span><span className={classes.messagesItemText}>"Hello! How are you?"</span></li>
                <li className={classes.messagesItem}><span className={classes.messagesItemAvatar}>Bart Simpson:</span><span className={classes.messagesItemText}>"Let's go to the sea tomorrow"</span></li>
                <li className={classes.messagesItem}><span className={classes.messagesItemAvatar}>Bart Simpson:</span><span className={classes.messagesItemText}>"You can take beer, vodka and a few girls with you. Let's go relax and sunbathe"</span></li>
            </ul>
            <div className={classes.messageOption}>
                <input className={classes.messagesInput} type='text'></input>
                <button className={classes.messagesButton} type='button'>Send</button>
            </div>
        </div>
    )
}

export default Messages;