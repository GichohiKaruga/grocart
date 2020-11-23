import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../service/user.service';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  res: any = {};

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              public productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.productService.getProducts().subscribe(
        response => {
          this.res = response;
          console.log(this.res);
          this.products = this.res;
        },
        error => {
          console.log('Error', error);
        }
    );
  }

}
