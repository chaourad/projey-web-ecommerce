import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/contextProvider';


function Navigation() {
  const { userToken } = useStateContext();

  // Check if the user is logged in
  const isLoggedIn = !!userToken;

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {isLoggedIn ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
