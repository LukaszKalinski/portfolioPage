import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/content/home/home.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent, children: [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: HomeComponent},
  ]},
];

@NgModule(
  {
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
  })

export class AppRoutingModule {

}
