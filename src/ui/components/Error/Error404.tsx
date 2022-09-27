import React from 'react';
import s from "./styles/Error.module.css"
const Error404 = () => {
    return (
        <div className={s.error_block}>

            <h1 className={s.error_text}>404</h1>

            <h1 className={s.error_text}> Page not found!   </h1>

        </div>
    );
};

export default Error404;