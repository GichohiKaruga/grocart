import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorys: Category[] = [];
  res: any;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              public productService: ProductService) { }

  ngOnInit(): void {
   this. getCategorys();
  }

  private getCategorys() {
    this.productService.getCaterorys().subscribe(
        response => {
          this.res = response;
          console.log(this.res);
          this.categorys = this.res;
        },
        error => {
          console.log('Error', error);
        }
    );
  }

}
