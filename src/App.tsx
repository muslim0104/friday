import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, HashRouter} from "react-router-dom";
import Links from "./ui/routing/Links";
import Pages from "./ui/routing/Pages";

function App() {
    return (
        <HashRouter>
            <Links/>
            <Pages/>
        </HashRouter>

    )
}

export default App;
