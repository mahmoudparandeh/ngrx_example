import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductService} from '../product.service';
import {mergeMap, map} from 'rxjs';
import { onSuccess} from './product.action';
import {ApiResponse} from '../model/product.api.model';

@Injectable()
export class ProductEffect {
  getProductsEffects = createEffect(() => this.action.pipe(
    ofType('[Product Api] Retrieve Products Filter'),
    mergeMap((action: any) => {
      return this.productService.getProducts(action.productFilter).pipe(
        map((response: any) => {
          return onSuccess({data: response}) })
      )
    })
  ));
  constructor(private action: Actions, private productService: ProductService) {
  }
}
