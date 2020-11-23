import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Driver} from '../model/driver';
import {DriverService} from '../service/driver.service';



@Component({
    selector: 'app-user',
    templateUrl: './driver.component.html',
    styleUrls: ['./driver.component.css']
})
export class DriverComponent implements AfterViewInit {

    drivers: Driver[] = [];
    res: any = {};
    driver: Driver;

    constructor(public driverService: DriverService) {
    }

    ngAfterViewInit() {
        this.fetchAll();
    }



    private fetchAll() {
        this.driverService.getDrivers().subscribe(
            response => {
                this.res = response;
                console.log(this.res);
                this.drivers = this.res;
            },
            error => {
                console.log('Error', error);
            }
        );
    }


}

