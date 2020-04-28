import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../core-module/services/product.service';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { HelpDeskFormClass, Logdata } from '../form-two/form';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss'],
})

export class FormTwoComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  today = new Date();
  currentDate: any;
  buttonlable: any;
  isButtonVisible: any;
  isCloseBtnVisible: any;
  uploadedFiles: any[] = [];
  namelist: any[];
  sub: any;
  data: any;
  helpdeskprogram: HelpDeskFormClass = new HelpDeskFormClass();
  helpdeskLog: Logdata = new Logdata();
  LogData: any;
  issuelog: any;
  menuItems: MenuItem[];
  home: MenuItem;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private route: ActivatedRoute) { }
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    // this.buttonlable = 'Submit'
    this.home = { icon: 'pi pi-home', url: '#' };

    this.getAllPrograms();
    this.registerForm = this.formBuilder.group({
      programID: [{ value: '', disabled: true }],
      notes: [{ value: '', disabled: true }]
    });

    this.sub = this.route.params.subscribe(params => {
      console.log(params.id);
      this.getLogbyId(params.id);
      this.getRecord(params.id);
    });

    this.currentDate = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
  }
  getAllPrograms(): void {
    this.productService.getAllPrograms().subscribe(namelist => {
      this.namelist = namelist;
      console.log('namelist', namelist);
    });
  }

  getRecord(id): void {
    this.productService.getHelpdeskId(id).subscribe(data => {
      this.helpdeskprogram = data[0];
      console.log(data);
      this.registerForm.patchValue(data[0]);
      this.data = data[0];
      this.menuItems = [
        // {label:'Create Ticket', url:'/help-desk/create'},
        { label: this.data.ticketNum }
      ];
      // console.log("krsna", this.helpdeskprogram)
      this.isButtonVisible = false;
      this.isCloseBtnVisible = true;
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
          this.isCloseBtnVisible = false;
          this.registerForm.disable();
          this.buttonlable = 'Close';
          break;
        }
      }
    });

  }
  getLogbyId(id): void {
    this.productService.getLogbyId(id).subscribe(data => {
      this.LogData = data;
      console.log('logssss', data);
    });
  }
  onClose(id) {
    this.helpdeskprogram.status = 'Closed';
    this.productService.updateHelpdesk(this.helpdeskprogram)
      .subscribe(data => {
        console.log(data);
        // alert(data[0].id)
        this.getRecord(id);
        // this.router.navigate(['']);
      });
  }

  onSubmit(id) {
    this.helpdeskprogram.programID = this.registerForm.value.programID;
    this.helpdeskprogram.notes = this.registerForm.value.notes;
    // this.helpDeskForm.staffName = this.cmsUserData.staffName;
    // this.helpDeskForm.email = this.cmsUserData.staffEmail;
    // alert(JSON.stringify(this.helpdeskprogram));
    switch (this.buttonlable) {
      case 'Open': {
        this.helpdeskprogram.status = 'InProgress';
        this.productService.updateHelpdesk(this.helpdeskprogram)
          .subscribe(data => {
            console.log(data);
            // alert(data[0].id)
            this.getRecord(id);
            // this.router.navigate(['']);
          });
        // alert(JSON.stringify(this.helpdeskprogram));
        break;
      }
      case 'Resolve': {
        this.helpdeskprogram.status = 'Resolved';
        this.productService.updateHelpdesk(this.helpdeskprogram)
          .subscribe(data => {
            // alert(data)
            this.getRecord(id);
            console.log(data);
            // this.router.navigate(['']);
          });
        // alert(JSON.stringify(this.helpdeskprogram));
        break;
      }
      case 'Reopen': {
        this.helpdeskprogram.status = 'Reopened';
        // alert(JSON.stringify(this.helpdeskprogram));
        this.productService.updateHelpdesk(this.helpdeskprogram)
          .subscribe(data => {
            console.log(data);
            this.getRecord(id);
            // this.router.navigate(['']);
          });
        break;
      }
      case 'Reassign': {
        this.helpdeskprogram.status = 'InProgress';
        this.productService.updateHelpdesk(this.helpdeskprogram)
          .subscribe(data => {
            console.log(data);
            this.getRecord(id);
            // this.router.navigate(['']);
          });
        break;
      }
      default: {
        this.helpdeskprogram.status = 'Closed';
        this.productService.updateHelpdesk(this.helpdeskprogram)
          .subscribe(data => {
            console.log(data);
            this.getRecord(id);
            // this.router.navigate(['']);
          });
        break;
      }
    }
  }
  onSubmitLog(data) {
    this.currentDate = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss a', 'en-US', '+0530');
    this.helpdeskLog.id = data.id;
    this.helpdeskLog.name = data.staffName;
    this.helpdeskLog.message = this.issuelog;
    // this.helpdeskLog.date = this.currentDate
    // alert(JSON.stringify(this.helpdeskLog));

    this.productService.addHelpdeskLog(this.helpdeskLog)
      .subscribe(res => {
        console.log('issueadded', res);
        this.getLogbyId(data.id);
        this.issuelog = '';
        // alert("New Ticket Created")
      });
  }
}
