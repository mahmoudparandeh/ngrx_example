import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApiResponse} from '../model/product.api.model';
import {retrievedProductList} from '../state/product.action';
import {getProducts} from '../state/product.select';
import {IProduct} from '../model/product.model';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.sass'],
})
export class ProductListPageComponent implements OnInit{
  products: IProduct[] = [];
  total = 0;
  loading = false;
  constructor(private store: Store<ApiResponse>) {
    this.store.select(getProducts).subscribe((response: ApiResponse | any) => {
      this.loading = response.status === '';
      this.products = response.data.list;
      this.total = response.data.total;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(retrievedProductList({productFilter: {
        page: 1,
        pageSize: 20,
      }}));
  }


}
