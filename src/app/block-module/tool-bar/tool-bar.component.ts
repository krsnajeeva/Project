import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  constructor() { }
  display = false;

    showDialog() {
        this.display = true;
    }
  form = new FormGroup({
    search: new FormControl(),
  })
  ngOnInit() {
  }

}
