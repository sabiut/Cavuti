import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DistrictRoutingModule } from "./district-routing.module";
import {  DistrictComponent } from "./district.component";
import { HomeMainService } from "../service/home.service";
import { DistrictService } from '../service/district.service';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DistrictRoutingModule
    ],
    declarations: [
        DistrictComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [ 
      HomeMainService,
      DistrictService
  ]
})
export class DistrictModule { }
