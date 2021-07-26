import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
      type: types.login,
      payload: {
        name: 'Alan',
      },
    });
    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
