import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/second-splash", pathMatch: "full" },
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
    {path: "cavuti", loadChildren: () => import("~/app/cavuti/cavuti.module").then((m) => m.CavuitModule)},
    {path: "message", loadChildren: () => import("~/app/contact/message/message.module").then((m) => m.MessageModule)},
    {path: "vosa", loadChildren: () => import("~/app/vosa/vosa.module").then((m) => m.VosaModule)},
    {path: "first-splash", loadChildren: () => import("~/app/splach/splach.module").then((m) => m.SplachModule)},
    // tslint:disable-next-line: max-line-length
    {path: "second-splash", loadChildren: () => import("~/app/splach/second-splash/second-splash.module").then((m) => m.SecondSplashModule)},
    // tslint:disable-next-line: max-line-length
    {path: "third-splash", loadChildren: () => import("~/app/splach/third-splash/third-splash.module").then((m) => m.ThirdSplashModule)},
    // tslint:disable-next-line: max-line-length
    {path: "cavutikadavu", loadChildren: () => import("~/app/cavuti/cavutikadavu/cavutikadavu.module").then((m) => m.CavutikadavuModule)},
    // tslint:disable-next-line: max-line-length
    {path: "cavutiyawe", loadChildren: () => import("~/app/cavuti/cavutiyawe/cavutiyawe.module").then((m) => m.CavutiyaweModule)},
    // tslint:disable-next-line: max-line-length
    {path: "cavutinalotu", loadChildren: () => import("~/app/cavuti/cavutinalotu/cavutinalotu.module").then((m) => m.CavutinalotuModule)},
    {path: "map", loadChildren: () => import("~/app/map/map.module").then((m) => m.MapModule)}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
