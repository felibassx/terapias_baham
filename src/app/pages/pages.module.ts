import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ReservaComponent } from './reserva/reserva.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';

import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
      HomeComponent,
      ContactComponent,
      AboutComponent,
      NewsComponent,
      ReservaComponent,
      TestimoniosComponent,
      UbicacionComponent,
      PagesComponent
    ],
    exports: [
      HomeComponent,
      ContactComponent,
      AboutComponent,
      NewsComponent,
      ReservaComponent,
      TestimoniosComponent,
      UbicacionComponent

    ],
    imports: [
      SharedModule,
      PAGES_ROUTES,
      FormsModule
    ]
  })
  export class PagesModule { }
