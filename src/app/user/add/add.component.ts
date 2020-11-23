import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Role} from '../../model/role';

import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Locality} from '../../model/locality';
import {ToastrService} from 'ngx-toastr';
import {Country} from '../../model/country';
import {Supplier} from '../../model/supplier';
import {SupplierService} from '../../service/supplier.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    countries: Country[] = [];
    user: any = {};
    private role: Role;
    roles: Role[] = [];
    suppliers: Supplier[] = [];
    userGroup: FormGroup;
    res: any = {};
    message: string = 'Successfullyadded Role saved';
    genders = ['Male','Female'];

    constructor(private http: HttpClient,
                public router: Router,
                private route: ActivatedRoute,
                public supplierService: SupplierService,
                private toastr: ToastrService) {
    }

    ngOnInit() {
        this.getRoles();
        this.getSuppliers();
        this.userGroup = new FormGroup({
            roles: new FormControl(),
            firstname: new FormControl(),
            lastname: new FormControl(),
            phone: new FormControl(),
            email: new FormControl(),
            password: new FormControl(),
            gender: new FormControl(),
            country: new FormControl(),
            organization: new FormControl()
        });

        let countryone = new Country();
        countryone.code = 'KE';
        countryone.name = 'Kenya';
        let countrytwo = new Country();
        countrytwo.code = 'TZ';
        countrytwo.name = 'Tanzania';

        this.countries.push(countryone);
        this.countries.push(countrytwo);
    }


    private getRoles() {
        let role1 = new Role();
        role1.name = 'Administrator';
        role1.description = 'Admin User';
        let role2 = new Role();
        role2.name = 'Reviewer';
        role2.description = 'Review and editing';
        this.roles.push(role1);
        this.roles.push(role2);
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

    private prepareSave(): User {
        return new User().deserialize(this.user);
    }

    sendToServer() {
        console.log('submit');
        const loc = new Locality();
        loc.countrycode = 'KE';
        loc.region = 'Nairobi';
        loc.country = 'Kenya';
        const useroles: string[] = [];


        const user = new User();
        const roles = this.userGroup.controls['roles'].value;
        const firstname = this.userGroup.controls['firstname'].value;
        const organization = this.userGroup.controls['organization'].value;
        const lastname = this.userGroup.controls['lastname'].value;
        const password = this.userGroup.controls['password'].value;
        const email = this.userGroup.controls['email'].value;
        const phone = this.userGroup.controls['phone'].value;
        const gender = this.userGroup.controls['gender'].value;
        useroles.push(roles);
        user.country = loc;
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.phone = phone;
        user.roles = roles;
        user.gender = gender;
        user.businessid = organization;
        user.password = password;
        user.roles = useroles;

        const url = environment.APIUserEndpoint + '/createuser';
        console.log(roles);

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
                    this.toastr.success(this.message);
                }
            );


    }

}
