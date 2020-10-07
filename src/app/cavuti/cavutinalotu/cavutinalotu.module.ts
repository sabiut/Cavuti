import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CavutiNalotuRoutingModule } from "./cavutinalotu-routing.module";
import { CavutinalotuComponent } from "./cavutinalotu.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CavutiNalotuRoutingModule

    ],
    declarations: [
        CavutinalotuComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]

})
export class CavutinalotuModule { }
