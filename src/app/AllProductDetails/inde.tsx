import React from 'react'
import Button from 'src/stories/Button';

interface AllProductDetailsProps {
    price: number;
    image: string;
    category: string;
    title: string;
    description: string;

}


export default function AllProductDetails({ price, image, category, title, description }: AllProductDetailsProps) {
    return (
        <div>
            <img src={image} alt={title} />
            <h1>{category}</h1>
            <p>{title}</p>
            <p>{description} </p>
            <p>{price}$</p>
            <Button label="Shop Now" />
        </div>
    )
};


