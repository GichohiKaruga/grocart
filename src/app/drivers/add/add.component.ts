import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {Locality} from '../../model/locality';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Driver} from '../../model/driver';
import {Country} from '../../model/country';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    res: any;
    countries: Country[] = [];
    photo: FormControl;
    files: string [] = [];
    multiple: boolean = true;
    images = [];
    fileList: FileList;


    constructor(private http: HttpClient,
                public router: Router,
                private route: ActivatedRoute,
                public userService: UserService) {
    }

    driverGroup = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        items: new FormControl(),
        country: new FormControl(),
        region: new FormControl(),
        territory: new FormControl(),
        description: new FormControl(),
        size: new FormControl(),
        zone: new FormControl(),
        image: new FormControl('', [Validators.required])
    });

    onFileChange(event) {

        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                    // console.log(event.target.result);
                    this.images.push(event.target.result);
                    this.driverGroup.patchValue({
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

    get f() {
        return this.driverGroup.controls;
    }

    ngOnInit(): void {
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
        const id = this.driverGroup.controls['id'].value;
        const name = this.driverGroup.controls['name'].value;
        const description = this.driverGroup.controls['description'].value;
        const size = this.driverGroup.controls['size'].value;
        const items = this.driverGroup.controls['items'].value;
        const country = this.driverGroup.controls['country'].value;
        const region = this.driverGroup.controls['region'].value;
        const territory = this.driverGroup.controls['territory'].value;
        const zone = this.driverGroup.controls['zone'].value;
        const driver = new Driver();
        driver.name = name;
        driver.description = description;
        driver.id = id;
        const loc = new Locality();
        loc.country = country;
        loc.region = region;
        loc.territory = territory;
        loc.zone = zone;
        driver.location = loc;



        const json = JSON.stringify(driver);

        const url = environment.APIEndpoint + '/drivers/add';

        let formData:FormData = new FormData();
        this.fileList.length;
        for (let i = 0; i < this.fileList.length; i++) {
            let file: File = this.fileList[i];
            formData.append('photo', file, file.name);
        }

        formData.append('data',json);


        console.log(json);

        const headers = new HttpHeaders()
            .set("Content-Type", "multipart/form-data");

        this.http.post(url, formData)
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
                    ;this.router.navigate(['/farms']);
                }
            );
    }

}
