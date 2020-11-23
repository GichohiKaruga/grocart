import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import {SuppliersComponent} from './suppliers.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../app.module';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {SuppliersRoutingModule} from './suppliers.routing.module';
import {DetailComponent} from './detail/detail.component';
import {ProductsComponent} from './products/products.component';
import {AddproductComponent} from './addproduct/addproduct.component';


@NgModule({
  declarations: [AddComponent, SuppliersComponent, DetailComponent, ProductsComponent, AddproductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SuppliersRoutingModule,
    FlashMessagesModule.forRoot(),
  ]
})
export class SuppliersModule { }
