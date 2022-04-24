import React from 'react';
import S from './Post.module.css';
const Post = (props) => {
    return (
       <div className={S.item}>
           <img src="https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg"/>
           { props.message }

           <div>
               <span>like</span>
               { props.like }
           </div>
       </div>
    )
}
export default  Post;