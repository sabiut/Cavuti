import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { ContactServices } from '../service/contact.service';


@NgModule({
    imports: [
        NativeScriptCommonModule,
        ContactRoutingModule,
        NativeScriptFormsModule

    ],
    declarations: [
        ContactComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers:[
        ContactServices
    ]
})
export class ContactModule { }
