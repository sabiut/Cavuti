import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SecondSplashComponent } from "./second-splash.component";
import { SecondSplashRoutingModule } from "./second-splash-routing.module";

@NgModule({
    imports: [
       NativeScriptCommonModule,
       SecondSplashRoutingModule
    ],
    declarations: [
        SecondSplashComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [


  ]
})
export class SecondSplashModule { }
