import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AuthGuard} from './helper/auth.guard';
import {LoginComponent} from './pages/login/login.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule'
            },
            {
                path: 'role',
                loadChildren: './role/role.module#RoleModule'
            },
            {
                path: 'drivers',
                loadChildren: './drivers/drivers.module#DriverModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/supplier.module#SupplierModule'
            },
            {
                path: 'products',
                loadChildren: './product/product.module#ProductModule'
            }
        ],
       canActivate: [AuthGuard]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }],
        canActivate: [AuthGuard]

    }
];
