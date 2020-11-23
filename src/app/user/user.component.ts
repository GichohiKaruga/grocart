import {AfterViewInit, Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit{

  users: User[] = [];
  res: any = {};
  user: User;

  constructor(public userService: UserService,
              public authenticationService: AuthenticationService) { }

  ngAfterViewInit() {
    this.fetchAll();
  }

  private fetchAll() {
    this.userService.getAll().subscribe(
        response => {
          this.res = response;
          console.log(this.res);
          this.users = this.res;
        },
        error => {
          console.log('Error', error);
        }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.user.filter = filterValue.trim().toLowerCase();
  }


}
