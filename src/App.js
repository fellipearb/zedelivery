import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ApolloProvider } from "react-apollo";
import ClientService from './services/ClientService';

/**
 * Pages
 */

import Home from './pages/Home';
import Products from './pages/Products';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <ApolloProvider client={ClientService}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/produtos">
            <Products />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
