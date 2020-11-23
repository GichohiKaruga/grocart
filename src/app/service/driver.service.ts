import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Driver} from '../model/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {


  constructor(private http: HttpClient) { }

  getDrivers(){
    return this.http.get<Driver[]>(`${environment.APIEndpoint}/drivers/all`);
  }

  getDriverById(id: string){
    return this.http.get<Driver[]>(`${environment.APIEndpoint}/drivers/id/` + id);
  }


}
