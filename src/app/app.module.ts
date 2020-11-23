import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import {FlashMessagesModule} from 'angular2-flash-messages';
// import { AutocompleteComponent } from './google-places.component';


import {AppComponent} from './app.component';

import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FixedpluginModule} from './shared/fixedplugin/fixedplugin.module';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AgmCoreModule} from '@agm/core';
import {AppRoutes} from './app.routing';
import {AuthenticationService} from './service/authentication.service';
import {JwtInterceptor} from './helper/jwt.interceptor';
import {AuthGuard} from './helper/auth.guard';
import {ToastrModule} from 'ngx-toastr';
import {LoginModule} from './pages/login/login.module';



@NgModule({
    exports: [
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCardModule,
        MatChipsModule,
        MatStepperModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatDatepickerModule,
        MatButtonModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule
    ],
    declarations: [],
    imports: [MatGoogleMapsAutocompleteModule, AgmCoreModule.forRoot()],
})
export class MaterialModule {
}

@NgModule({
    imports: [
        CommonModule,
        MatGoogleMapsAutocompleteModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        FormsModule,
        MatGoogleMapsAutocompleteModule,
        ReactiveFormsModule,
        FlashMessagesModule.forRoot(),
        RouterModule.forRoot(AppRoutes, {
            useHash: true
        }),
        HttpClientModule,
        MaterialModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedpluginModule,
        LoginModule,
        ToastrModule.forRoot(),
        // MatGoogleMapsAutocompleteModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD5VpmecE1xkIqxLCZpqmarrAhlPwPzKDM',
            libraries: ['places']
        })
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,


    ],
    providers: [
        AuthenticationService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, MatNativeDateModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
