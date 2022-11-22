import {IProduct} from '../model/product.model';
import {createReducer, on} from '@ngrx/store';
import {retrievedProductList} from '../action/product.action';

export const initialState: ReadonlyArray<IProduct> = [];

export const productCollectionReducer = createReducer(
  initialState,
  on(retrievedProductList, (state, {productFilter}) => {

    return [];
  })
  );
