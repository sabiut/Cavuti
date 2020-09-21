import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
  selector: "ns-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
  moduleId:module.id
})
export class MessageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: RouterExtensions) { }

  ngOnInit(): void {
  }


  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
