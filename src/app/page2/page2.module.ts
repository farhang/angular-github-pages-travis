import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { Page2RouterModule } from './page2-router.module';



@NgModule({
  declarations: [Page2Component],
  imports: [
    CommonModule,
    Page2RouterModule
  ]
})
export class Page2Module { }
