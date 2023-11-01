import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HousingLocation} from "../housing-location";

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
  standalone: true,
  imports: [CommonModule, HousingLocationComponent]
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}
