import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NossaVisaoComponent } from "app/nossa-visao/nossa-visao.component";
import { NossaVisaoRoutingModule } from "app/nossa-visao/nossa-visao-routing.module";

@NgModule({
  imports: [
    CommonModule,
    NossaVisaoRoutingModule
  ],
  declarations: [
    NossaVisaoComponent
  ]
})
export class NossaVisaoModule { }
