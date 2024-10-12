import React from 'react';
import s from './Layout.module.sass';
import ProductList from 'src/entities/ProductList/ProductList';
import Header from 'src/widgets/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div className={s.layout}>
        <ProductList />
      </div>
    </>
  );
};

export default Layout;
