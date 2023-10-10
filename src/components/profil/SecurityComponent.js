import React, { useContext } from 'react'
import UserContext from '../../context/UserContext';

function SecurityComponent() {
  const { user } = useContext(UserContext);
  console.log(user);
    return (
      <>
        {!user.isLogged ? (
          <p>User is not logged in.</p>
        ) : (
          <div>
            
            <p>User ID: {user.userId}</p>
            <p>Token: {user.token}</p>
            <p>Role: {user.role}</p>
          </div>
        )}
      </>
    );
}

export default SecurityComponent