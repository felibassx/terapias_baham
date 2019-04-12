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
import { AdmUsersComponent } from './admin/pages/adm-users/adm-users.component';
import { AdmRolesComponent } from './admin/pages/adm-roles/adm-roles.component';
import { AdmPrivilegesComponent } from './admin/pages/adm-privileges/adm-privileges.component';
import { AdmPersonsComponent } from './admin/pages/adm-persons/adm-persons.component';
import { AdmSeguroSaludComponent } from './admin/pages/adm-seguro-salud/adm-seguro-salud.component';
import { AdmTerapeutasComponent } from './admin/pages/adm-terapeutas/adm-terapeutas.component';

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
    FooterComponent,
    AdmUsersComponent,
    AdmRolesComponent,
    AdmPrivilegesComponent,
    AdmPersonsComponent,
    AdmSeguroSaludComponent,
    AdmTerapeutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
