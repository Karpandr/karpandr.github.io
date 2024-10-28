import { IPagination, ISorting } from 'src/shared/api/types';

export interface ICategory {
  id: string;
  name: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
  commandId: string;
}

export interface IProduct {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: Date;
  updatedAt: Date;
  oldPrice?: number;
  price: number;
  commandId: string;
  category: ICategory;
}

// Ответ сервера - продукты
export interface TProductRaw {
  data: IProduct[];
  pagination: IPagination;
  sorting: ISorting;
}

// Добавление нового товара
export interface TAddProductParams {
  name: string;
  photo?: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId: string;
}

// Обновление существующего товара
export interface TUpdateProductParams {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: Date;
  updatedAt: Date;
  oldPrice?: number;
  price: number;
  commandId: string;
  categoryId: string;
}

// Ответ сервера - Категории
export interface TCategoryRaw {
  data: ICategory[];
  pagination: IPagination;
  sorting: ISorting;
}
