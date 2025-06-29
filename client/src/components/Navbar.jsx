// client/src/components/Navbar.jsx

import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Fashion Blog</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>

        {user ? (
          <>
            <span style={styles.user}>Hi, {user.username}</span>
            <button onClick={logout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    margin: 0,
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  user: {
    color: '#fff',
  },
  button: {
    padding: '6px 12px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Navbar;
// This is the Navbar component for the blog application.