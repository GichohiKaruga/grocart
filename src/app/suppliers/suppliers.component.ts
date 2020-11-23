import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {Supplier} from '../model/supplier';
import {SupplierService} from '../service/supplier.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[] = [];
  res: any = {};

  constructor(public supplierService: SupplierService,
              public router: Router) { }

  ngOnInit(): void {
    this.getOrganisations();
  }

  public getOrganisations() {
    this.supplierService.getSuppliers().subscribe(
        response => {
          this.res = response;
          console.log(this.res);
          this.suppliers = this.res;
        },
        error => {
          console.log('Error', error);
        }
    );
  }

  public add() {

    this.router.navigate(['/creator/add']);
  }

}
