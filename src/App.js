import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Pages from "./containers/Pages/Pages";
import Admin from "./containers/Admin/Admin";
const App = () => {
  return (
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route path='/admin' component={Admin}/>
                  <Route path='/:name' component={Pages}/>
              </Switch>
          </Layout>
      </BrowserRouter>
  );
};
export default App;
