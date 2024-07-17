import React from 'react';
import Button from 'src/stories/Button';

interface SomeProductDetailsProps {
    price: number;
    image: string;
    title: string;
    description: string;

}

export default function SomeProductDetails({ price, image, title, description }: SomeProductDetailsProps) {
    return (
        <div>
            <img src={image} alt={title} />

            <p>{title}</p>
            <p>{description} </p>
            <p>{price}$</p>
            <Button label="Shop Now" />
        </div>
    )
}
