import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProvincesService } from "../service/province.service";
import { HomeMainService } from "../service/home.service";
import { VillageServices } from "../service/village.service";
import { VosaComponent } from "./vosa.component";
import { VosaRoutingModule } from "./vosa-routing.module";
import { VosaService } from "../service/vosa.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        VosaRoutingModule
    ],
    declarations: [
        VosaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ProvincesService,
        VillageServices,
        HomeMainService,
        VosaService

  ]
})
export class VosaModule { }
