import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }
    
  ngOnInit() {
      this.items = [
          {label: 'Angular.io', icon: 'pi pi-external-link', url: 'http://angular.io'},
          {label: 'Theming', icon: 'pi pi-palette', routerLink: ['/theming']}
      ];
  }

}
