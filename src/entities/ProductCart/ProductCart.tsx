/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import cn from 'clsx';
import Basket from '../Basket/Basket';
import { Category, ProductInCart } from '../ProductCard/types';
import { useDispatch } from 'react-redux';
import { cartActions } from 'src/app/store/cart';
import s from './ProductCart.module.sass';

interface ProductCartProps {
  id: string;
  name: string;
  price: number;
  photo: string;
  desc: string;
  category: Category;
  count: number;
}

export const ProductCart = ({ id, name, price, photo, desc, count }: ProductCartProps) => {
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(cartActions.addProduct({ id, price, photo, name, desc, count: count + 1 } as ProductInCart));
  };

  const onDecrease = () => {
    dispatch(
      cartActions.addProduct({ id, price, photo, name, desc, count: count ? count - 1 : count } as ProductInCart)
    );
  };

  const onDeleteClick = () => {
    dispatch(cartActions.delProduct(id));
  };

  return (
    <div className={cn(s['product-card'])}>
      <img src={photo} alt={name} className={s['product-card__image']} />
      <p>{name}</p>
      <p className={s['product-card__description']}>{desc}</p>
      <p>{price}&#8381;</p>
      <Basket count={count} onIncrease={onIncrease} onDecrease={onDecrease} onDeleteClick={onDeleteClick} />
    </div>
  );
};
