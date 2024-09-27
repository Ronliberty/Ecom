import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';// Import cart icon from react-icons
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from './CartContext'; // Correct import statement


const NavItems = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const categories = [
    { label: 'Category 1', path: '/products/category1' },
    { label: 'Category 2', path: '/products/category2' },
    { label: 'Category 3', path: '/products/category3' },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          {/* Logo/Brand */}
          <Link className="navbar-brand" to="/">
            MyEcommerce
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible part of the navbar */}
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link className="nav-link" to={item.path} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Products Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li key={category.path}>
                      <Link className="dropdown-item" to={category.path} onClick={() => setMenuOpen(false)}>
                        {category.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Cart Icon */}
              <li className="nav-item">
                <Link className="nav-link" to="/cart" onClick={() => setMenuOpen(false)}>
                  <FaShoppingCart /> Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavItems;
