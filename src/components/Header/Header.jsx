import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return(

      <header className={s.header} >
          <NavLink className={s.logo} to={'/Profile'}>UniGLo</NavLink>
          <p className={s.loginBlock}>
          { props.isAuth
              ? <div>Hello, {props.login} <button onClick={props.logout}>log out</button></div>
              : <NavLink  to={'/login'}>Login</NavLink>}
          </p>
      </header>

  )
}

export default  Header;