import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProvincesService } from "../service/province.service";
import { HomeMainService } from "../service/home.service";
import { VillageServices } from "../service/village.service";
import { AcknowkedgementService } from "../service/acknowlegement.service";
import { AcknowledgementComponent } from "./acknowledgement.component";
import { AcknowledementRoutingModule } from "./acknowledgement-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AcknowledementRoutingModule
    ],
    declarations: [
        AcknowledgementComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        AcknowkedgementService

  ]
})
export class AcknowledgementModule { }
