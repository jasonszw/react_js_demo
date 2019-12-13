import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Home from './views/home'

import {Router, Route} from "react-router";

const routes = {
    path: '/',
    component: App,
    childRoutes: [
        { path: 'home', component: Home },
    ]
};
Router.render(<Router routes={routes} />,document.body);