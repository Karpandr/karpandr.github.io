import React from 'react';

interface OperationDetailsProps {
    amount: number;
    category: string;
    title: string;
    description: string;
    date: string;
};

export default function OperationDetails({ amount, category, title, description, date }: OperationDetailsProps) {
    return (
        <div>
            <h1>{category}</h1>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{description}</p>
            <p>{amount}</p>

        </div>
    )
}
