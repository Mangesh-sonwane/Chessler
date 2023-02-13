import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
  const [queries, setQueries] = useSearchParams();

  useEffect(() => {
    var d = {
      grant_type: 'authorization_code',
      code: queries.get('code'),
      client_id: 'chessler',
      code_verifier: localStorage.getItem('code_verifier'),
      redirect_uri: 'http://localhost:3000/dashboard',
    };

    var config = {
      method: 'post',
      url: 'https://lichess.org/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: d,
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem('token', response.data.access_token);
        window.location.href = '/';
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      Authorizing...
    </div>
  );
};

export default Auth;
