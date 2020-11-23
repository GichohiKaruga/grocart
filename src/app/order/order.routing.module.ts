import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OrderComponent} from './order.component';
import {AddComponent} from './add/add.component';
import {DetailComponent} from './detail/detail.component';


const routes: Routes = [
    {
        path: '',
         component:  OrderComponent
     },
    {
        path: 'add',
        component:  AddComponent
    },
    {
        path: 'detail/:id',
        component:  DetailComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule {}
