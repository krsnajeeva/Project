import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ProductService } from '../../core-module/services/product.service';
import { Router } from "@angular/router";
import { HelpDeskFormClass, CMSUserData } from "./form";
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  inputs: ['helpDeskForm', 'formMode']
})
export class FormComponent implements OnInit {
  parentMessage: any
  genders: SelectItem[];
  status: any;
  display = false;
  button: any[];
  today = new Date();
  jstoday = '';
  current_date = ''
  cmsUserData: CMSUserData = new CMSUserData();
  buttonlable: String;
  @Input() helpDeskForm: HelpDeskFormClass = new HelpDeskFormClass();
  @Input() formMode: string;

  showDialog() {
    this.formMode = 'create';
    this.display = true;
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  form = new FormGroup({
    ticketNum: new FormControl('#007'),
    createdDate: new FormControl("2020-04-22"),
    staffName: new FormControl('KrishnaKumar'),
    emailId: new FormControl('Krishnakumar@gmail.com'),
    programID: new FormControl('', Validators.required),
    status: new FormControl('New'),
    notes: new FormControl('', Validators.compose([null, Validators.required])),
    updatedDate: new FormControl("2020-04-22")
  });
  namelist: any[];
  selectedCity: any[]
  constructor(private productService: ProductService, private router: Router, ) { }

  ngOnInit(): void {
    console.log("Current Form Mode", this.formMode);
    this.getAllPrograms();

    this.jstoday = formatDate(this.today, 'MM-dd-yyyy', 'en-US', '+0530');
    this.current_date = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');

    this.status = 'New'
    // [
    //   // { label: 'All', value: null },
    //   { label: 'New', value: 'New' },
    //   { label: 'InProgress', value: 'InProgress' },
    //   { label: 'Resolved', value: 'Resolved' },
    //   { label: 'Reopened', value: 'Reopened' },
    //   { label: 'Closed', value: 'Closed' }
    // ];

    this.button = [
      { label: 'Submit', value: 'New' },
      { label: 'Open', value: 'InProgress' },
      { label: 'Resolve', value: 'Resolved' },
      { label: 'Reopen', value: 'Reopened' },
      { label: 'Assign', value: 'Reopened' },
      { label: 'Close', value: 'Closed' }
    ];

    this.cmsUserData.staffName = 'KrishnaKumar';
    this.cmsUserData.staffEmail = 'Krishnakumar@gmail.com';

      switch (this.helpDeskForm.status) {
        case 'New': {
          this.status = 'New';
          break;
        }
        case 'InProgress': {
          this.status = 'InProgress';
          break;
        }
        case 'Resolved': {
          this.status = 'Resolved';
          break;
        }
        case 'Reopened': {
          this.status = 'Reopened';
          break;
        }
        // case 'Inprogress': {
        //   this.buttonlable = 'Re-Assign';
        //   break;
        // }
        case 'Closed': {
          this.status = 'Closed';
          break;
        }

      }

      switch (this.status) {
        case 'New': {
          this.buttonlable = 'Submit';
          break;
        }
        case 'InProgress': {
          this.buttonlable = 'Open';
          break;
        }
        case 'Resolved': {
          this.buttonlable = 'Resolve';
          break;
        }
        case 'Reopened': {
          this.buttonlable = 'Reopen';
          break;
        }
        // case 'Inprogress': {
        //   this.buttonlable = 'Re-Assign';
        //   break;
        // }
        case 'Closed': {
          this.buttonlable = 'Close';
          break;
        }
      }
  }

  getAllPrograms(): void {
    this.productService.getAllPrograms().subscribe(namelist => {
      this.namelist = namelist;
      console.log("namelist", namelist)
    });
  };

  uploadedFiles: any[] = [];


  get f() {
    return this.form.controls;
  }

  submit() {
    console.log("Form inputs", this.helpDeskForm);
    if(this.form.valid){
      this.productService.addHelpdesk(this.form.value)
      .subscribe( data => {
        console.log("issueadded",data);
        alert("New Ticket Created")
        this.router.navigate(['']);
      });
    }

    this.helpDeskForm.staffName = this.cmsUserData.staffName;
    this.helpDeskForm.email = this.cmsUserData.staffEmail;
    // alert(JSON.stringify(this.form.value));
    this.parentMessage = JSON.stringify(this.form.value);
    console.log(this.form.value);
    console.log("-----statusss", this.helpDeskForm.status)
    this.router.navigate(['']);
    this.display = false;
    }
}
