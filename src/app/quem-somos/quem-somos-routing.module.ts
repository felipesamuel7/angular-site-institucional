import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { QuemSomosComponent } from "app/quem-somos/quem-somos.component";

@NgModule({
    imports: [
        RouterModule.forChild([
      {path: 'quem-somos', component: QuemSomosComponent}
    ])
    ],
    exports: [
        RouterModule
    ]
})
export class QuemSomosRoutingModule {

}