import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {Locality} from '../../model/locality';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {Role} from '../../model/role';
import {Country} from '../../model/country';
import {Supplier} from '../../model/supplier';
import {SupplierService} from '../../service/supplier.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    user: User;
    private role: Role;
    roles: Role[] = [];
    suppliers: Supplier[] = [];
    userGroup: FormGroup;
    res: any = {};
    genders: any[] = [
        {name: 'Male'},
        {name: 'Female'},
    ];

    userid: string;

    constructor(private http: HttpClient,
                public router: Router,
                private route: ActivatedRoute,
                public userService: UserService,
                public supplierService: SupplierService) {
    }

    ngOnInit(): void {
        this.getRoles();
        this.getSuppliers();
        this.userGroup = new FormGroup({
            role: new FormControl(),
            firstname: new FormControl(),
            lastname: new FormControl(),
            email: new FormControl(),
            password: new FormControl(),
            gender: new FormControl()
        });
        this.userid = this.route.snapshot.paramMap.get('id');
        console.log(this.userid);
        this.getUser(this.userid);

        this.userGroup.controls['lastname'].setValue(this.user.lastname);
        this.userGroup.controls['firstname'].setValue(this.user.firstname);
    }

    private getRoles() {
        this.userService.getRoles().subscribe(
            response => {
                this.res = response;
                console.log(this.res);
                this.roles = this.res;
            },
            error => {
                console.log('Error', error);
            }
        );
    }

    private getUser(id: string) {
        this.userService.getUserById(id).subscribe(
            response => {
                this.res = response;
                console.log(this.res);
                this.user = this.res;
            },
            error => {
                console.log('Error', error);
            }
        );
    }

    private prepareSave(): User {
        return new User().deserialize(this.user);
    }

    private getSuppliers() {
        this.supplierService.getSuppliers().subscribe(
            response => {
                this.res = response;
                console.log(this.res);
                this.suppliers = this.res;
            },
            error => {
                console.log('Error', error);
            }
        );
    }

    sendToServer() {
        console.log('submit');
        const loc = new Locality();
        loc.countrycode = 'KE';
        loc.region = 'Nairobi';
        loc.country = 'Kenya';
        const useroles: string[] = [];


        const user = this.prepareSave();
        const role = this.userGroup.controls['role'].value;
        const firstname = this.userGroup.controls['firstname'].value;
        const lastname = this.userGroup.controls['lastname'].value;
        const password = this.userGroup.controls['password'].value;
        const email = this.userGroup.controls['email'].value;
        const gender = this.userGroup.controls['gender'].value;
        useroles.push(role);
        user.userid = this.userid;
        user.country = loc;
        user.firstname = firstname;
        user.phone = '';
        user.lastname = lastname;
        user.email = email;
        user.roles = useroles;
        user.gender = gender;
        user.password = password;

        const url = environment.APIEndpoint + '/user/updateuser';


        const json = JSON.stringify(user);
        console.log(json);
        this.http.post(url, json)
            .pipe(
                catchError(
                    (error: any, caught: Observable<HttpEvent<any>>) => {
                        throw error;
                    }
                ),
            )
            .subscribe(
                res => {
                    this.res = res;
                    this.router.navigate(['/user']);
                }
            );
    }

}
