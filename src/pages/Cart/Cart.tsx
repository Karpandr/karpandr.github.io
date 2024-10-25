import React, { useEffect, useState } from 'react';
import { ProductInCart } from 'src/entities/ProductCard/types';
import { ProductCart } from 'src/entities/ProductCart/ProductCart';
import { useSelector } from 'react-redux';
import { useTokenSelector } from 'src/app/store/token';
import { RootState } from 'src/app/store/store';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/button';
import { createOrder } from 'src/entities/order';
import s from './Cart.module.sass';

export const Cart = () => {
  const { t } = useTranslation();
  const token = useTokenSelector((state) => state.token);
  const [totalPrice, setTotalPrice] = useState(0);
  const cartProducts = useSelector<RootState, RootState['cart']>((state) => state.cart);

  useEffect(() => {
    let sum = 0;
    cartProducts.forEach((product) => {
      sum = sum + product.price * product.count;
    });
    setTotalPrice(sum);
  }, [cartProducts]);

  const getOrderArrayFromCart = () => {
    return cartProducts.map((product) => ({
      id: product.id,
      quantity: product.count,
    }));
  };

  const onOrderClick = async () => {
    try {
      await createOrder(token, { products: getOrderArrayFromCart() });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.root}>
      <div className={s.products}>
        {cartProducts.map((p: ProductInCart) => {
          return (
            <ProductCart
              id={p.id}
              key={p.id}
              name={p.name}
              photo={p.photo}
              price={p.price}
              desc={p.desc}
              category={p.category}
              count={p.count}
            />
          );
        })}
      </div>
      <div className={s.footer}>
        <span className={s['total-price']}>Total price: {totalPrice}</span>
        <Button type="button" onClick={onOrderClick} disabled={cartProducts?.length === 0}>
          {t('pages.Cart.OrderButtonTitle')}
        </Button>
      </div>
    </div>
  );
};
