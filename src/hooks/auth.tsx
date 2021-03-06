import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  username: string;
  // avatar_url: string;
}

interface AuthState {
  token: string;
  user: User;
}


interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  // assinantes: SubscribeType;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AgroMart:token');
    const user = localStorage.getItem('@AgroMart:user');

    if(token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post(`${process.env.REACT_APP_LOGIN_POST}`, {
      identifier: email,
      password: password
    });

    const { jwt: token, user } = response.data;
    api.defaults.headers.authorization = `Bearer ${token}`;

    localStorage.setItem('@AgroMart:token', token);
    localStorage.setItem('@AgroMart:user', JSON.stringify(user));
    
    setData({ token, user });

  }, []);

  const signUp = useCallback(async ({ username, email, password }) => {

    await api.post(`${process.env.REACT_APP_SIGNUP_POST}`, {
      username: username,
      email: email,
      password: password
    });

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AgroMart:token');
    localStorage.removeItem('@AgroMart:user');

    delete api.defaults.headers.authorization;

    setData({} as AuthState);
  }, []);

  return(
    <AuthContext.Provider value={{ user: data.user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if(!context){
    throw new Error('useAuth must be used within an AuthProider');
  }

  return context;
}

export { AuthProvider, useAuth };