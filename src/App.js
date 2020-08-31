import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './container/Home'
import Cart from './container/Cart'
function App() {
  return (<div>
    <BrowserRouter >
      <Switch>
        <Route
          exact
          path="/cart"
          name="Signin Page"
          render={(props) => <Cart {...props} />}
        />
        <Route exact path="/404" name="Page 404" render={(props) => <Cart {...props} />} />
        <Route
          path="/"
          name="DefaultLayout"
          render={(props) => <Home {...props} />}
        />
      </Switch>
    </BrowserRouter>
  </div>);
}

export default App;
