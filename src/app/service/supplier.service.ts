import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Supplier } from '../model/supplier';
import { Services } from '../model/services';
import {Orgitem} from '../model/orgitem';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {


  constructor(private http: HttpClient) { }

  getSuppliers(){
    return this.http.get<Supplier[]>(`${environment.APIEndpoint}/supplier/all`);
  }

  getSuppliersByCategory(category: string){
    return this.http.get<Supplier[]>(`${environment.APIEndpoint}/supplier/category/` + category);
  }

  getSupplierById(id: string){
    return this.http.get<Supplier[]>(`${environment.APIEndpoint}/supplier/id/` + id);
  }

  getSuppliersByCategoryAndItem(category: string, item: string){
    return this.http.get<Supplier[]>(`${environment.APIEndpoint}/supplier/category/` + category + '/item/' + item);
  }



  getItems(id: string){
    return this.http.get<Orgitem[]>(`${environment.APIEndpoint}/supplier/item/id/` + id);

  }

  getCountries(){
    return this.http.get<Services[]>(`${environment.APIEndpoint}/location/countries`);

  }
  getFarmers(){
    return this.http.get<Services[]>(`${environment.APIEndpoint}/farms/farmer/all`);

   }
  getProducts(){
    return this.http.get<Services[]>(`${environment.APIEndpoint}/farms/products/`);
   }
   getFarms(){
    return this.http.get<Services[]>(`${environment.APIEndpoint}/farms/all`);
   }

}
