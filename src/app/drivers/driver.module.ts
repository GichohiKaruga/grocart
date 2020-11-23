import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DriverComponent} from './driver.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../app.module';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {DriverRoutingModule} from './driver.routing.module';
import { AddComponent } from './add/add.component';
import {DetailComponent} from './detail/detail.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DriverRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  declarations: [DriverComponent, AddComponent, DetailComponent]
})
export class DriverModule { }
