import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../core-module/services/product.service';
import { Router, ActivatedRoute } from "@angular/router";
import { formatDate } from '@angular/common';
import { HelpDeskFormClass } from '../form-two/form';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss'],
})

export class FormTwoComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  today = new Date();
  current_date = ''
  buttonlable: String;
  isButtonVisible = false;
  uploadedFiles: any[] = [];
  namelist: any[];
  sub: any;
  data: any;
  helpdeskprogram: HelpDeskFormClass = new HelpDeskFormClass();

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    // this.buttonlable = 'Submit'
    this.getAllPrograms();
    this.registerForm = this.formBuilder.group({
      programID: ['', Validators.required],
      // notes: ['', Validators.required],
    });

    this.sub = this.route.params.subscribe(params => {
      console.log(params.id);
      this.productService.getHelpdeskId(params.id).subscribe(data => {
        this.helpdeskprogram = data[0];
        this.data = data[0]
        console.log("krsna", this.helpdeskprogram)

        switch (this.data.status) {
          case 'New': {
            this.buttonlable = 'Open';
            break;
          }
          case 'InProgress': {
            this.buttonlable = 'Resolve';
            break;
          }
          case 'Resolved': {
            this.isButtonVisible = true;
            this.buttonlable = 'Reopen';
            break;
          }
          case 'Reopened': {
            this.buttonlable = 'Reassign';
            break;
          }
          case 'Resolved': {
            this.buttonlable = 'Close';
            break;
          }
          default: {
            this.buttonlable = 'Close';
            break;
          }
        }
      })
    });

    this.current_date = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');


  }
  getAllPrograms(): void {
    this.productService.getAllPrograms().subscribe(namelist => {
      this.namelist = namelist;
      console.log("namelist", namelist)
    });
  };
  

  onSubmit() {
    // this.helpDeskForm.staffName = this.cmsUserData.staffName;
    // this.helpDeskForm.email = this.cmsUserData.staffEmail;
    // alert(JSON.stringify(this.helpdeskprogram));

    switch (this.buttonlable) {
      case 'Open': {
        this.helpdeskprogram.status = 'InProgress';
        alert(JSON.stringify(this.helpdeskprogram));
        break;
      }
      case 'Resolve': {
        this.helpdeskprogram.status = 'Resolved';
        alert(JSON.stringify(this.helpdeskprogram));
        break;
      }
      case 'Reopen': {
        this.helpdeskprogram.status = 'Reopened';
        alert(JSON.stringify(this.helpdeskprogram));
        break;
      }
      case 'Reassign': {
        this.helpdeskprogram.status = 'InProgress';
        break;
      }
      default: {
        // this.helpdeskprogram.status = 'Closed';
        alert(JSON.stringify(this.helpdeskprogram));
        break;
      }
    }
  }
}
