import { Component, OnInit } from '@angular/core';
import { Building } from '../building';

@Component({
  selector: 'app-building-form-component',
  templateUrl: './building-form-component.component.html',
  styleUrls: ['./building-form-component.component.scss']
})
export class BuildingFormComponentComponent implements OnInit {

  constructor() { }

  model:Building = new Building(1, 'My Second House', '21st baker street', 
      'Very cosy house');

  submitted = false;

  onSubmit() { this.submitted = true; }
  
  ngOnInit(): void {
    
  }

}
