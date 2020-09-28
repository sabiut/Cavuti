import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";

@Component({
  selector: "ns-third-splash",
  templateUrl: "./third-splash.component.html",
  styleUrls: ["./third-splash.component.css"],
  moduleId: module.id
})
export class ThirdSplashComponent implements OnInit {

  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {
      setTimeout(() => {
          //this.router.navigate(["/home"]);
          
      }, 6000);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

  onCheckedChange(args: EventData){
        let sw = args.object as Switch;
        let isChecked = sw.checked;
        if (isChecked) {
            this.router.navigate(["/home"]);
            
        } else {
            this.router.navigate(["/map"]);
        }

}

}
