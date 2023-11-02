import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HousingLocation} from "../housing-location";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterLink]
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}
