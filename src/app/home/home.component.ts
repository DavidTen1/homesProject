import {Component, inject} from '@angular/core';
import {HousingLocation} from "../housing-location";
import {HousesService} from "../houses.service";
import {CommonModule} from "@angular/common";
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {filter} from "rxjs";

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
  filteredLocationList: HousingLocation[] = [];
  housingService: HousesService = inject(HousesService);
  cityInputName = ((document.getElementById("home-input")) as HTMLInputElement)?.value

  filterByCity(cityName: string){
 if (!cityName){
   this.filteredLocationList = this.housingLocationList;
 }

    this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().
    includes(cityName.toLowerCase()));

  }

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  protected readonly filter = filter;
}
