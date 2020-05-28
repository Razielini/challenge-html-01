import React from 'react';
import '../styles/components/Header.styl';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <div className="Header-logo">
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/Razielini">TECHNOLOGY</a>
          </li>
          <li>
            <a href="https://github.com/Razielini">IDEAS</a>
          </li>
          <li>
            <a href="https://github.com/Razielini">VIDEO</a>
          </li>
          <li>
            <a href="https://github.com/Razielini">LEADERSHIP</a>
          </li>
          <li>
            <a href="https://github.com/Razielini">NEWS</a>
          </li>
          <li>
            <a href="https://github.com/Razielini">FINANCE</a>
          </li>
          <li>
            <a href="https://github.com/Razielini">ENTERTAINMENT</a>
          </li>
        </ul>
      </nav>
      <div>HAM</div>
    </header>
  );
};

export default Header;
