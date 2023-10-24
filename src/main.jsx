import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './index.scss';
import {ContextComponent} from "./context/TestContext.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <ContextComponent>
                <App/>
            </ContextComponent>
        </BrowserRouter>
);
