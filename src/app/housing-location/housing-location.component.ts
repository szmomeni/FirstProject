import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;//not null and undentified

}
