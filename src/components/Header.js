import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="bg-primary text-white p-3 rounded d-flex justify-content-between align-items-center">
      <h1 className="h3">Task Manager</h1>
      <nav>
        <Link to="/" className="text-white me-3 link">Home</Link>
        <Link to="/about" className="text-white mx-3 link">About</Link>
        <Link to="/contact" className="text-white mx-3 link">Contact</Link>
        {user ? (
          <>
            <span className="me-3">{user.username}</span>
            <button onClick={logout} className="btn btn-light btn-sm">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white mx-3 link">Login</Link>
            <Link to="/signup" className="text-white link">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
