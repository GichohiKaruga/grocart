import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  categoryGroup: FormGroup;
  res: any;
  constructor(private http: HttpClient,
              public router: Router) { }

  ngOnInit(): void {
    this.categoryGroup = new FormGroup({
      name: new FormControl(),
      id: new FormControl()
    });
  }

  sendToServer() {
    console.log('submit');
    const name = this.categoryGroup.controls['name'].value;
    const id = this.categoryGroup.controls['id'].value;

    let category = new Category();
    category.name = name;
    category.id = id;

    const json = JSON.stringify(category);

    console.log(json);

    const url = environment.APIItemEndpoint + '/addcategory';

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
              ;this.router.navigate(['/products/category']);
            }
        );

  }

}
