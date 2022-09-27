import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Profile from "../components/Profile/Profile";
import Password from "../components/Password/Password";
import PasswordRecovery from "../components/PasswordRecovery/PasswordRecovery";
import Login from "../components/Login/Login";
import Test from "../components/Test/Test";
import Reg from "../components/Registration/Reg";
import Error404 from "../components/Error/Error404";

const Pages = () => {
    return (
        <div>
            <Routes>

                <Route path={'/'}  element={<Profile/>} />
                <Route path={'/profile'}  element={<Profile/>} />
                <Route path={'/password'} element={<Password/>}/>
                <Route path={'/recovery'} element={<PasswordRecovery/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Reg/>}/>
                <Route path={'/*'} element={<Error404/>}/>

                <Route path={'/test'} element={<Test/>}/>
            </Routes>
        </div>
    );
};

export default Pages;