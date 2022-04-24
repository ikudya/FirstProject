import {profileAPI, userAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', like: ' 25'},
        {id: 2, post: 'It’s my first post', like: ' 38'},
        {id: 3, post: 'It’s my first post', like: ' 38'},
        {id: 4, post: 'It’s my first post', like: ' 38'},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: action.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ' '
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        dispatch(setStatus(status));
    });
}
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export default profileReducer;