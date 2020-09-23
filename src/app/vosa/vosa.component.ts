import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";
import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { VosaService } from "../service/vosa.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { VosaData } from "../model/vosa";

@Component({
  selector: "ns-vosa",
  templateUrl: "./vosa.component.html",
  styleUrls: ["./vosa.component.css"],
  moduleId: module.id
})
export class VosaComponent implements OnInit {
    details: Array<VosaData>;

    constructor(
    private aboutservice: VosaService,
    private route: ActivatedRoute, private router: RouterExtensions) {

   }

    ngOnInit(): void {
    this.details = this.aboutservice.getAbout();
  }

    toggle(item: VosaData) {
    item.visible = !item.visible;

}
    onCheckedChange(args: EventData) {
    let sw = args.object as Switch;
    let isChecked = sw.checked; // boolean
    if (isChecked) {
        this.router.navigate(["/vosa"]);
    } else {
        this.router.navigate(["/about"]);
    }
}

    onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
