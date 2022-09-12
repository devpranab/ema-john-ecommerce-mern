import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h4>Email : {loggedInUser.email}</h4>
      <Header />
    <Router>
        <Switch>
          <Route path="/shop"><Shop></Shop></Route>
          <Route path="/review"><Review></Review></Route>
          <Route path="/inventory"><Inventory></Inventory></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/shipment"><Shipment></Shipment></Route>
          <Route exact path="/"><Shop></Shop></Route>
          <Route exact path="/product/:productKey"><ProductDetails></ProductDetails></Route>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
