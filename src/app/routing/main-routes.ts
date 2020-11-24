import {HomeComponent} from "../dish/components/home/home.component";
import {AboutComponent} from "../core/components/about/about.component";
import {ContactUsComponent} from "../core/components/contact-us/contact-us.component";

export const App_Routes =[
  {path:'', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactUsComponent}

];
