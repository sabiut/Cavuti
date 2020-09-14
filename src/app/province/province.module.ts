import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProvinceComponent } from "./province.component";
import { ProvinceRoutingModule } from "./province-routing.module";
import { ProvincesService } from "../service/province.service";
import { HomeMainService } from "../service/home.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProvinceRoutingModule
    ],
    declarations: [
        ProvinceComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ProvincesService,
        HomeMainService

  ]
})
export class ProvinceModule { }
