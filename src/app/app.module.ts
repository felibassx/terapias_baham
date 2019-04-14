import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


// páginas
import { PagesComponent } from './pages/pages.component';

// login
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';


// admin
import { AdmUsersComponent } from './admin/pages/adm-users/adm-users.component';
import { AdmRolesComponent } from './admin/pages/adm-roles/adm-roles.component';
import { AdmPrivilegesComponent } from './admin/pages/adm-privileges/adm-privileges.component';
import { AdmPersonsComponent } from './admin/pages/adm-persons/adm-persons.component';
import { AdmSeguroSaludComponent } from './admin/pages/adm-seguro-salud/adm-seguro-salud.component';
import { AdmTerapeutasComponent } from './admin/pages/adm-terapeutas/adm-terapeutas.component';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdmUsersComponent,
    AdmRolesComponent,
    AdmPrivilegesComponent,
    AdmPersonsComponent,
    AdmSeguroSaludComponent,
    AdmTerapeutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    APP_ROUTES,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
