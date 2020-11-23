import {HomeComponent} from "../core/home/home.component";
import {AboutComponent} from "../core/about/about.component";
import {ContactUsComponent} from "../core/contact-us/contact-us.component";

export const App_Routes =[
  {path:'', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactUsComponent}

];
