import { Injectable } from '@angular/core';
import { Actor } from 'actor';
import { map } from 'rxjs/operators';
import { ApiServiceService } from './api-service.service';
import { ModelViewLocator } from './model-view-locator';
import { ProductSerializer } from './product-serializer';

@Injectable({
  providedIn: 'root'
})
export class InitlizationService {

  constructor(private service: ApiServiceService, public serializer: ProductSerializer, private modelView: ModelViewLocator) { }


  getActors(nodeId: number): void {
    this.service.getData(nodeId)
      .pipe(
        map((res) => {
          return this.serializer.actorsSerializer(res);
        })
      ).subscribe(
        (list: Actor[]) => {
          this.modelView.projectActors.next(list);
          for (let i = 0; i <= list.length; i++) {
            let r = list[i]?.role;
            if(r=='manager'){
              list[i].price=1000;
            }
            else if(r=='programmer'){
              list[i].price=800;
            }
            else if(r=='creator'){
              list[i].price=500;
            }
            else if(r=='testor'){
              list[i].price=400;
            }
            else if(r=='html'){
              list[i].price=300;
            }
            
            else {
              list[i].price=100;
            }
        }
      },
        (error) => {
          console.log(error)
        }
      )
  }

}