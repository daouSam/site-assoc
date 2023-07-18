import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CausesComponent } from './causes/causes.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { LayoutComponent } from './layout/layout.component';
import { ServicecComponent } from './servicec/servicec.component';
import { TeamsComponent } from './teams/teams.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HeadchildComponent } from './headchild/headchild.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,
  children: [
    {path: '', component: AccueilComponent},
    {
      path: 'hchild', component: HeadchildComponent,
       children: [
         {path: 'about', component: AboutComponent},
         {path: 'causes', component: CausesComponent},
         {path: 'contact', component: ContactComponent},
         {path: 'donate', component: DonateComponent},
         {path: 'servicec', component: ServicecComponent},
         {path: 'team', component: TeamsComponent},
         {path: 'testimonial', component: TestimonialComponent}
      ]
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
