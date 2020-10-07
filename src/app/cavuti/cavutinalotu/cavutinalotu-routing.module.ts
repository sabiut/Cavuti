import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CavutinalotuComponent } from "./cavutinalotu.component";



const routes: Routes = [
    { path: "", component: CavutinalotuComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CavutiNalotuRoutingModule { }
