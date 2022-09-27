import React from 'react';
import {NavLink} from "react-router-dom";

const Links = () => {
    return (
        <div>
            <NavLink to={'/profile'}>Профиль</NavLink>
            <NavLink to={'/registration'}>Регистрация</NavLink>
            <NavLink to={'/password'}>Пароль</NavLink>
            <NavLink to={'/recovery'}>Восстановление пароля</NavLink>
            <NavLink to={'/login'}>Логинизация</NavLink>
            <NavLink to={'/test'}>Тест</NavLink>
        </div>
    );
};

export default Links;