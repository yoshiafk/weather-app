import React, { Component } from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import City from "./pages/City"
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import { Provider } from "react-redux";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/404" component={NotFound}/>
            <Route path="/:city" component={City}/>
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
