import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffect} from './state/product.effect';
import {StoreModule} from '@ngrx/store';
import {productCollectionReducer} from './state/product.reducer';
import {CardModule} from 'primeng/card';
import {StyleClassModule} from 'primeng/styleclass';
import {ProgressSpinnerModule} from 'primeng/progressspinner';



@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductListItemComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    EffectsModule.forFeature([ProductEffect]),
    StoreModule.forFeature('productModule', productCollectionReducer),
    CardModule,
    StyleClassModule,
    ProgressSpinnerModule,
  ],
})
export class ProductModule { }
