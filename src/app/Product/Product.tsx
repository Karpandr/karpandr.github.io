import React from 'react';
import s from './Product.module.sass';
import Basket from '../Basket/Basket';

interface ProductProps {
  price: number;
  images: string[];
  category: string;
  title: string;
  description: string;
}

const Product = ({ price, images, category, title, description }: ProductProps) => {
  return (
    <div className={s.container}>
      <img src={images[0]} alt={title} />
      <h1>{category}</h1>
      <p>{title}</p>
      <p>{description} </p>
      <p>{price}$</p>
      <Basket count={0} />
    </div>
  );
};

export default Product;
