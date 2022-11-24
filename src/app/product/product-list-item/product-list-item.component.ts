import {Component, Input, ViewEncapsulation} from '@angular/core';
import {IProduct} from '../model/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListItemComponent {
  @Input() product!: IProduct;
}
