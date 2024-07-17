import React from 'react';

interface OperationSummaryProps {
    amount: number;
    category: string;
    title: string;
    description: string;
};


export default function OperationSummary({ amount, category, title, description }: OperationSummaryProps) {
    return (
        <div>
            <h1>{category}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{amount}</p>

        </div>
    )
}
