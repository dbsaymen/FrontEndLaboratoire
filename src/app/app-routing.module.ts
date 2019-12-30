import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './component/main-page/main-page.component';
import {ContactPageComponent} from './component/contact-page/contact-page.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {PublicationsComponent} from './component/publications/publications.component';
import {EventsComponent} from './component/events/events.component';
import {MembersComponent} from './component/members/members.component';
import {AboutComponent} from './component/about/about.component';
import {LoginComponent} from './component/login/login.component';
import {MemberPageComponent} from './component/member-page/member-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'members', component: MembersComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'members/:publicID', component: MemberPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
