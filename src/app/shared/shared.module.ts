import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { MenumainComponent } from './menumain/menumain.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SlidermainComponent } from './slidermain/slidermain.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
      HeaderComponent,
      BreadcrumbsComponent,
      FooterComponent,
      MenumainComponent,
      NopagefoundComponent,
      SlidermainComponent
    ],
    exports: [
      HeaderComponent,
      BreadcrumbsComponent,
      FooterComponent,
      MenumainComponent,
      NopagefoundComponent,
      SlidermainComponent
    ]
  })
  export class SharedModule { }
