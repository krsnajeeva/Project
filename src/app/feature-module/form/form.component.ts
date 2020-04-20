import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ProductService } from '../../core-module/services/product.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  parentMessage: any
  genders: SelectItem[];
  status: any [];
  display = false;

  showDialog() {
      this.display = true;
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  form = new FormGroup({
    ticketNum: new FormControl('HD#0002', ),
    createdDate: new FormControl('03/14/20', ),
    staffName: new FormControl('Jan', ),
    emailId: new FormControl('Jan@gmail.com', [ Validators.pattern(this.emailPattern)]),
    programID: new FormControl('',Validators.required ),
    status: new FormControl('', ),
    notes: new FormControl('',Validators.required ),
    updatedDate: new FormControl('03/14/20', )

    // ticketNum: new FormControl('HD#0001', ),
    // createdDate: new FormControl('03/14/20', ),
    // staffName: new FormControl('sample', ),
    // emailId: new FormControl('sample@gmail.com', [ Validators.pattern(this.emailPattern)]),
    // programID: new FormControl('',Validators.required ),
    // status: new FormControl('new', ),
    // notes: new FormControl('',Validators.required ),
    // updatedDate: new FormControl('03/14/20', )
  });
  namelist: any [];
  selectedCity: any []
  constructor(private productService: ProductService, private router: Router,) { }

  ngOnInit(): void {
    this.genders = [{ label: 'Select Gender', value: '' }, { label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }];
    this.getAllPrograms();

    this.status = [
      // { label: 'All', value: null },
      { label: 'New', value: 'New' },
      { label: 'InProgress', value: 'InProgress' },
      { label: 'Resolved', value: 'Resolved' },
      { label: 'Reopened', value: 'Reopened' },
      { label: 'Closed', value: 'Closed' }
  ];
  }

  getAllPrograms(): void {
    this.productService.getAllPrograms().subscribe(namelist => {
      this.namelist = namelist;
      console.log("namelist",namelist)
    });
  };

  uploadedFiles: any[] = [];


  get f() {
    return this.form.controls;
  }

  submit() {

    if(this.form.valid){
      this.productService.addHelpdesk(this.form.value)
      .subscribe( data => {
        console.log("issueadded",data);
        this.router.navigate(['']);
      });
    }
    alert(JSON.stringify(this.form.value));
    this.parentMessage = JSON.stringify(this.form.value);
    console.log(this.form.value);
  }
}
