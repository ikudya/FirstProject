import React from 'react';
import S from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} like={p.like}/>)
    let NewPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={S.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={S.posts}>
                {postsElements}
            </div>
        </div>
    )
}
const addNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea}
                   placeholder={"Post message"} validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>

}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(addNewPostForm)

export default MyPosts;