import React from 'react'
import Button from 'src/stories/Button';
import s from "./Product.module.sass"

export interface ProductProps {
    price: number;
    images: string[];
    category: string;
    title: string;
    description: string;

}


export default function Product({ price, images, category, title, description }: ProductProps) {
    return (
        <div className={s.container}>
            <img src={images[0]} alt={title} />
            <h1>{category}</h1>
            <p>{title}</p>
            <p>{description} </p>
            <p>{price}$</p>
            <Button label="Shop Now" />
        </div>
    )
};


