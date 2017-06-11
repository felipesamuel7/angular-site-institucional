import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';
import { ContatoComponent } from './contato/contato.component';
import { ContatoModule } from "app/contato/contato.module";
import { QuemSomosModule } from "app/quem-somos/quem-somos.module";
import { NossaVisaoModule } from "app/nossa-visao/nossa-visao.module";
import { AppRoutingModule } from "app/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContatoModule,
    NossaVisaoModule,
    QuemSomosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
