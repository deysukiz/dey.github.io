import { Routes, RouterModule } from '@angular/router';

// import { NgModule } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { CvComponent } from './components/cv/cv.component';
import { ContentComponent } from './components/content/content.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PublicationsComponent } from './components/publications/publications.component';

const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent },
    // { path: 'cv', component: CvComponent },
    { path: 'content', component: ContentComponent },
    { path: 'projects', component: ProjectsComponent },
    // { path: 'publications', component: PublicationsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'about' }

];


export const APP_ROUTING = RouterModule.forRoot(
    APP_ROUTES,
    {
        useHash: true,
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
    }
);
