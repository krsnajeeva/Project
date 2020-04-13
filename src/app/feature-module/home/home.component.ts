import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form = new FormGroup({
    ticket_no: new FormControl('', [Validators.required]),
    date_created: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    program: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required]),
    update_date: new FormControl('', [Validators.required]),

  });
  ngOnInit(): void {
  }
  uploadedFiles: any[] = [];
  constructor(){};

  
  get f(){
    return this.form.controls;
  }

  submit(){
    alert(JSON.stringify(this.form.value));
    console.log(this.form.value);
  }
}
