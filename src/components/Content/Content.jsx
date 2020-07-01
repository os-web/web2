import React from 'react';
import MyPosts from './Posts/MyPosts';
import classes from './Content.module.css';

function Content() {
    return <div className={classes.content}>
    <div>
      <img src="https://img-cdn.tinkoffjournal.ru/french-riviera_main.nn8qslkdedg5.png"></img>
    </div>
    <div>
      ava+discription 
    </div>
   <MyPosts />
  </div>
  ;
}
export default Content;