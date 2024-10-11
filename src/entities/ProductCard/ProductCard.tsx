import React, { useState } from 'react';
import s from './ProductCard.module.sass';
import Basket from '../Basket/Basket';
import { Category } from './types';
import cn from 'clsx';

interface ProductCardProps {
  id: string;
  price: number;
  image: string;
  name: string;
  description: string;
  category: Category;
  observerClassName: string;
}

const ProductCard = ({ observerClassName, id, price, image, name, description }: ProductCardProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={cn(observerClassName, s['product-card'])}>
      <img src={image} alt={name} className={s['product-card__image']} />
      <p>{name}</p>
      <p className={s['product-card__description']}>{description}</p>
      <p>{price}$</p>
      <Basket
        count={count}
        productId={id}
        onIncrease={() => setCount(count + 1)}
        onDecrease={() => setCount(count ? count - 1 : count)}
      />
    </div>
  );
};

export default ProductCard;
