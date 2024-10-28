/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useEffect, useInsertionEffect } from 'react';
import { ProductCard } from 'src/entities/ProductCard/ProductCard';
import { useDispatch } from 'react-redux';
import { productsActions, useProductsSelector } from 'src/app/store/products';
import { useTokenSelector } from 'src/app/store/token';
import { getProducts } from 'src/entities/product/api/requests';
import s from './ProductList.module.sass';
import { getCategories } from 'src/entities/category';
import { categoriesActions } from 'src/app/store/categories';

const OBSERVER_CLASS_NAME = 'observer-product';

export const ProductList: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const products = useProductsSelector((state) => state.products.products);
  const pageNumber = useProductsSelector((state) => state.products.pageNumber);
  const token = useTokenSelector((state) => state.token);

  const getNextProducts = (token: string, pageNum: number) => {
    getProducts(token, {
      pagination: { pageNumber: pageNum, pageSize: 10 },
      sorting: { type: 'ASC', field: 'id' },
    }).then((response) => {
      if (response.data.length > 0) dispatch(productsActions.addNext(response));
    });
  };

  useInsertionEffect(() => {
    getNextProducts(token, 1);
    getCategories(token).then((response) => {
      dispatch(categoriesActions.setCategories(response.data));
    });
  }, [token]);

  const observerCalback = (entries: IntersectionObserverEntry[]) => {
    for (const { isIntersecting } of entries) {
      if (isIntersecting) {
        getNextProducts(token, pageNumber + 1);
        break;
      }
    }
  };

  useEffect(() => {
    const cards = document.getElementsByClassName(OBSERVER_CLASS_NAME);
    const lastCardObserver = new IntersectionObserver(observerCalback, {});
    if (cards?.length > 0) lastCardObserver.observe(cards[cards.length - 1]);
  }, [products.length, pageNumber]);

  return (
    <div className={s.root}>
      {products?.length > 0 &&
        products.map(({ id, name, photo, desc, price, oldPrice, category }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              name={name}
              photo={photo}
              price={price}
              oldPrice={oldPrice}
              desc={desc}
              category={category}
              observerClassName={OBSERVER_CLASS_NAME}
            />
          );
        })}
    </div>
  );
};

export default ProductList;
