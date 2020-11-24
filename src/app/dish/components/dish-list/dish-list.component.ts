import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../models/dish.model";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  @Input() dishList: Dish[];

  constructor() { }

  ngOnInit(): void {
  }

}
