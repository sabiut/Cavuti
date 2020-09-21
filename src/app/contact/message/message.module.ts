import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { MessageComponent } from "./message.component";
import { MessageRoutingModule } from "./message-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MessageRoutingModule


    ],
    declarations: [
        MessageComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [


  ]
})
export class MessageModule { }
