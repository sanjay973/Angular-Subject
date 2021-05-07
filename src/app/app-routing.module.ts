import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

const routes: Routes = [
  {
    path:'',component:ActorComponent
  },
  {
    path:'cartDetail',component:CartDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
