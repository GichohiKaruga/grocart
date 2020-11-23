import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DriverService} from '../../service/driver.service';
import {AuthenticationService} from '../../service/authentication.service';
import {Driver} from '../../model/driver';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  driverid: string;
  id: string;
  drivererid: string;
  res: any = {};
  driver: Driver;
  drivererage: number;

  constructor(private http: HttpClient,
              public router: Router,
              private route: ActivatedRoute,
              public driverService: DriverService,
              public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDriver(this.id);
  }


  private getDriver(id: string) {
    console.log('ID:' + id);
    this.driverService.getDriverById(id).subscribe(
        response => {
          this.res = response;
          this.driver = this.res;

        },
        error => {
          console.log('Error', error);
        }
    );
  }

  getAge(dateString) {

    const dates = dateString.split('-');
    const d = new Date();

    const userday = dates[0];
    const usermonth = dates[1];
    const useryear = dates[2];

    const curday = d.getDate();
    const curmonth = d.getMonth() + 1;
    const curyear = d.getFullYear();

    let age = curyear - useryear;

    if ((curmonth < usermonth) || ( (curmonth === usermonth) && curday < userday   )) {

      age--;

    }

    return age;
  }



}
