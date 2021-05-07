import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { ApiServiceService } from './api-service.service';
import { InitlizationService } from './initialization.service';
import { ModelViewLocator } from './model-view-locator';
import { ProductSerializer } from './product-serializer';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    CartDetailComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiServiceService,InitlizationService,ModelViewLocator,ProductSerializer,CustomDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
