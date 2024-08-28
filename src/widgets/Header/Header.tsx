import React from 'react';
import Logo from '../../entities/Logo/Logo';
import s from './Header.module.sass';

const Header = () => {
  return (
    <header className={s['header']}>
      <Logo />
      <h3>Super store</h3>
    </header>
  );
};

export default Header;
