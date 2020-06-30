import React from 'react';
import classes from './Content.module.css';

function Content() {
    return <div className={classes.content}>
    <div>
      <img src="https://www.ivetta.ua/wp-content/uploads/2010/08/Sauf-Bich-South-Beach.jpg"></img>
    </div>
    <div>
      ava+discription 
    </div>
    <div>
      My posts
      <div>
      New post 
      </div>
      <div>
        post 1
      </div> 
      <div>
        post 2
      </div>
    </div>
  </div>
  ;
}
export default Content;