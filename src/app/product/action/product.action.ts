import {createAction, props} from '@ngrx/store';
import {IProductFilter} from '../model/product-filter.model';

export const retrievedProductList = createAction('[Product Api] Retrieve Products', props<{
  productFilter: IProductFilter
}>());

export const retrievedProductById = createAction('[Product Api] Retrieve Product', props<{
  productId: number
}>);


