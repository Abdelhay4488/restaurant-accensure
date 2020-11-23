import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactUsComponent} from './contact-us/contact-us.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactUsComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
