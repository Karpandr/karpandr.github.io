import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './Basket.module.sass';

interface BasketProps {
  productId: string;
  count: number;
  onIncrease?: (id: string) => void;
  onDecrease?: (id: string) => void;
}

const Basket = ({ count, productId, onIncrease, onDecrease }: BasketProps) => {
  const { t } = useTranslation();

  return (
    <div>
      {count === 0 ? (
        <button className={s.root} onClick={() => onIncrease(productId)}>{t`components.Basket.title`}</button>
      ) : (
        <div>
          <button onClick={() => onDecrease(productId)}>-</button>
          <input type="text" value={count} readOnly />
          <button onClick={() => onIncrease(productId)}>+</button>
        </div>
      )}
    </div>
  );
};

export default Basket;
