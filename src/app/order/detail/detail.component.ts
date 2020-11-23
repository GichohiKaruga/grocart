import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {SupplierService} from '../../service/supplier.service';
import {OrderService} from '../../service/order.service';
import {Orderitem} from '../../model/orderitem';
import {Supplier} from '../../model/supplier';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  orderitems: Orderitem[] = [];
  res: any;
  id: string;
  supplier: Supplier;

  constructor(private http: HttpClient,
              public router: Router,
              private route: ActivatedRoute,
              public orderService: OrderService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getOrder(this.id);
  }

  private getOrder(id: string) {
    this.orderService.getOrdersById(id).subscribe(
        response => {
          this.res = response;
          console.log(this.res);
          this.orderitems = this.res;
        },
        error => {
          console.log('Error', error);
        }
    );
  }


}
