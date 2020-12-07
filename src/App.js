import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/**
 * Pages
 */

import Home from './pages/Home';
import Products from './pages/Products';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
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
  );
}

export default App;
