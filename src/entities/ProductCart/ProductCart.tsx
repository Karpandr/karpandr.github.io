import React, { useState, useEffect } from 'react';
import s from './ProductCart.module.sass';
import Basket from '../Basket/Basket';
import { Category } from '../ProductCard/types';
import cn from 'clsx';

interface ProductCartProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: Category;
  count: number;
  onCountChange(id: string, count: number): void;
}

export const ProductCart = ({ id, name, price, image, description, onCountChange, count }: ProductCartProps) => {
  const [countProduct, setCountProduct] = useState<number>(count);
  useEffect(() => onCountChange(id, countProduct), [countProduct]);

  return (
    <div className={cn(s['product-card'])}>
      <img src={image} alt={name} className={s['product-card__image']} />
      <p>{name}</p>
      <p className={s['product-card__description']}>{description}</p>
      <p>{price}$</p>
      <Basket
        count={countProduct}
        productId={id}
        onIncrease={() => setCountProduct(countProduct + 1)}
        onDecrease={() => setCountProduct(countProduct ? countProduct - 1 : countProduct)}
      />
    </div>
  );
};
