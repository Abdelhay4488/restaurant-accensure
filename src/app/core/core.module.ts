import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {RouterModule} from "@angular/router";
import {CarouselComponent} from './components/carousel/carousel.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactUsComponent, CarouselComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],

})
export class CoreModule { }
