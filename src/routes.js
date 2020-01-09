// Dependencies 
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import RegistroProveedor from './components/RegistroProveedor'

const AppRoutes = () =>
    <App>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registro-proveedor" component={RegistroProveedor} />
            </Switch>
        </Router>
    </App>;

export default AppRoutes;