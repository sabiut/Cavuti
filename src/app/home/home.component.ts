import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { FijiData } from "../model/home.model";
import { RouterExtensions } from "nativescript-angular/router";
import { HomeMainService } from "../service/home.service";
import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";
import * as dialogs from "tns-core-modules/ui/dialogs";


@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    moduleId: module.id
})
export class HomeComponent implements OnInit {

    dataList: Array<FijiData> = [];


    constructor(private router: RouterExtensions, private dataservices: HomeMainService) {

    }

    ngOnInit(): void {
       this.dataservices.getInfo().subscribe(
          (data: Array<FijiData>) => {
              this.dataList = data;
              console.log(this.dataList);
          },
           (error: any) => console.log(error)
       );
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
