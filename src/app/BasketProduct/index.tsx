import React from 'react';
import styles from './BasketProducts.module.sass';

export default function BasketProduct() {
    return (
        <div className={styles.basketProduct}>
        <button className={styles.deleteButton}>Delete</button>
    </div>
    )
}
