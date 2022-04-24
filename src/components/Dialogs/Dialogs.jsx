import React from 'react';
import s from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/Item";
import Message from "./Message/Message";
import AddMessageForm from "./AddMEssageForm/AddMEssageForm";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message massage={m.message} key={m.id}/>);
    let NewMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs;