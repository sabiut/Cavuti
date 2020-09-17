import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AboutService } from "../service/about.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { AboutData } from "../model/about";

@Component({
    selector: "about",
    templateUrl: "./about.component.html",
    moduleId: module.id

})
export class AboutComponent implements OnInit {

    details: Array<AboutData>;

    constructor(
        private aboutservice: AboutService,
        private route: ActivatedRoute, private router: RouterExtensions) {

    }

    ngOnInit(): void {
        this.details = this.aboutservice.getAbout();
        //const id = +this.route.snapshot.params.id;
        //this.details = this.aboutservice.getAboutID(id);

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
