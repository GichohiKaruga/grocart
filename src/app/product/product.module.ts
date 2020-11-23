import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../app.module';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {ProductRoutingModule} from './product.routing.module';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product.component';
import {AddComponent} from './add/add.component';
import {DetailComponent} from './detail/detail.component';
import {AddcategoryComponent} from './addcategory/addcategory.component';



@NgModule({
  declarations: [ProductComponent, CategoryComponent, AddComponent, DetailComponent, AddcategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ProductRoutingModule,
    FlashMessagesModule.forRoot(),
  ]
})
export class ProductModule { }
