import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEzCompositeComponent } from './ngx-ez-composite/ngx-ez-composite.component';
import { NgxEzH1Component } from './ngx-ez-h1/ngx-ez-h1.component';

@NgModule({
  declarations: [
    NgxEzCompositeComponent,
    NgxEzH1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NgxEzCompositeComponent,
    NgxEzH1Component
  ]
})
export class NgxEzComponentsModule { }
