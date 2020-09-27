import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SecondSplashComponent } from "./second-splash.component";



const routes: Routes = [
    { path: "", component: SecondSplashComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SecondSplashRoutingModule { }
