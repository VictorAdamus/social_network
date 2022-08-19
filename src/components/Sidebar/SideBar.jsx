import React from "react";
import classes from './style.module.css'

const SideBar = () => {
   return (
      <nav className={classes.sidebar}>
         <ul className={classes.sidebar__list}>
            <li className={`${classes.sidebar__item} ${classes.active}`}><a href="/user">Profile</a></li>
            <li className={classes.sidebar__item}><a href="/news">News</a></li>
            <li className={classes.sidebar__item}><a href="/music">Music</a></li>
            <li className={classes.sidebar__item}><a href="/settings">Settings</a></li>
            <li className={classes.sidebar__item}><a href="/message">Message</a></li>
         </ul>
      </nav>
   )
}

export default SideBar;
