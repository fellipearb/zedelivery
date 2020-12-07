import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./components/shared/Header/Header";

import Footer from "./components/shared/Footer/Footer";

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
          <Header />
          <Products />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
