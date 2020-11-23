import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {User} from '../model/user';


@Injectable()
export class AuthenticationService {
    [x: string]: any;

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private loginUser: any = {};

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const serverUrl = environment.APIUserEndpoint + '/login';
        localStorage.clear();
        console.log(username + ' : ' + password);
        return this.http.post<any>(serverUrl, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                console.log('User: ' + JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
    }
}
