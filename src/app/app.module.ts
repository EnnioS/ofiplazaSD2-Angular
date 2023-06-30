import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './Components/Layout/layout.component';
import { SharedModule } from './Reutilizable/shared/shared.module';
import { LayoutModule } from './Components/Layout/layout.module';

import {CarouselModule} from 'ngx-owl-carousel-o';
import { GoogleMapsService } from './Services/google-maps.service';
import { EmailService } from './Services/email.service';

import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [
    GoogleMapsService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
