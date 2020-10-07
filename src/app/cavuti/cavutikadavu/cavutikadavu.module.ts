import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CavutiKadavuRoutingModule } from "./cavutikadavu-routing.module";
import { CavutikadavuComponent } from "./cavutikadavu.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        CavutiKadavuRoutingModule
    ],
    declarations: [
        CavutikadavuComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]

})
export class CavutikadavuModule { }
