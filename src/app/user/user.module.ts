import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserComponent} from './user.component';
import {UserRoutingModule} from './user.routing.module';
import {AddComponent} from './add/add.component';
import {MaterialModule} from '../app.module';
import {EditComponent} from './edit/edit.component';
import { FlashMessagesModule } from 'angular2-flash-messages';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        UserRoutingModule,
        FlashMessagesModule.forRoot(),
    ],
    declarations: [UserComponent, AddComponent, EditComponent,]
})
export class UserModule { }
