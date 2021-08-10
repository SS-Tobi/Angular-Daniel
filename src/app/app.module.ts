import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './shared/AuthInterceptor';
import {IsGuestInterceptor} from './shared/IsGuestInterceptor';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {OnboardingComponent} from "./views/onboarding/onboarding.component";
import {PaymentComponent} from "./views/payment/payment.component";

@NgModule({
  declarations: [
        AppComponent,
        OnboardingComponent,
        PaymentComponent
  ],
  imports: [
      BrowserModule,
      SharedModule,
      HttpClientModule,
      BrowserAnimationsModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
      AppRoutingModule,
      DragDropModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IsGuestInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
