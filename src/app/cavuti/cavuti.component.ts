import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: "ns-search",
  templateUrl: "./cavuti.component.html",
  styleUrls: ["./cavuti.component.css"],
  moduleId: module.id
})
export class CavutiComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit(): void {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
