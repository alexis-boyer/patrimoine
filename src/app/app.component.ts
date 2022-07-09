import { Component } from '@angular/core';
import { Building } from './building';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  submitted = false;

  onSubmit() { this.submitted = true; }

}
