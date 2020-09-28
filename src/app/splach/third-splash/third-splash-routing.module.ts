import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ThirdSplashComponent } from "./third-splash.component";

const routes: Routes = [
    { path: "", component: ThirdSplashComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ThirdSplachRoutingModule { }
