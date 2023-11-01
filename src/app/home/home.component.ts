import {Component, inject} from '@angular/core';
import {HousingLocation} from "../housing-location";
import {HousesService} from "../houses.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})





export class HomeComponent {
  // housingLocationList: HousingLocation[] = [];
  // housingService: HousesService = inject(HousesService);

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'House',
    city: 'City',
    state: 'State',
    photo: `https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg`,
    availableExemplars: 99,
    hasWifi: true,
    hasLaundry: false,
  };

  housingLocationList: HousingLocation [] = [
    {
      id: 0,
      name: 'Kölner Dom',
      city: 'Cologne',
      state: 'Germany',
      photo: `https://img.ecmaps.de/remote/.jpg?url=https%3A%2F%2Fdam.destination.one%2F173310%2Fa164ccdb16477a3e603eec59c03627fdceb8528eb2c37005bde78f5d8fe4f23d%2Fkoelner-dom-koelntourismus-gmbh-axel-schulten.jpg&scale=both&mode=crop&quality=90&width=1356&height=1920`,
      availableExemplars: 1,
      hasWifi: true,
     hasLaundry: false
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'USA',
      photo: `https://static01.nyt.com/images/2021/04/26/realestate/26WYG-CA-slide-7TXT/26WYG-CA-slide-7TXT-superJumbo.jpg?quality=75&auto=webp`,
      availableExemplars: 20,
      hasWifi: true,
      hasLaundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Beijing',
      state: 'China',
      photo: `https://www.t-touching.com/upfile/image/20200701/1593607058_159717.jpg`,
      availableExemplars: 300,
      hasWifi: true,
      hasLaundry: false
    },
  ];

  constructor() {
  }

}
