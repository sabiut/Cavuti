import { Component, OnInit } from "@angular/core";
import { VillageData } from "../model/village.model";
import { AcknowkedgementService } from "../service/acknowlegement.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AcknowkedgementData } from "../model/acknowledgement";

@Component({
  selector: "ns-acknowledgement",
  templateUrl: "./acknowledgement.component.html",
  styleUrls: ["./acknowledgement.component.css"]
})
export class AcknowledgementComponent implements OnInit {

    villageData: AcknowkedgementData;
    // tslint:disable-next-line: max-line-length
    constructor(private districtservices: AcknowkedgementService, private route: ActivatedRoute, private router: RouterExtensions) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const village_name: string = params.get("village");
            this.districtservices.getParameter(village_name).subscribe(
                        (data: AcknowkedgementData) => {
                        this.villageData = data;
                        console.log(village_name);
                        console.log(this.villageData);
                        },
                        (error) => console.error(error)
                        );
            });

            }
    get canGoBack() {
                return this.router.canGoBack();
            }
        
    onGoBack() {
                this.router.backToPreviousPage();
            }
    onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
