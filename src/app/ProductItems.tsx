import React from 'react';

interface ProductItemsProps {
  price: number; // Assuming price is a number
  image: string; // Assuming image is a string URL
  title: string; // Assuming title is a string
  description: string; // Assuming description is a string
}

const ProductItems = ({ price, image, title, description }: ProductItemsProps) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductItems;
