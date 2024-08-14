import React from 'react';
import Logo from '../../entities/Logo/Logo';
import s from './Header.module.sass';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LocalizationSwitcher } from '../LocalizationSwitcher/LocalizationSwitcher';

const Header = () => {
  return (
    <header className={s['header']}>
      <Logo />
      <h3>Super store</h3>
      <div className={s['flexgrowdiv']} />
      <ThemeSwitcher />
      <LocalizationSwitcher />
    </header>
  );
};

export default Header;
