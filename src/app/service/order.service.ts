import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Product} from '../model/product';
import {Category} from '../model/category';
import {Order} from '../model/order';
import {Orderitem} from '../model/orderitem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  getOrders() {
    return this.http.get<Order[]>(`${environment.APIEndpoint}/order/all`);
  }

  getOrdersById(id: string) {
    return this.http.get<Orderitem[]>(`${environment.APIEndpoint}/order/id/` + id);
  }

  getOrdersByOrganization(id: string) {
    return this.http.get<Order[]>(`${environment.APIItemEndpoint}/organization/id/` + id);
  }

}
