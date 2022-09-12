import React, {useContext} from 'react';
import { UserContext } from '../../App';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="header">
            <img src={logo} alt="Logo" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
               <button onClick={() => setLoggedInUser({})}>Sign-out</button>
            </nav>
        </div>
    );
};

export default Header;