import {createAction, props} from '@ngrx/store';
import {IProductFilter} from '../model/product-filter.model';
import {ApiResponse} from '../model/product.api.model';

export const retrievedProductList = createAction('[Product Api] Retrieve Products Filter', props<{
  productFilter: IProductFilter
}>());

export const retrievedProductById = createAction('[Product Api] Retrieve Product Filter', props<{
  productId: number
}>());

export const onSuccess = createAction('[Product Api] On Success Api Call', props<{data: ApiResponse}>());

export const onFailed = createAction('[Product Api] On Failed Api Call', props<{error: any}>());


