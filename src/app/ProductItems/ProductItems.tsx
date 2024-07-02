import React from 'react';
import s from "./ProductItems.module.sass"

interface ProductItemsProps {
  price: number; // Assuming price is a number
  image: string; // Assuming image is a string URL
  title: string; // Assuming title is a string
  description: string; // Assuming description is a string
}

const ProductItems = ({ price, image, title, description }: ProductItemsProps) => {
  return (
    <div className={s['product-items']}>
      <img src={image} alt={title} className={s['product-items__image']} />
      <p>{title}</p>
      <p className={s['product-items__description']}>{description}
      </p>
      <p>{price}$</p>
      <button>Add To Basket</button>
    </div>
  );
};

export default ProductItems;
