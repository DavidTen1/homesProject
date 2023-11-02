import { Component, inject } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {HousesService} from "../houses.service";
import {HousingLocation} from "../housing-location";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingLocation: HousingLocation | undefined;
  housesService = inject(HousesService);

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housesService.getHousingLocationViaID(this.housingLocationId);
  }

}
