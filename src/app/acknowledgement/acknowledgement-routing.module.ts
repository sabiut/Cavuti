import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AcknowledgementComponent } from "./acknowledgement.component";


const routes: Routes = [
    { path: "", component: AcknowledgementComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AcknowledementRoutingModule { }
