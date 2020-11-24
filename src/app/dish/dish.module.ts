import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DishComponent} from './components/dish/dish.component';
import {DishListComponent} from './components/dish-list/dish-list.component';
import {HomeComponent} from "./components/home/home.component";
import {CarouselComponent} from "./components/carousel/carousel.component";


@NgModule({
  declarations: [
    DishComponent,
    DishListComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DishModule { }
