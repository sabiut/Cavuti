import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";
import * as dialogs from "tns-core-modules/ui/dialogs";


@Component({
  selector: "ns-third-splash",
  templateUrl: "./third-splash.component.html",
  styleUrls: ["./third-splash.component.css"],
  moduleId: module.id
})
export class ThirdSplashComponent implements OnInit {

  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {
    dialogs.alert({
        message: "Explore ICavuti through our map view. You can switch between each view using this switch.",
        okButtonText: "OK"
    }).then(() => {
        console.log("Dialog closed!");
    });
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
            this.errorMessage()
            //this.router.navigate(["/map"]);
        }

}

  errorMessage(): void {
    dialogs.alert({
        message: "Sorry we are yet to have data for the Matanitu you have selected. However wer are working hard at getting this information in the near future.",
        okButtonText: "OK"
    }).then(() => {
        console.log("Dialog closed!");
    });
  }

}
