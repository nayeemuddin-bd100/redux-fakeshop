import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './containers/Header';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <Router>
      <Header />
      <br />
      <br />
      <br/>
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route> 404 Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;
