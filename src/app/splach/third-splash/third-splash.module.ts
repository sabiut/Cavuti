import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ThirdSplachRoutingModule } from "./third-splash-routing.module";
import { ThirdSplashComponent } from "./third-splash.component";

@NgModule({
    imports: [
       NativeScriptCommonModule,
       ThirdSplachRoutingModule
    ],
    declarations: [
        ThirdSplashComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [


  ]
})
export class ThirdSplashModule { }
