import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { FijiData } from "../model/home.model";
import { RouterExtensions } from "nativescript-angular/router";
import { HomeMainService } from "../service/home.service";


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



}
