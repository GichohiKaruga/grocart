import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../model/user';
import {Role} from '../model/role';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import { NotificationService } from '../service/notification.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements AfterViewInit {

  roles: Role[] = [];
  res: any = {};
  role: Role;
  dataSource = new MatTableDataSource<Role>(this.roles);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public userService: UserService,
               public notificationServices: NotificationService,
              public router: Router) { }

  ngAfterViewInit() {
    this.getRoles();
   // this.roles.paginator = this.paginator;
  }

  public getRoles() {
    this.userService.getRoles().subscribe(
        response => {
          this.res = response;
          console.log(this.res);
          this.roles = this.res;
        },
        error => {
          console.log('Error', error);
        }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.role.filter = filterValue.trim().toLowerCase();
  }

  public add() {
    this.router.navigate(['/role/add']);
  }

}
