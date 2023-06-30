import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { Authcontext } from '../../contexts/Usercontext';

const Header = () => {
    const {user, logout} = useContext(Authcontext);
   
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                { user?.uid ? 
                  <button className='btn-logout' onClick={logout}>Logout</button> 
                  :
                   <>
                     <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                   </>
                }
               
            </div>
        </nav>
    );
};

export default Header;