import { NgModule } from '@angular/core';
import { EzComponentsComponent } from './ez-components.component';
import { EzH1Component } from './ez-h1/ez-h1.component';



@NgModule({
  declarations: [
    EzComponentsComponent,
    EzH1Component
  ],
  imports: [
  ],
  exports: [
    EzComponentsComponent,
    EzH1Component
  ]
})
export class EzComponentsModule { }
