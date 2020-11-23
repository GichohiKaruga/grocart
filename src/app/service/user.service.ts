import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {Role} from '../model/role';
import { Locality } from '../model/locality';
import { Services } from '../model/services';
import { Group } from '../model/group';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  upload(formData: FormData) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  getUserById(id: any) {
    return this.http.get<User[]>(`${environment.APIUserEndpoint}/userid/id/` + id);
  }

  getAll() {
    return this.http.get<User[]>(`${environment.APIUserEndpoint}/users/all`);
  }

  getUserByBusiness(id: any) {
    return this.http.get<User[]>(`${environment.APIUserEndpoint}/users/business/` + id);
  }

  getUsersByRole(role: string) {
    return this.http.get<User[]>(`${environment.APIUserEndpoint}/users/role/` + role);
  }


  getRoles() {
    return this.http.get<Role[]>(`${environment.APIUserEndpoint}/roles/all`);
  }
  getGroups() {
    return this.http.get<Group[]>(`${environment.APIEndpoint}/organization/category`);
  }

  getLocation() {
    return this.http.get<Locality[]>(`${environment.APIEndpoint}/location/countries`);
  }


  getCountries(){
    return this.http.get<Services[]>(`${environment.APIEndpoint}/location/countries`);

  }

}
