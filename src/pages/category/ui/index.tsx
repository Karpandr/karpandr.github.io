import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CategoryForm, createCategory } from '@entities/category';
import { ICategoryFormValues, CategoryFormActions } from 'src/entities/category';
import { useTokenSelector } from 'src/app/store/token';
import s from './styles.module.sass';

export const CategoryPage: FC = () => {
  const { t } = useTranslation();
  const token = useTokenSelector((state) => state.token);

  const onCreateCategory = async (values: ICategoryFormValues, actions: CategoryFormActions<ICategoryFormValues>) => {
    try {
      await createCategory(token, values);
    } catch (error) {
      actions.setErrors({ name: t(`errors.${error.code}`) });
    }
  };

  return (
    <div className={s.root}>
      <div>
        <h4>{t('forms.CategoryForm.create.headerTitle')}</h4>
        <CategoryForm
          onFormSubmit={onCreateCategory}
          submitButtonCaption={t('forms.CategoryForm.create.buttonTitle')}
        />
      </div>
    </div>
  );
};
