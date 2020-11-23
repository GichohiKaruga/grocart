import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {CategoryComponent} from './category/category.component';
import {AddComponent} from './add/add.component';
import {DetailComponent} from './detail/detail.component';
import {AddcategoryComponent} from './addcategory/addcategory.component';



const routes: Routes = [
    {
        path: '',
         component:  ProductComponent
     },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'detail',
        component: DetailComponent
    },
    {
        path: 'addcategory',
        component: AddcategoryComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
