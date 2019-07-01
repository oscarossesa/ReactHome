// Dependencies 
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </App>;

export default AppRoutes;