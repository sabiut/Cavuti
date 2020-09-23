import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { FormsModule } from "@angular/forms";
import { VosaComponent } from './vosa/vosa.component';



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        HttpClientModule,
        FormsModule,
        NativeScriptFormsModule

    ],
    declarations: [
        AppComponent


     ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
