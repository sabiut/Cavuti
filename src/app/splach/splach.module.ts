import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SplachRoutingModule } from "./splach-routing.module";
import { SplachComponent } from "./splach.component";

@NgModule({
    imports: [
       NativeScriptCommonModule,
       SplachRoutingModule
    ],
    declarations: [
        SplachComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [


  ]
})
export class SplachModule { }
