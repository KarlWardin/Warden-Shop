import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./containers/Header";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="ui App">
      <Router>
          <Header />
          <div className="container" style={{padding:"100px"}}>
        <Switch>
          <Route exact path="/" component={ProductListing } />
          <Route path="/product/:productId" component={ProductDetails} />
        </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
