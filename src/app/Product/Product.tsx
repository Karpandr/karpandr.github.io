import React from 'react';
import Button from 'src/stories/Button';


export interface ProductProps {
    price: number;
    images: string[];
    category: string;
    title: string;
    description: string;
}


export default function Product({ price, images, category, title, description }: ProductProps) {
    return (
        <div>
            {images.map((image, index) => (<img key={index} src={image} alt={`${title} image ${index + 1}`} />))}
            <h1>{category}</h1>
            <p>{title}</p>
            <p>{description} </p>
            <p>{price}$</p>
            <Button label="Shop Now" />
        </div>
    )};


