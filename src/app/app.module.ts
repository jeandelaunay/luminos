import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ProjectComponent } from './project/project.component';
import { LightpollutionComponent } from './lightpollution/lightpollution.component';
import {RouterModule, Routes} from "@angular/router";

export const ROUTES : Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'team', component: TeamComponent},
  {path:'project', component: ProjectComponent},
  {path:'lightPollution', component: LightpollutionComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    ProjectComponent,
    LightpollutionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
