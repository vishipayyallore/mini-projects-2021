import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopNavbar = ({ icon, title }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark top-navbar-color py-0">
        <Link to="/" className="navbar-brand"><i className="fa fa-book" aria-hidden="true"></i> Book Store</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/list-books'>Books</Link>
          </li>
          <li className="nav-item">
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

TopNavbar.defaultProps = {
  title: 'Book Stores',
  icon: 'fa fa-book'
};

TopNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default TopNavbar;
