import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Locality} from '../../model/locality';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {Supplier} from '../../model/supplier';
import {Country} from '../../model/country';
import {Item} from '../../model/item';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    supplierGroup: FormGroup;
    res: any;
    items: Item[] = [];
    countries: Country[] = [];
    fileList: FileList;
    images = [];
    files: string [] = [];



    constructor(private http: HttpClient,
                public router: Router,
                private route: ActivatedRoute,
                public userService: UserService) {
    }

    ngOnInit(): void {
        this.getItems();
        this.supplierGroup = new FormGroup({
            name: new FormControl(),
            phone: new FormControl(),
            email: new FormControl(),
            items: new FormControl(),
            country: new FormControl(),
            region: new FormControl(),
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


    sendToServer() {
        console.log('submit');

        const name = this.supplierGroup.controls['name'].value;
        const phone = this.supplierGroup.controls['phone'].value;
        const email = this.supplierGroup.controls['email'].value;
        const region = this.supplierGroup.controls['region'].value;
        const supplier = new Supplier();
        const rand = Math.floor((Math.random() * 1001) + 9999);
        console.log(rand);
        supplier.id = rand + '';
        supplier.name = name;
        supplier.phone = phone;
        supplier.email = email;
        let location = new Locality();
        location.country = 'Kenya';
        location.region = region;
        supplier.location = location;
        const json = JSON.stringify(supplier);


        const url = environment.APIUserEndpoint + '/createbusiness';

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
                    console.log(res);
                    ;this.router.navigate(['/supplier']);
                }
            );

    }

    getItems() {

    }

    onFileChange(event) {

        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                    // console.log(event.target.result);
                    this.images.push(event.target.result);
                    this.supplierGroup.patchValue({
                        fileSource: this.images
                    });

                }
                reader.readAsDataURL(event.target.files[i]);
            }
            this.fileList = event.target.files;
        }
    }


    onFileSelected() {
        const inputNode: any = document.querySelector('#file');

        if (typeof (FileReader) !== 'undefined') {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                //  this.srcResult = e.target.result;
            };

            reader.readAsArrayBuffer(inputNode.files[0]);
        }
    }


}
