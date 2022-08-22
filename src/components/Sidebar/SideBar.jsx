import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';
import cn from 'classnames';

const SideBar = () => {
   // const setActive = ({ isActive }) => {
   //    return isActive ? 'activeLink' : ''
   // };
   return (
      <nav className='sidebar'>
         <ul className='sidebar__list'>
            <li className='sidebar__item'><NavLink exact='true' className={cn('sidebar__link', ({ isActive }) => isActive ? 'active' : '')} to='/'>Profile</NavLink></li>
            <li className='sidebar__item'><NavLink exact='true' className={cn('sidebar__link', ({ isActive }) => isActive ? 'active' : '')} to='/music'>Music</NavLink></li>
            <li className='sidebar__item'><NavLink exact='true' className={cn('sidebar__link', ({ isActive }) => isActive ? 'active' : '')} to='/settings'>Settings</NavLink></li>
            <li className='sidebar__item'><NavLink exact='true' className={cn('sidebar__link', ({ isActive }) => isActive ? 'active' : '')} to='/message'>Message</NavLink></li>
            <li className='sidebar__item'><NavLink exact='true' className={cn('sidebar__link', ({ isActive }) => isActive ? 'active' : '')} to='/news'>News</NavLink></li>
         </ul>
      </nav >
   )
}

export default SideBar;
