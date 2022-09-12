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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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
          <PrivateRoute path="/inventory"><Inventory></Inventory></PrivateRoute>
          <Route path="/login"><Login></Login></Route>
          <PrivateRoute path="/shipment"><Shipment></Shipment></PrivateRoute>
          <Route exact path="/"><Shop></Shop></Route>
          <Route exact path="/product/:productKey"><ProductDetails></ProductDetails></Route>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
