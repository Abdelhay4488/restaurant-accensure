import {Component, OnInit} from '@angular/core';
import {dishListDemoData} from "../../models/dish.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dishList = dishListDemoData;

  constructor() { }

  ngOnInit(): void {
  }

}
