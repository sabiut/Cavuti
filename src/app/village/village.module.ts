import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { VillageComponent } from "./village.component";
import { VillageRoutingModule } from "./village-routing.module";
import { ProvincesService } from "../service/province.service";
import { HomeMainService } from "../service/home.service";
import { VillageServices } from '../service/village.service';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        VillageRoutingModule
    ],
    declarations: [
        VillageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ProvincesService,
        VillageServices,
        HomeMainService

  ]
})
export class VillageModule { }
