import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffect} from './product/state/product.effect';
import {StoreModule} from '@ngrx/store';
import {productCollectionReducer} from './product/state/product.reducer';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductEffect]),
    StoreModule.forRoot([productCollectionReducer]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
