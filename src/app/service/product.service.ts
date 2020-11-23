import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getProducts() {
    return this.http.get<Product[]>(`${environment.APIItemEndpoint}/product/all`);
  }

  getCaterorys() {
    return this.http.get<Category[]>(`${environment.APIItemEndpoint}/category/all`);
  }

  getProductsById(id: string) {
    return this.http.get<Product>(`${environment.APIItemEndpoint}/product/item/id/` + id);
  }

}
