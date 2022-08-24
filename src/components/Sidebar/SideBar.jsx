import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';
import classname from 'classnames';

const SidebarItem = (props) => {
   return (
      <li className='sidebar__item'><NavLink className={classname('sidebar__link', ({ isActive }) => isActive ? 'active' : '')} to={props.to}>{props.name}</NavLink></li>
   )
}

const SideBar = () => {
   return (
      <nav className='sidebar'>
         <ul className='sidebar__list'>
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
