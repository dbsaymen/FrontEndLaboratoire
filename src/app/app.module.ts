import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactPageComponent } from './component/contact-page/contact-page.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MembersComponent } from './component/members/members.component';
import { PublicationsComponent } from './component/publications/publications.component';
import { EventsComponent } from './component/events/events.component';
import { AboutComponent } from './component/about/about.component';
import { LeftSideBarComponent } from './component/left-side-bar/left-side-bar.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    FooterComponent,
    ContactPageComponent,
    NotFoundComponent,
    MembersComponent,
    PublicationsComponent,
    EventsComponent,
    AboutComponent,
    LeftSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
