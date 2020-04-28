import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../core-module/services/product.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    status: any;
    today = new Date();
    jstoday = '';
    currentDate = '';
    namelist: any[];
    uploadedFiles: any[] = [];
    ticketNumber: any;
    menuItems: MenuItem[];
    home: MenuItem;

    constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }

    ngOnInit() {
        this.menuItems = [
            // {label:'Create Ticket', url:'/help-desk/create'},
            { label: 'Create Ticket' }
        ];
        this.home = { icon: 'pi pi-home', url: '#' };

        this.getAllPrograms();
        this.productService.getLastId().subscribe(data => {
            console.log(data);
            this.ticketNumber = this.padToFour(data[0].id);
        });
        this.jstoday = formatDate(this.today, 'MM-dd-yyyy', 'en-US', '+0530');
        this.currentDate = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');

        this.registerForm = this.formBuilder.group({
            programID: ['', Validators.required],
            notes: ['', Validators.required],
            ticketNum: [],
            createdDate: [this.currentDate],
            staffName: ['Krishna'],
            email: ['krishna2333@gmail.com'],
            status: ['New'],
            updatedDate: [this.currentDate],
            attachmentList: ['attachmentfilelink']
        }
        );
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    getAllPrograms(): void {
        this.productService.getAllPrograms().subscribe(namelist => {
            this.namelist = namelist;
            console.log('namelist', namelist);
        });
    }

    padToFour(id) {
        let ticketNumber = id + 1;
        ticketNumber = ('000' + ticketNumber).slice(-4);
        const ticketNo = '#' + ticketNumber;
        return ticketNo;
    }

    onSubmit(ticketNumber) {
        this.submitted = true;
        this.registerForm.value.ticketNum = ticketNumber;
        if (this.registerForm.valid) {
            this.productService.addHelpdesk(this.registerForm.value)
                .subscribe(data => {
                    console.log('issueadded', data);
                    // alert("New Ticket Created")
                    this.router.navigate(['']);
                });
            // alert(JSON.stringify(this.registerForm.value));
        }

        // alert(JSON.stringify(this.registerForm.value));
    }
}
