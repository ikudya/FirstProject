import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path="/Dialogs"
                           render={() =>
                               <DialogsContainer />}/>
                     <Route path="/Profile/:userId?"
                           render={() => <ProfileContainer  /> }/>
                    <Route path="/Users"
                           render={() => <UsersContainer /> }/>
                    <Route path="/login"
                           render={() => <LoginPage /> }/>
                </div>
            </div>
    );
}

export default App;
