import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TitlePageComponent } from './pages/title-page/title-page.component';

@NgModule({
  declarations: [
    TitlePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitlePageComponent
  ]
})
export class TitlesModule { }
