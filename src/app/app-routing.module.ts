import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { JobalertComponent } from './components/public/jobalert/jobalert.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { PostsComponent } from './components/public/posts/posts.component';
import { EducationComponent } from './components/public/education/education.component';
import { DescriptionComponent } from './components/public/description/description.component';
import { AddjobsComponent } from './components/private/addjobs/addjobs.component';
import { AddeducationComponent } from './components/private/addeducation/addeducation.component';
import { AddpostsComponent } from './components/private/addposts/addposts.component';
import { AdddescriptionComponent } from './components/private/adddescription/adddescription.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'jobalert', component:JobalertComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'posts/:id', component:PostsComponent },
  { path: 'education/:id', component:EducationComponent },
  { path: 'description/:id', component:DescriptionComponent },
  { path: 'addjobs', component:AddjobsComponent },
  { path: 'addeducation', component:AddeducationComponent },
  { path: 'addposts', component:AddpostsComponent },
  { path: 'adddescription', component:AdddescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  HomeComponent,
  LoginComponent,
  JobalertComponent,
  DashboardComponent,
  PostsComponent,
  EducationComponent,
  DescriptionComponent,
  AddjobsComponent,
  AddeducationComponent,
  AddpostsComponent,
  AdddescriptionComponent,
]