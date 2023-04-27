import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { CgProfile } from 'react-icons/cg';

export default function Navigation() {
  return (
    <nav className="nav-bar d-flex">
      <a className="nav-brand" href="#/">Bookstore CMS</a>
      <ul className="nav-list d-flex">
        <li><Link to="/">Books</Link></li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
      <button type="button" className="icon-button">
        <span className="material-icons primary-color"><CgProfile className="profile" /></span>
      </button>
    </nav>
  );
}
