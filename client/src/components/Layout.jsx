// Layout.jsx
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        {children}
      </main>
    </>
  );
};

const styles = {
  main: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '20px',
    minHeight: '80vh',
    fontFamily: 'Segoe UI, sans-serif',
  }
};

export default Layout;
// This is the main layout component that wraps around all pages.