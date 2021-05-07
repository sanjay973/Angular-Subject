import { Component } from '@angular/core';
import { Actor } from 'actor';
import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';
import { InitlizationService } from './initialization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-commerce';
  constructor(private service:ApiServiceService,private init:InitlizationService){

  }
  data:Observable<Actor[]>;
  ngOnInit(){
    this.init.getActors(65913);
  }
}
