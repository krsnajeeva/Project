import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './feature-module/countries-list/countries-list.component';
import { HomeComponent } from './feature-module/home/home.component';
import { ToolBarComponent } from './block-module/tool-bar/tool-bar.component';

const routes: Routes = [
  { path: 'CountriesList', component: CountriesListComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'tool', component: ToolBarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
