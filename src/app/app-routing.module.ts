import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  ShareholderComponent,
} from './shareholders/pages/shareholder/shareholder.component';
import {
  TitlePageComponent,
} from './titles/pages/title-page/title-page.component';

const routes: Routes = [
  {
    path: 'accionistas',
    component: ShareholderComponent
  },
  {
    path: 'titulos',
    component: TitlePageComponent
  },
  {
  path: '**',
  redirectTo: 'home'
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
