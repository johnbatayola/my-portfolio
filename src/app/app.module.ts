import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExpertiseAreaComponent } from './components/expertise-area/expertise-area.component';
import { AwesomeJourneyComponent } from './components/awesome-journey/awesome-journey.component';
import { RecentWorksComponent } from './components/recent-works/recent-works.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutMeComponent,
    ExpertiseAreaComponent,
    AwesomeJourneyComponent,
    RecentWorksComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
