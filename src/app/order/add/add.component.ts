import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../service/order.service';
import {Supplier} from '../../model/supplier';
import {ProductService} from '../../service/product.service';
import {Rowitem} from '../../model/rowitem';
import {FormControl, FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Orderitem} from '../../model/orderitem';
import {User} from '../../model/user';
import {Order} from '../../model/order';
import {SupplierService} from '../../service/supplier.service';
import {Item} from '../../model/item';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    items: Item[] = [];
    res: any;
    suppliers: Supplier[] = [];
    orderGroup: FormGroup;
    rowitems: Rowitem[] = [];
    user: User;

    constructor(private http: HttpClient,
                public router: Router,
                public supplierService: SupplierService,
                public productService: ProductService,
                public orderService: OrderService) {
    }

    ngOnInit(): void {
        this.orderGroup = new FormGroup({
            id: new FormControl(),
            itemid: new FormControl(),
            quantity: new FormControl(),
            currency: new FormControl(),
            price: new FormControl(),
            unit: new FormControl()
        });
        this.getProducts();
        this.getSuppliers();
    }

    public getSuppliers() {
        this.supplierService.getSuppliers().subscribe(
            response => {
                this.res = response;
                // console.log(this.res);
                this.suppliers = this.res;
            },
            error => {
                console.log('Error', error);
            }
        );
    }

    private getProducts() {
        this.productService.getProducts().subscribe(
            response => {
                this.res = response;
                console.log(this.res);
                this.items = this.res;
            },
            error => {
                console.log('Error', error);
            }
        );
    }

    add() {
        console.log('submit');

        const itemid = this.orderGroup.controls['itemid'].value;
        const quantity = this.orderGroup.controls['quantity'].value;
        const currency = this.orderGroup.controls['currency'].value;
        const price = this.orderGroup.controls['price'].value;
        const unit = this.orderGroup.controls['unit'].value;
        const id = this.orderGroup.controls['id'].value;

        let rowitem = new Rowitem();
        rowitem.id = id;
        rowitem.itemid = itemid;
        rowitem.currency = currency;
        rowitem.unit = unit;
        rowitem.price = price;
        rowitem.quantity = quantity;
        this.rowitems.push(rowitem);

        this.orderGroup.controls['itemid'].setValue('');
        this.orderGroup.controls['quantity'].setValue('');
        this.orderGroup.controls['price'].setValue('');
        this.orderGroup.controls['unit'].setValue('');

    }

    sendToServer() {
        console.log('submit');
        const itemid = this.orderGroup.controls['itemid'].value;
        const quantity = this.orderGroup.controls['quantity'].value;
        const currency = this.orderGroup.controls['currency'].value;
        const price = this.orderGroup.controls['price'].value;
        const unit = this.orderGroup.controls['unit'].value;
        const id = this.orderGroup.controls['id'].value;

        let rowitem = new Rowitem();
        rowitem.id = id;
        rowitem.itemid = itemid;
        rowitem.currency = currency;
        rowitem.unit = unit;
        rowitem.price = price;
        rowitem.quantity = quantity;
        this.rowitems.push(rowitem);



        this.user = JSON.parse(localStorage.getItem('user'));
        const userid = this.user.userid;

        let order = new Order();
        order.userid = userid;
        order.organizationid = id;
        order.items = this.rowitems;

        const json = JSON.stringify(order);
        console.log(json);


        const url = environment.APIEndpoint + '/order/addorder';

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
                  ;this.router.navigate(['/offtake']);
                }
            );




    }

}
