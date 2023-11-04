import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,    HomeComponent, BrowserModule, HousingLocationComponent, RouterModule,
    DetailsComponent
  ],
  // which services to use
  providers: [],
  // which components to start
  bootstrap: []
})
export class AppModule { }
