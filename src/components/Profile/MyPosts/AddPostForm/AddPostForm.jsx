import {Field, reduxForm} from "redux-form";
import React from "react";

const addNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field  name="newPostText" component="textarea"  />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>

}

export default reduxForm({form: "ProfileAddNewPostForm"})(addNewPostForm)
