import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SuppliersComponent} from './suppliers.component';
import {AddComponent} from './add/add.component';
import {DetailComponent} from './detail/detail.component';
import {ProductsComponent} from './products/products.component';
import {AddproductComponent} from './addproduct/addproduct.component';


const routes: Routes = [
    {
        path: '',
         component:  SuppliersComponent
     },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    },
    {
        path: 'product/:id',
        component: ProductsComponent
    },
    {
        path: 'addproduct/:id',
        component: AddproductComponent
    },
    {
        path: 'list',
        component:  SuppliersComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SuppliersRoutingModule {}
