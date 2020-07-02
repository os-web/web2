import React from 'react';
import classes from './Post.module.css';

function Post(props) {
    return (      
      <div className= {classes.item}>
        <img src='https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg'></img>
          {props.message}
          <div>
          <span>like{props.like}</span>
        </div>
          
      </div>     
    ) 
}
export default Post;