import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from "app/contato/contato.component";
import { ContatoRoutingModule } from "app/contato/contato-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule
  ],
  declarations: [
    ContatoComponent
  ],
})
export class ContatoModule { }
