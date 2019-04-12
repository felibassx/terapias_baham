import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { MenumainComponent } from './shared/menumain/menumain.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NewsComponent,
    ReservaComponent,
    TestimoniosComponent,
    UbicacionComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    MenumainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
