import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { VillageServices } from "../service/village.service";
import { DistrictData } from "../model/distric.model";


@Component({
  selector: "ns-village",
  templateUrl: "./village.component.html",
  styleUrls: ["./village.component.css"]
})
export class VillageComponent implements OnInit {

    districtData: DistrictData;
    // tslint:disable-next-line: max-line-length
    constructor(private districtservices: VillageServices, private route: ActivatedRoute, private router: RouterExtensions) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const district_name: string = params.get("district");
            this.districtservices.getParameter(district_name).subscribe(
                        (data: DistrictData) => {
                        this.districtData = data;
                        console.log(district_name);
                        console.log(this.districtData);
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
