import React from "react";
import classes from './style.module.css';
import SidebarItem from "./SidebarItem/SidebarItem";


const SideBar = () => {
   return (
      <nav className={classes.sidebar}>
         <ul className={classes.sidebar__list}>
            <SidebarItem name='Profile' to='/' />
            <SidebarItem name='Message' to='/message' />
            <SidebarItem name='Music' to='/music' />
            <SidebarItem name='News' to='/news' />
            <SidebarItem name='Settings' to='/settings' />
         </ul>
      </nav >
   )
}

export default SideBar;
