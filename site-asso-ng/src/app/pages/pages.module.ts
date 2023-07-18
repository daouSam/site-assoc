import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { CausesComponent } from './causes/causes.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { ServicecComponent } from './servicec/servicec.component';
import { TeamsComponent } from './teams/teams.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HeadchildComponent } from './headchild/headchild.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AccueilComponent,
    LayoutComponent,
    AboutComponent,
    CausesComponent,
    ContactComponent,
    DonateComponent,
    ServicecComponent,
    TeamsComponent,
    TestimonialComponent,
    HeadchildComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule { }
