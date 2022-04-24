const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        dialogs: [
            {id: 1, name: 'Mykhail'},
            {id: 2, name: 'Nastya'},
            {id: 3, name: 'Dasha'},
            {id: 4, name: 'Nonna'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are u?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
        ],

}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
           return  {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            }
        default:
            return state;
    }
}
export const SendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}
export default dialogsReducer;