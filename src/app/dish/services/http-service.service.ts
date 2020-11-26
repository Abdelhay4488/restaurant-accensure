import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dish} from "../models/dish.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor(private httpClient:HttpClient) {}

  fetchData(){
    return this.httpClient.get("http://localhost:9191/products");
  }

  getDishByID(id:number){
    return this.httpClient.get("http://localhost:9191/productById/"+id);

  }

  updateData(dish:Dish){

    return this.httpClient.put("http://localhost:9191/update",dish);
  }

  deleteItem(id:number):Observable<any>{
    return this.httpClient.delete("http://localhost:9191/delete/"+id,{responseType: 'text'});
  }


}
