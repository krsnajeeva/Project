import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../core-module/services/product.service';
import { Router } from "@angular/router";
import { formatDate } from '@angular/common';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    inputs: ['helpDeskForm', 'formMode'],
    outputs: ['formOutput']
})
export class FormComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    status: any;
    today = new Date();
    jstoday = '';
    current_date = ''
    namelist: any[];
    uploadedFiles: any[] = [];
    ticketNumber: any;
    constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }

    ngOnInit() {
        this.getAllPrograms();
        this.productService.getLastId().subscribe(data => {
            this.ticketNumber = this.padToFour(data[0].id);
        });
        this.jstoday = formatDate(this.today, 'MM-dd-yyyy', 'en-US', '+0530');
        this.current_date = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');

        this.registerForm = this.formBuilder.group({
            programID: ['', Validators.required],
            notes: ['', Validators.required],
            ticketNum: [],
            createdDate: [this.current_date],
            staffName: ['Krishna'],
            email: ['Krishna@gmail.com'],
            status: ['New'],
            updatedDate: [this.current_date],
            attachmentList: ['attachmentfilelink']
        }
        );
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    getAllPrograms(): void {
        this.productService.getAllPrograms().subscribe(namelist => {
            this.namelist = namelist;
            console.log("namelist", namelist)
        });
    };

    padToFour(id) {
        var number = id + 1
        number = ("000" + number).slice(-4);
        var t_no = "#" + number
        return t_no;
    }

    onSubmit(ticketNumber) {
        this.submitted = true;
        this.registerForm.value.ticketNum = ticketNumber
        if (this.registerForm.valid) {
            this.productService.addHelpdesk(this.registerForm.value)
                .subscribe(data => {
                    console.log("issueadded", data);
                    // alert("New Ticket Created")
                    this.router.navigate(['']);
                });
            // alert(JSON.stringify(this.registerForm.value));
        }

        // alert(JSON.stringify(this.registerForm.value));
    }
}
