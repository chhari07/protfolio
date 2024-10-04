import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-black">
        <div className="logo"></div> {/* Logo Container */}
       
      </nav>

      {isMenuOpen && (
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 bg-white z-50">
            <div className="logo"></div> {/* Reuse logo */}
            <button onClick={toggleMenu} className="close-button">Close</button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
