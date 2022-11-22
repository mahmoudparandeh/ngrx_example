import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProductFilter} from './model/product-filter.model';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://service.gtasilver.com/api/v1/client/product';
  constructor(private httpClient: HttpClient) {}

  getProducts(productFilter: IProductFilter): Observable<any> {
    let query = '?';
    if (productFilter.page) {
      query += 'page=' + productFilter.page + '&';
    }
    if (productFilter.pageSize) {
      query += 'pageSize=' + productFilter.pageSize + '&';
    }
    if (productFilter.brandId) {
      query += 'brandId=' + productFilter.brandId + '&';
    }
    if (productFilter.categoryId) {
      query += 'categoryId=' + productFilter.categoryId + '&';
    }
    if (productFilter.categoryId) {
      query += 'search=' + productFilter.searchByName;
    }

    return this.httpClient.get(this.baseUrl + query).pipe(map(response => ));
  }
}
