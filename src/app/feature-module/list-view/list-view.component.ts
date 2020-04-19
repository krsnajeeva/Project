import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core-module/services/product.service';
import { ProductModel } from '../../core-module/services/ProductModel';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss']
})
export class HelpDeskListViewComponent implements OnInit {
    // cols: any[];

    display = false;
    datalist: ProductModel[];
    data: [];
    cols: any [];
    status: any [];

    constructor(private productService: ProductService) { }

    
    showDialog() {
        this.display = true;
    }

    ngOnInit() {
        this.getHelpdesk();
        this.cols = [
            { field: 'ticketNum', header: 'Tickets Number' },
            { field: 'createdDate', header: 'Ticket Creation Date' },
            { field: 'staffName', header: 'Staff Name' },
            { field: 'email', header: 'Staff Email' },
            { field: 'programID', header: 'Program' },
            { field: 'status', header: 'Status' },
            { field: 'updatedDate', header: 'Updated Date' },
            // { field: 'action', header: 'Action' }
        ];
        this.status = [
            { label: 'All', value: null },
            { label: 'New', value: 'New' },
            { label: 'InProgress', value: 'InProgress' },
            { label: 'Resolved', value: 'Resolved' },
            { label: 'Reopened', value: 'Reopened' },
            { label: 'Closed', value: 'Closed' }
        ];

    }

    getHelpdesk(): void {
        this.productService.getHelpdesk().subscribe(data => {
            this.datalist = data;
            console.log("datdadadada",data)
        });
    };
    
    getHelpdeskId(id): void {
        this.productService.getHelpdeskId(id).subscribe(data=>{
            console.log("asaaasas",data);
        // alert(JSON.stringify(data))

        });
    };

    updateform(data: ProductModel) {
        // this.getHelpdeskId(data.id)
        this.productService.getHelpdeskId(data.id).subscribe(krsna=>{
            console.log("krsna",krsna)
        })
        this.display = true;
        // alert(data.id)
        console.log("cusid", JSON.stringify(data.id))
        console.log("cusid", data.staffName)
    }
}

