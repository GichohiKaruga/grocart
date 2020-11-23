import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { LockComponent } from './lock/lock.component';
import {LoginModule} from './login/login.module';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    // LoginModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
  ],
  declarations: [
    RegisterComponent,
    LockComponent
  ]
})

export class PagesModule {}
