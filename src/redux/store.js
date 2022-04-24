import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
    _state :{
        profilePage:{
            posts: [
                {id: 1, post: 'Hi, how are you?', like: ' 25'},
                {id: 2, post: 'It’s my first post', like: ' 38'},
                {id: 3, post: 'It’s my first post', like: ' 38'},
                {id: 4, post: 'It’s my first post', like: ' 38'},
            ],
            newPostText: ' Hello '
        },
        dialogsPage:{
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
            newMessageBody: ""
        },
        sideBar: {}
    },
    _callSubcriber() {
        console.log('state changes')
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubcriber=observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubcriber(this._state);
    }
}






export  default store;
window.state = store;