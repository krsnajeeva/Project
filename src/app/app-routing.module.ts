import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './feature-module/form/form.component';
import { HelpDeskListViewComponent } from './feature-module/list-view/list-view.component';

const routes: Routes = [
  {
    path: '',
    component: HelpDeskListViewComponent
  },
  {
    path: 'help-desk',
    children: [
      {
        path: 'create',
        component: FormComponent
      },
      {
        path: 'edit',
        component: FormComponent
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
