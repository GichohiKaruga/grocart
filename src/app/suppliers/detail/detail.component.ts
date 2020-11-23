import {Component, OnInit} from '@angular/core';
import {Supplier} from '../../model/supplier';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {SupplierService} from '../../service/supplier.service';
import {ProductService} from '../../service/product.service';
import {Orgitem} from '../../model/orgitem';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    supplier: Supplier;
    res: any;
    id: string;
    valuechains: string[] = [];
    orgitems: Orgitem[] = [];
    documents: string[] = [];

    constructor(private http: HttpClient,
                public router: Router,
                private route: ActivatedRoute,
                public supplierService: SupplierService,
                public productService: ProductService) {
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getSuppliers(this.id);
        this.getProducts(this.id);
    }

    private getSuppliers(id: string) {
        console.log('ID:' + id);
        this.supplierService.getSupplierById(id).subscribe(
            response => {
                this.res = response;
                this.supplier = this.res;
                console.log(this.res);
            },
            error => {
                console.log('Error', error);
            }
        );
    }

    private getProducts(id: string) {

    }


}
