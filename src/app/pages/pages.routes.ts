import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { ReservaComponent } from './reserva/reserva.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';






const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
             { path: 'home', component: HomeComponent },
             { path: 'about', component: AboutComponent },
             { path: 'contact', component: ContactComponent },
             { path: 'news', component: NewsComponent },
             { path: 'reserva', component: ReservaComponent },
             { path: 'testimonios', component: TestimoniosComponent },
             { path: 'ubicacion', component: UbicacionComponent },
             { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
   }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );