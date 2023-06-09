import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FoodcourtComponent } from './pages/foodcourt/foodcourt.component';
import { WorkplaceComponent } from './pages/workplace/workplace.component';
import { Eops1Component } from './pages/eops1/eops1.component';
import { Eops2Component } from './pages/eops2/eops2.component';
import { Eops3Component } from './pages/eops3/eops3.component';
import { Eops4Component } from './pages/eops4/eops4.component';
import { HeadeImageComponent } from './pages/secciones/heade-image/heade-image.component';
import { ContenidoComponent } from './pages/secciones/contenido/contenido.component';
import { FooterImagesComponent } from './pages/secciones/footer-images/footer-images.component';
import { SharedModule } from 'src/app/Reutilizable/shared/shared.module';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { MapsComponent } from './pages/Utilities/maps/maps.component';


//Video
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import { AlertModule } from './pages/Utilities/alert';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    FoodcourtComponent,
    WorkplaceComponent,
    Eops1Component,
    Eops2Component,
    Eops3Component,
    Eops4Component,
    HeadeImageComponent,
    ContenidoComponent,
    FooterImagesComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    CarouselModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AlertModule,
  ]
})
export class LayoutModule { }
