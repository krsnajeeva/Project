import { Component, OnInit } from '@angular/core';
// import { CarService } from "./service";
// import { Car } from "./cars";
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  
  // cars: Car[];

  cols: any[];

  // constructor(private carService: CarService) { }

  ngOnInit() {
      // this.carService.getCarsSmall().then(cars => this.cars = cars);

      this.cols = [
          { field: 'vin', header: 'Vin' },
          {field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  }
}
