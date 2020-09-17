import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { AboutService } from '../service/about.service';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AboutRoutingModule
    ],
    declarations: [
        AboutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],

    providers:[
     AboutService
    ]
})
export class AboutModule { }
