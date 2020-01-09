import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import RegistroProveedor from './components/RegistroProveedor'

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/registro-proveedor" component={RegistroProveedor} />
         </Switch>
      </Router>
   );
}

export default App
