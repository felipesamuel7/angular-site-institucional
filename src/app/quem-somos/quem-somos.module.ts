import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemSomosComponent } from "app/quem-somos/quem-somos.component";
import { QuemSomosRoutingModule } from "app/quem-somos/quem-somos-routing.module";

@NgModule({
  imports: [
    CommonModule,
    QuemSomosRoutingModule
  ],
  declarations: [
    QuemSomosComponent
  ],
})
export class QuemSomosModule { }
