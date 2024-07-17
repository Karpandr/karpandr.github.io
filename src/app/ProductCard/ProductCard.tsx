import React from 'react';
import s from './ProductCard.module.sass';
import Basket from '../Basket/Basket';



interface ProductCardProps {
  price: number; // Assuming price is a number
  image: string; // Assuming image is a string URL
  title: string; // Assuming title is a string
  description: string; // Assuming description is a string
}

const ProductCard = ({ price, image, title, description }: ProductCardProps) => {
  return (
    <div className={s['product-card']}>
      <img src={image} alt={title} className={s['product-card__image']} />
      <p>{title}</p>
      <p className={s['product-card__description']}>{description}
      </p>
      <p>{price}$</p>
      <Basket count={0} />
    </div>
  );
};

export default ProductCard;
