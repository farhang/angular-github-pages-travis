import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { Page1RouterModule } from './page1-router.module';



@NgModule({
  declarations: [Page1Component],
  imports: [
    CommonModule,
    Page1RouterModule
  ]
})
export class Page1Module { }
