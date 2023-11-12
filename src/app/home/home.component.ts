import { Component,inject } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
 //use services and injection
   housingLocationList: Housinglocation[] = [];
  
  constructor(private housingService:HousingService) {
    this.getlist();
  }
  getlist(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
