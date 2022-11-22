import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';


@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductListItemComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
