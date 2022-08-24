import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';
import classes from './style.module.css'

import users from '../../../backend/users';

// const result = users.map(x => x.id_user)

const Message = () => {
    return (
        <div className={classes.message}>
            <Dialogs users={[...users]} />
            <Messages />
        </div>
    )
}

export default Message;