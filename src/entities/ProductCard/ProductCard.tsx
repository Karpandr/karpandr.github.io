import React, { useState } from 'react';
import cn from 'clsx';
import Basket from '../Basket/Basket';
import { Category, ProductInCart } from './types';
import { useDispatch } from 'react-redux';
import { cartActions } from 'src/app/store/cart';
import { useTranslation } from 'react-i18next';
import s from './ProductCard.module.sass';
import { IProductFormValues, ProductForm, ProductFormActions, updateProduct } from '../product';
import { useCategoriesSelector } from 'src/app/store/categories';
import { useTokenSelector } from 'src/app/store/token';
import { ModalFormWrapper } from 'src/shared/windows/ModalFormWrapper/ModalFormWrapper';

interface IProductCardProps {
  id: string;
  price: number;
  oldPrice: number;
  photo: string;
  name: string;
  desc: string;
  category: Category;
  observerClassName: string;
}

export const ProductCard = ({
  observerClassName,
  id,
  price,
  oldPrice,
  photo,
  name,
  desc,
  category,
}: IProductCardProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const categories = useCategoriesSelector((state) => state.categories);
  const token = useTokenSelector((state) => state.token);

  const onIncrease = () => {
    setCount(count + 1);
    dispatch(
      cartActions.addProduct({
        id,
        price,
        photo,
        name,
        desc,
        count: count + 1,
      } as ProductInCart)
    );
  };

  const onDecrease = () => {
    setCount(count ? count - 1 : count);
    dispatch(
      cartActions.addProduct({
        id,
        price,
        photo,
        name,
        desc,
        count: count ? count - 1 : count,
      } as ProductInCart)
    );
  };

  const onDeleteClick = () => {
    setCount(0);
    dispatch(cartActions.delProduct(id));
  };

  const onUpdateClick = () => {
    setIsVisible(true);
  };

  const onCloseModal = () => {
    setIsVisible(false);
  };

  const onUpdateProductSubmit = async (values: IProductFormValues, actions: ProductFormActions<IProductFormValues>) => {
    try {
      await updateProduct(token, id, values);
    } catch (error) {
      actions.setErrors({ name: t(`errors.${error.code}`) });
    }
  };

  return (
    <>
      <ModalFormWrapper isVisible={isVisible} onClose={onCloseModal}>
        <h4>{t('forms.ProductForm.actions.update.headerTitle')}</h4>
        <ProductForm
          categories={categories}
          onFormSubmit={onUpdateProductSubmit}
          submitButtonCaption={t('forms.ProductForm.actions.update.buttonTitle')}
          price={price}
          photo={photo}
          name={name}
          desc={desc}
          categoryId={category.id}
          oldPrice={oldPrice}
        />
      </ModalFormWrapper>
      <div className={cn(observerClassName, s['product-card'])}>
        <img src={photo} alt={name} className={s['product-card__image']} />
        <p>{name}</p>
        <p className={s['product-card__description']}>{desc}</p>
        <p>{price}&#8381;</p>
        <Basket
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onDeleteClick={onDeleteClick}
          onUpdateClick={onUpdateClick}
        />
      </div>
    </>
  );
};
