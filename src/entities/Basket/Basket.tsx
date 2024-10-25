import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/button';
import cn from 'clsx';
import s from './Basket.module.sass';

interface BasketProps {
  count: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onDeleteClick?: () => void;
}

const Basket = ({ count, onIncrease, onDecrease, onDeleteClick }: BasketProps) => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      {count === 0 ? (
        <button className={s.button} onClick={onIncrease}>{t`components.Basket.toCart`}</button>
      ) : (
        <>
          <div className={s['input-group']}>
            <button className={cn(s['value-button'], s.increment)} onClick={onDecrease}>
              -
            </button>
            <input className={s.input} type="text" value={count} readOnly />
            <button className={cn(s['value-button'], s.decrement)} onClick={onIncrease}>
              +
            </button>
          </div>
          <button className={s.button} onClick={onDeleteClick}>{t`components.Basket.deleteFromCart`}</button>
        </>
      )}
    </div>
  );
};

export default Basket;
