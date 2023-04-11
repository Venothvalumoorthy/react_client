import React, { useState, useCallback } from 'react';


const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});


const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user');


  return {
    token: storedToken,
    user: storedUser,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');

  }, []);

  const loginHandler = (token, user) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);

  };



  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
