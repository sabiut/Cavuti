import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "contact", loadChildren: () => import("~/app/contact/contact.module").then((m) => m.ContactModule) },
    { path: "about", loadChildren: () => import("~/app/about/about.module").then((m) => m.AboutModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
      // tslint:disable-next-line: max-line-length
    {path: "province/:confederancy_name", loadChildren: () => import("~/app/province/province.module").then((m) => m.ProvinceModule)},

    // tslint:disable-next-line: max-line-length
    {path: "district/:province", loadChildren: () => import("~/app/district/district.module").then((m) => m.DistrictModule)},
    // tslint:disable-next-line: max-line-length
    {path: "village/:district", loadChildren: () => import("~/app/village/village.module").then((m) => m.VillageModule)},
    // tslint:disable-next-line: max-line-length
    {path: "acknowledgement/:village", loadChildren: () => import("~/app/acknowledgement/acknowledgement.module").then((m) => m.AcknowledgementModule)},
    {path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule)}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
