import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ApiResponse} from '../model/product.api.model';

export const selectProductsState = createFeatureSelector<ApiResponse>('productModule');

export const getProducts = createSelector(
  selectProductsState,
  (response: ApiResponse) => response
);
