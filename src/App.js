import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Pages from "./containers/Pages/Pages";
const App = () => {
  return (
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route path='/:name' component={Pages}/>
              </Switch>
          </Layout>
      </BrowserRouter>
  );
};
export default App;
