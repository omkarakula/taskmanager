import { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);

  const login = async (email, password) => {
    try {
      const res = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
      if (res.data.length > 0) {
        setUser(res.data[0]);
        localStorage.setItem('user', JSON.stringify(res.data[0]));
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const signup = async (username, email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/users', { username, email, password });
      setUser(res.data);
      localStorage.setItem('user', JSON.stringify(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
