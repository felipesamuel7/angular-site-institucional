import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { NossaVisaoComponent } from "app/nossa-visao/nossa-visao.component";

@NgModule({
    imports: [
        RouterModule.forChild([
      {path: 'nossa-visao', component: NossaVisaoComponent}
    ])
    ],
    exports: [
        RouterModule
    ]
})
export class NossaVisaoRoutingModule {

}