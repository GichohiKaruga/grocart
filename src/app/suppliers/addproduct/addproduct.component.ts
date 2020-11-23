import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpEvent } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../service/product.service";
import {FormControl, FormGroup} from '@angular/forms';
import { Product } from "../../model/product";
import { environment } from "../../../environments/environment";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { Rowitem } from "../../model/rowitem";

@Component({
  selector: "app-addproduct",
  templateUrl: "./addproduct.component.html",
  styleUrls: ["./addproduct.component.css"]
})
export class AddproductComponent implements OnInit {
  id: string;
  productGroup: FormGroup;
  products: Product[] = [];
  res: any;
  currencys: string[] = ["KES", "TSH"];

  constructor(
    private http: HttpClient,
    public router: Router,
    private route: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getProducts();
    this.productGroup = new FormGroup({
      itemid: new FormControl(),
      currency: new FormControl(),
      unit: new FormControl(),
      price: new FormControl()
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.res = response;
        // console.log(this.res);
        this.products = this.res;
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  sendToServer() {
    console.log("submit");
    const id = this.id;
    const itemid = this.productGroup.controls["itemid"].value;
    const currency = this.productGroup.controls["currency"].value;
    const unit = this.productGroup.controls["unit"].value;
    const price = this.productGroup.controls["price"].value;

    let rowitem = new Rowitem();
    rowitem.id = id;
    rowitem.itemid = itemid;
    rowitem.currency = currency;
    rowitem.unit = unit;
    rowitem.price = price;

    const json = JSON.stringify(rowitem);

    console.log(json);

    const url = environment.APIEndpoint + "/organization/additem";

    console.log(json);

    this.http
      .post(url, json)
      .pipe(
        catchError((error: any, caught: Observable<HttpEvent<any>>) => {
          throw error;
        })
      )
      .subscribe(res => {
        console.log(res);
        this.router.navigate(["/input/list"]);
      });
  }
}
