import { Component, OnInit } from '@angular/core';
import {Order} from '../model/order';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {OrderService} from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];
  res: any;

  constructor(public orderService: OrderService,
              public router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders() {
    this.orderService.getOrders().subscribe(
        response => {
          this.res = response;
          console.log(this.res);
          this.orders = this.res;
        },
        error => {
          console.log('Error', error);
        }
    );
  }

}
