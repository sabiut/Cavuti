import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CavutiYaweRoutingModule } from "./cavutuyawe-routing.module";
import { CavutiyaweComponent } from "./cavutiyawe.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CavutiYaweRoutingModule
    ],
    declarations: [
        CavutiyaweComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]

})
export class CavutiyaweModule { }
