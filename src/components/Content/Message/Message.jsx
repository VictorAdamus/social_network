import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';
import classes from './style.module.css'

const Message = () => {
    return (
        <div className={classes.message}>
            <Dialogs />
            <Messages />
        </div>
    )
}

export default Message;