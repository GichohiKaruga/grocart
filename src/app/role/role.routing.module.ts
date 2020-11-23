import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddComponent} from './add/add.component';
import {RoleComponent} from './role.component';


const routes: Routes = [
    {
        path: '',
        component: RoleComponent
    },
    {
        path: 'add',
        component: AddComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoleRoutingModule {}
