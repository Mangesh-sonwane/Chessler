import React, { useState } from 'react';

const LichessAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = async () => {
    try {
      // Call the Lichess API to authenticate the user
      const response = await fetch('https://lichess.org/oauth/authorize');
      const data = await response.json();

      // Update the state with the authentication status
      setAuthenticated(data.authenticated);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {authenticated ? (
        <p>You are now authenticated with Lichess.</p>
      ) : (
        <button onClick={handleLogin}>Login with Lichess</button>
      )}
    </div>
  );
};

export default LichessAuth;
