import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DriverComponent} from './driver.component';
import {AddComponent} from './add/add.component';
import {DetailComponent} from './detail/detail.component';



const routes: Routes = [
    {
        path: '',
        component: DriverComponent
    },
    {
        path: 'add/:id',
        component: AddComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    },
    {
        path: 'list',
        component: DriverComponent
    }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DriverRoutingModule {}
