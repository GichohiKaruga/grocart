import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  productGroup: FormGroup;
  categorys: Category[] = [];
  res: any;

  constructor(private http: HttpClient,
              public router: Router,
              public productService: ProductService) { }

  ngOnInit(): void {
    this.productGroup = new FormGroup({
      name: new FormControl(),
      unit: new FormControl(),
      currency: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
    });

    this.getProducts();
  }

  sendToServer() {
    console.log('submit');
    const name = this.productGroup.controls['name'].value;
    const description = this.productGroup.controls['description'].value;
    const category = this.productGroup.controls['category'].value;

    let product = new Product();
    product.name = name;
    product.description = description;
    product.category = category;

    const json = JSON.stringify(product);

    console.log(json);

    const url = environment.APIItemEndpoint + '/additem';

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
              ;this.router.navigate(['/products']);
            }
        );

  }

  getProducts() {
    this.productService.getCaterorys().subscribe(
        response => {
          this.res = response;
          // console.log(this.res);
          this.categorys = this.res;
        },
        error => {
          console.log('Error', error);
        }
    );
  }

}
