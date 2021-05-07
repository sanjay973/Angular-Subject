import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(private service:ApiServiceService) { }
  response;
  totalPrice=0;
  ngOnInit() {
    this.service.numberOfItemsIncart.subscribe((data:any)=>{
      this.response=data;
    })
    this.service.totalPrice.subscribe((data)=>{
        this.totalPrice=data
    })
  }

}
