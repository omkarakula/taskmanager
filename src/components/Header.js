import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-primary text-white p-3 rounded d-flex justify-content-between align-items-center">
    <h1 className="h3">Task Manager</h1>
    <nav>
      <Link to="/" className="text-white me-3 link">Home</Link>
      <Link to="/about" className="text-white mx-3 link">About</Link>
      <Link to="/contact" className="text-white link">Contact</Link>
    </nav>
  </header>
);

export default Header;