import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../app.module';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {OrderRoutingModule} from './order.routing.module';
import {OrderComponent} from './order.component';
import {DetailComponent} from './detail/detail.component';
import {AddComponent} from './add/add.component';



@NgModule({
  declarations: [OrderComponent, DetailComponent, AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    OrderRoutingModule,
    FlashMessagesModule.forRoot(),
  ]
})
export class OrderModule { }
