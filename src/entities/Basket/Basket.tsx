import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'clsx';
import { MdOutlineBorderColor, MdOutlineDeleteForever } from 'react-icons/md';
import s from './Basket.module.sass';

interface BasketProps {
  count: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onDeleteClick?: () => void;
  onUpdateClick?: () => void;
}

const Basket = ({ count, onIncrease, onDecrease, onDeleteClick, onUpdateClick }: BasketProps) => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      {count === 0 ? (
        <div className={s['button-group']}>
          <button className={s.button} onClick={onUpdateClick}>
            <MdOutlineBorderColor />
          </button>
          <button className={s.button} onClick={onIncrease}>{t`components.Basket.toCart`}</button>
        </div>
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
          <button className={s.button} onClick={onDeleteClick}>
            <MdOutlineDeleteForever />{' '}
          </button>
        </>
      )}
    </div>
  );
};

export default Basket;
