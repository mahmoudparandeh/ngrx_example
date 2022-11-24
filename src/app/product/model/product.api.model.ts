import {IProduct} from './product.model';

export interface ApiResponse {
  dataStruct: any;
  logId: any;
  status: string;
  error: any;
  data: ListProduct | IProduct;
}

export interface ListProduct {
  list: IProduct[];
  pageCount: number;
  total: number;
}
