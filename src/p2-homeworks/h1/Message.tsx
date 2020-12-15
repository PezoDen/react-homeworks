import React from "react";
import classes from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={classes.body}>
            <img src={props.avatar} className={classes.img}/>
            <div className={classes.message}>
                <span className={classes.name}>{props.name}</span>
                <span>{props.message}</span>
                <span className={classes.time}>{props.time}</span>
            </div>
        </div>
    );
}

export default Message;
