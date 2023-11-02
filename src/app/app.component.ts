import { Component, inject } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {HousingLocationComponent} from "./housing-location/housing-location.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ]
})
export class AppComponent {
  title = 'homesProject';
}
