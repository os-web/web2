import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div className= {classes.posts}>
           <Post message='Hi, how are you?' like='15' />
           <Post message='It is my first post' like='20' />
      </div>
    </div>
  ) 
}
export default MyPosts;