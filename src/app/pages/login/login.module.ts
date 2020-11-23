import { NgModule } from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule],
    declarations: [LoginComponent],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class LoginModule {}
 