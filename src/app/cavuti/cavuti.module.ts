import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProvincesService } from "../service/province.service";
import { HomeMainService } from "../service/home.service";
import { CavutiRoutingModule } from "../cavuti/cavuti-routing.module";
import { CavutiComponent } from "../cavuti/cavuti.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        CavutiRoutingModule

    ],
    declarations: [
        CavutiComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ProvincesService,
        HomeMainService

  ]
})
export class CavuitModule { }
