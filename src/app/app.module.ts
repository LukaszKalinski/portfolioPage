import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { MainHeaderComponent } from './pages/header/main-header/main-header.component';
import { MainFooterComponent } from './pages/footer/main-footer/main-footer.component';
import { HomeComponent } from './pages/content/home/home.component';
import { HeaderMenuComponent } from './pages/header/header-menu/header-menu.component';
import { HeaderIconsComponent } from './pages/header/header-icons/header-icons.component';
import { AboutComponent } from './pages/content/about/about.component';
import { PortfolioComponent } from './pages/content/portfolio/portfolio.component';
import { SingleProjectComponent } from './pages/content/portfolio/single-project/single-project.component';
import { ContactComponent } from './pages/content/contact/contact.component';
import { TimelineComponent } from './pages/content/about/timeline/timeline.component';
import { CarouselComponent } from './shared/carousel/carousel.component';

import { WindowSizeSevice } from './services/window-size.service';
import { MenuService } from './services/menu.service';
import { ServerService } from './services/server.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainHeaderComponent,
    MainFooterComponent,
    HomeComponent,
    HeaderMenuComponent,
    HeaderIconsComponent,
    AboutComponent,
    PortfolioComponent,
    SingleProjectComponent,
    ContactComponent,
    TimelineComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    ScrollingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [
    WindowSizeSevice,
    MenuService,
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
