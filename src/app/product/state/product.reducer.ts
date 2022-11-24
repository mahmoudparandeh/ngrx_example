import {createReducer, on} from '@ngrx/store';
import { onSuccess} from './product.action';
import {ApiResponse} from '../model/product.api.model';

export const initialState: ApiResponse = {
  error: '',
  status: '',
  logId: '',
  dataStruct: '',
  data: {
    list: [],
    pageCount: 0,
    total: 0,
  }
}

export const productCollectionReducer = createReducer(
  initialState,
  on(onSuccess, (_, action) => action.data),
);
