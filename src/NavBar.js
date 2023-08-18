import React from 'react';

function NavBar() {
  return (
    <nav style={styles.navbar}>
   
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#060724',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
  },
  navItem: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '5px 10px',
    borderRadius: '3px',
    transition: 'background-color 0.2s',

    ':hover': {
      backgroundColor: '#555',
      textDecoration: 'underline'
    }
  }
};

export default NavBar;
