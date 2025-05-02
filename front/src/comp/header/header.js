import React from 'react';
import { Link } from 'react-router-dom'; // Используем Link для навигации
import './header.css';
function Header() {
  return (
    <header className="app-header">
      <Link className="logo"><img src = "logo.png"></img></Link>
      <nav className="navigation">
        <ul>
          <li><Link to="/lol">Link1</Link></li>
          <li><Link >Link1</Link></li>
          <li><Link >Link1</Link></li>
        </ul>
      </nav>
      <Link className="account"><i class="fas fa-user-circle"></i></Link>
    </header>
  );
}

export default Header;