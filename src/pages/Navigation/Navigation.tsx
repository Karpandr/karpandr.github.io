import React, { FC, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ModalFormWrapper } from 'src/shared/windows/ModalFormWrapper/ModalFormWrapper';
import { ProductForm } from 'src/features/forms/ProductForm/ProductForm';
import s from './Navigation.module.sass';

const navigationItems = [
  { name: 'navigation.home', path: '/' },
  { name: 'navigation.profile', path: '/profile' },
  { name: 'navigation.cart', path: '/cart' },
  { name: 'navigation.product', path: '/product' },
];

export const Navigation: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const navigationModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsVisible(true);
  };

  return (
    <div className={s.root}>
      {navigationItems.map((i) => (
        <div className={s.navitem} key={i.name} onClick={() => navigate(i.path)}>
          {i.name === 'navigation.product' ? <div onClick={navigationModalClick}>{t(i.name)}</div> : t(i.name)}
        </div>
      ))}
      <ModalFormWrapper isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <ProductForm />
      </ModalFormWrapper>
    </div>
  );
};
