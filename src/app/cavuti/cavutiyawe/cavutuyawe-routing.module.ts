import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CavutiyaweComponent } from "./cavutiyawe.component";



const routes: Routes = [
    { path: "", component: CavutiyaweComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CavutiYaweRoutingModule { }
