import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { CvComponent } from './components/cv/cv.component';
import { AboutComponent } from './components/about/about.component';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { CvService } from './services/cv.service';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PublicationsComponent } from './components/publications/publications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    CvComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    CvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
