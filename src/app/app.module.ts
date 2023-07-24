import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MobileToggleComponent } from './components/navbar/mobile-toggle/mobile-toggle.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PrinciplesComponent } from './components/principles/principles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    MobileToggleComponent,
    PortfolioSectionComponent,
    FooterComponent,
    HomeComponent,
    AboutPageComponent,
    ContactPageComponent,
    PrinciplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
