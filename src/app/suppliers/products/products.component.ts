import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {SupplierService} from '../../service/supplier.service';
import {Rowitem} from '../../model/rowitem';
import {Orgitem} from '../../model/orgitem';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    id: string;
    res: any;
    orgitems: Orgitem[] = [];

    constructor(private http: HttpClient,
                public router: Router,
                private route: ActivatedRoute,
                public organizationService: SupplierService) {
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getProducts(this.id);
    }

    private getProducts(id: string) {
        this.organizationService.getItems(id).subscribe(
            response => {
                this.res = response;
                console.log(this.res);
                this.orgitems = this.res;
            },
            error => {
                console.log('Error', error);
            }
        );
    }

}
