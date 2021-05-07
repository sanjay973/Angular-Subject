import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = "/api/v1/projectActors?node_id=";


  constructor(private http: HttpClient) { }

  getData(nodeId) {
    return this.http.get(this.url + nodeId);
  }
  cartItemsArray = [];
  numberOfItemsIncart = new BehaviorSubject([]);
  totalPrice=new BehaviorSubject(0);
  addToCart(category) {
    const alreadyPresent = this.cartItemsArray.find((item) => {
      return parseInt(item.user_id) === parseInt(category.user_id);
    })
    if (alreadyPresent) return;
    else {
      this.cartItemsArray.push(category);
    }
    let price=this.totalPrice.getValue();
    price+=parseInt(category.price)
    this.totalPrice.next(price);
    this.numberOfItemsIncart.next(this.cartItemsArray);
  }
}
