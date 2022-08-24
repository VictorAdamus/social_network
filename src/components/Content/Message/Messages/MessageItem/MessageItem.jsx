import classes from './style.module.css'

const MessagesItem = (props) => {
    return (
        <li className={classes.messagesItem}>
            <span className={classes.messagesItemAvatar}>{props.name}</span>
            <span className={classes.messagesItemText}>{props.message}</span>
        </li>
    )
}

export default MessagesItem;