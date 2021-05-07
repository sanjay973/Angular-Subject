import { Component, OnInit } from '@angular/core';
import { Actor } from 'actor';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { InitlizationService } from '../initialization.service';
import { ModelViewLocator } from '../model-view-locator';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  constructor(private service: ApiServiceService, private init: InitlizationService, private modelView: ModelViewLocator) {

  }
  response: Observable<Actor[]>;
  data: Observable<Actor[]>;
  ngOnInit() {
    this.response = this.modelView.projectActors.asObservable();
    this.service.numberOfItemsIncart.subscribe((data) => {
      this.cartItems = data.length
    })
  }
  cartItems = 0;
  cartItemsArray = [];
  buttonClick(category) {
    this.service.addToCart(category);
    this.service.numberOfItemsIncart.subscribe((data) => {
      this.cartItems = data.length
    })
  }
}
