import React from 'react';
import S from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={S.nav}>
            <NavLink to="/Profile" activeClassName={S.activeLink} className={S.header_nav_link}>Profile</NavLink>
            <NavLink to="/Dialogs" activeClassName={S.activeLink} className={S.header_nav_link}>Messages</NavLink>
            <NavLink to="#d" className={S.header_nav_link}>News</NavLink>
            <NavLink to="#e" className={S.header_nav_link}>Music</NavLink>
            <NavLink to="#f" className={S.header_nav_link}>Settings</NavLink>
            <NavLink to="/Users" className={S.header_nav_link}>Users</NavLink>
        </nav>
    )
}
export default Navbar;