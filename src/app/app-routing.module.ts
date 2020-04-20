import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './feature-module/countries-list/countries-list.component';
import { FormComponent } from './feature-module/form/form.component';

const routes: Routes = [
  { path: 'CountriesList', component: CountriesListComponent },
  { path: 'Home', component: FormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
