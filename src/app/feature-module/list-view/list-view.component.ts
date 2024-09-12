import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core-module/services/product.service';
import { ProductModel } from '../../core-module/services/ProductModel';
import { Router, NavigationExtras } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss'],
})
export class HelpDeskListViewComponent implements OnInit {
    // cols: any[];
    today = new Date();
    jstoday = '';

    display = false;
    datalist: ProductModel[];
    data: [];
    cols: any[];
    status: any[];
    formMode = 'edit';
    namelist: any[];
    constructor(private productService: ProductService,  private router: Router) {
        this.jstoday = formatDate(this.today, 'MM-dd-yyyy', 'en-US', '+0530');

        console.log('dateddd', this.jstoday);

    }


    createDialog() {
        // this.helpdeskprogram = new HelpDeskFormClass();
        // this.formMode = 'create';
        return this.router.navigate([''])
    }

    ngOnInit() {
        this.getHelpdesk();
        this.padToFour(1);

        this.cols = [
            { field: 'ticketNum', header: 'Tickets Number' },
            { field: 'createdDate', header: 'Ticket Created Date' },
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
            { label: 'Reassign', value: 'Reassign' },
            { label: 'Closed', value: 'Closed' }
        ];
        this.namelist = [
            { label: 'All', value: null },
            { label: 'Reintegration', value: '7' },
            { label: 'Non-Contract Reintegration', value: '8' },
            { label: 'Kinship', value: '9' },
            { label: 'Adoption', value: '10' },
            { label: 'Independent Living', value: '11' },
            { label: 'Non-ContractOutpatientServices', value: '12' },
            { label: 'FCH', value: '13' },
            { label: 'Providers', value: '14' },
            { label: 'NC- Home Study', value: '15' },
            { label: 'JJFC', value: '16' },
            { label: 'PRTF', value: '17' },
            { label: 'NC-MHR', value: '18' },
            { label: 'Finance-Administrative', value: '19' },
            { label: 'Finance - Accounts Payable', value: '20' },
            { label: 'Finance- Accounts Receivable', value: '21' },
            { label: 'Reports', value: '22' },
            { label: 'Data Unit', value: '23' },
            { label: 'Care Center', value: '24' },
            { label: 'Family Preservation', value: '25' },

        ]

    }
    padToFour(number) {
        if (number <= 9999) { number = ("000" + number).slice(-4); }
        console.log("------tic_num", number)
        return number;
    }

    getHelpdesk(): void {
        this.productService.getHelpdesk().subscribe(data => {
            this.datalist = data;
            console.log("datdadadada", data)
        });
    };

    getHelpdeskId(id): void {
        this.productService.getHelpdeskId(id).subscribe(data => {
            console.log("asaaasas", data);
            // alert(JSON.stringify(data))

        });
    };

    updateform(data: ProductModel) {
        // this.getHelpdeskId(data.id)
        // this.productService.getHelpdeskId(data.id).subscribe(data => {
        //     this.helpdeskprogram = data[0];
        //     console.log("krsna", this.helpdeskprogram)
        // })
        // this.display = true;
        // this.formMode = 'edit';
        // alert(data.id)
        
        this.router.navigate(['/help-desk/edit',data.id]);
        // console.log("cusid", JSON.stringify(data.id))
        // console.log("cusid", data.staffName)
    }

    formOutput(event: any) {
        this.display = event.isFormClose;
    }
}

