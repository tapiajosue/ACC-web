import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';

import { AccCrudComponent } from './components/acc-crud/acc-crud.component';
import { AccTableComponent } from './components/acc-table/acc-table.component';
import {
  ShareholderComponent,
} from './pages/shareholder/shareholder.component';

@NgModule({
  declarations: [ShareholderComponent, AccTableComponent, AccCrudComponent],
  imports: [
    CommonModule,

    NzTableModule,
    NzInputModule,
    NzMenuModule,
  ],
  exports:[
    ShareholderComponent
  ]
})
export class ShareholdersModule { }
