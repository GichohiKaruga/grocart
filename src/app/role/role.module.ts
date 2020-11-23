import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoleComponent} from './role.component';
import {AddComponent} from './add/add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../app.module';
import {RoleRoutingModule} from './role.routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoleRoutingModule,
    FlashMessagesModule.forRoot(),
  ],
  declarations: [RoleComponent, AddComponent]
})
export class RoleModule { }
