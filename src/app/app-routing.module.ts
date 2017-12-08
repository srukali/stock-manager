import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsFormComponent } from './news-form/news-form.component';

const routes: Routes = [
  { path: 'news-form', component: NewsFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
