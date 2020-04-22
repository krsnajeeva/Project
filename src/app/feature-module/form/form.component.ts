import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  inputs: ['helpDeskForm', 'formMode'],
  outputs: ['formOutput']
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
  isButtonVisible = false;
  @Output() formOutput = new EventEmitter();

  showDialog() {
    this.formMode = 'create';
    this.display = true;
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  form = new FormGroup({
    ticketNum: new FormControl('#007'),
    createdDate: new FormControl("2020-04-22"),
    staffName: new FormControl('KrishnaKumar'),
    email: new FormControl('Krishnakumar@gmail.com'),
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
    this.cmsUserData.staffName = 'KrishnaKumar';
    this.cmsUserData.staffEmail = 'Krishnakumar@gmail.com';
    this.status = this.helpDeskForm.status
    if (this.formMode == 'create') {
      this.buttonlable = 'Submit'
    }
    // else if (this.formMode == 'edit') {
    switch (this.status) {
      case 'New': {
        this.buttonlable = 'Open';
        break;
      }
      case 'InProgress': {
        this.buttonlable = 'Resolve';
        break;
      }
      case 'Resolved': {
        this.buttonlable = 'Reopen';
        break;
      }
      // case 'Reopened': {
      //   this.buttonlable = 'Reassign';
      //   break;
      // }
      case 'Resolved': {
        this.buttonlable = 'Close';
        break;
      }
      case 'Closed': {
        this.buttonlable = 'Close';
        break;
      }
      // }
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
    if (this.formMode == 'create') {

      if (this.form.valid) {
        // this.productService.addHelpdesk(this.form.value)
        //   .subscribe(data => {
        //     console.log("issueadded", data);
        //     alert("New Ticket Created")
        //     this.router.navigate(['']);
        //   });
        alert(JSON.stringify(this.form.value));

      }
    }
    else if (this.formMode == 'edit') {
      console.log("Form inputs", this.helpDeskForm);
      // this.helpDeskForm.staffName = this.cmsUserData.staffName;
      // this.helpDeskForm.email = this.cmsUserData.staffEmail;
      // alert(JSON.stringify(this.helpDeskForm));

      switch (this.buttonlable) {
        case 'Submit': {
          this.helpDeskForm.status = 'New';
          this.helpDeskForm.staffName = this.cmsUserData.staffName;
          this.helpDeskForm.email = this.cmsUserData.staffEmail;
          alert(JSON.stringify(this.helpDeskForm));
          break;
        }
        case 'Open': {
          this.helpDeskForm.status = 'InProgress';
          this.helpDeskForm.staffName = this.cmsUserData.staffName;
          this.helpDeskForm.email = this.cmsUserData.staffEmail;
          alert(JSON.stringify(this.helpDeskForm));
          break;
        }
        case 'Resolve': {
          this.helpDeskForm.status = 'Resolved';
          this.helpDeskForm.staffName = this.cmsUserData.staffName;
          this.helpDeskForm.email = this.cmsUserData.staffEmail;
          alert(JSON.stringify(this.helpDeskForm));
          break;
        }
        case 'Reopen': {
          this.helpDeskForm.status = 'Reopened';
          this.helpDeskForm.staffName = this.cmsUserData.staffName;
          this.helpDeskForm.email = this.cmsUserData.staffEmail;
          alert(JSON.stringify(this.helpDeskForm));
          break;
        }
        // case 'Reassign': {
        //   this.helpDeskForm.status = 'InProgress';
        //   break;
        // }       
        case 'Close': {
          this.helpDeskForm.status = 'Closed';
          this.helpDeskForm.staffName = this.cmsUserData.staffName;
          this.helpDeskForm.email = this.cmsUserData.staffEmail;
          alert(JSON.stringify(this.helpDeskForm));
          break;
        }
      }
    }
    this.formOutput.emit({ isFormClose: false });
  }
}
