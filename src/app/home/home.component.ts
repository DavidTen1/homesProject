import {Component, inject} from '@angular/core';
import {HousingLocation} from "../housing-location";
import {HousesService} from "../houses.service";
import {CommonModule} from "@angular/common";
import {HousingLocationComponent} from "../housing-location/housing-location.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] , standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ]
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousesService = inject(HousesService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
