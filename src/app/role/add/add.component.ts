import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Role} from '../../model/role';
import {ActivatedRoute, Router} from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'] 
})
export class AddComponent implements OnInit {
  res: any = {};
  role: any = {};
  roleGroup: FormGroup;
  message = '';
  flashMsg: boolean;
  constructor(private http: HttpClient,
              public router: Router,
              public notificationServices: NotificationService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roleGroup = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
    });
  }

  private prepareSave(): Role {
    return new Role().deserialize(this.role);
  }


  sendToServer() {
    console.log('submit');
    const role = this.prepareSave();
    const name = this.roleGroup.controls['name'].value;
    const description = this.roleGroup.controls['description'].value; 
    const id = Math.floor(Math.random() * (2999 - 2005 + 1) + 2005);

    role.id = id.toString();
    role.name = name;
    role.description = description;

    const url = environment.APIEndpoint + '/user/addrole';


    const json = JSON.stringify(role);
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
              this.router.navigate(['/role']);
              this.notificationServices.showSuccess('Data  successfully !!', "saved successfully")

            }
  
        );
        this.flashMsg = !this.flashMsg;
        this.hideFlashMsg();
  }
  hideFlashMsg() {
    throw new Error("Method not implemented.");
  }

}
