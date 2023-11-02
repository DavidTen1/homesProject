import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";

const routeConfig: Routes = [
  {title: 'Home page',
    component: HomeComponent,
    path: ''
  },
  {title: 'Details',
  component: DetailsComponent,
  path:'details/:id'
  }


];

export default  routeConfig;
