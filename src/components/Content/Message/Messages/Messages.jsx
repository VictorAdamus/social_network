import React from 'react';
import AddMessage from '../../../../ui/AddMessage/AddMessage';
import MessagesItem from './MessageItem/MessageItem';
import classes from './style.module.css'

const Messages = () => {
    return (
        <div className={classes.messages}>
            <ul className={classes.messagesList}>
                <MessagesItem name='Bart Simpson' message="Hello! How are you?" />
                <MessagesItem name='Bart Simpson' message="Let's go to the sea tomorrow" />
                <MessagesItem name='Bart Simpson' message="You can take beer, vodka and a few girls with you. Let's go relax and sunbathe" />
            </ul>
            <AddMessage text='Send' />
        </div>
    )
}

export default Messages;