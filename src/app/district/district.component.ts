import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { DistrictService } from '../service/district.service';
import { ProvinceData } from '../model/province.model';
import { Subscription } from 'rxjs';

@Component({
  selector: "ns-district",
  templateUrl: "./district.component.html",
  styleUrls: ["./district.component.css"],
  moduleId: module.id
})
export class DistrictComponent implements OnInit {

    districtData: ProvinceData;

    // tslint:disable-next-line: max-line-length
    constructor(private districtservices: DistrictService, private route: ActivatedRoute, private router: RouterExtensions) { }


    ngOnInit(): void {
        this.route.paramMap.subscribe(params =>{
            const province: string =params.get("province");
            this.districtservices.getParameter(province).subscribe(
                        (data: ProvinceData) => {
                        this.districtData = data;
                        console.log(this.districtData);
                        },
                        (error) => console.error(error)
                        )
            })

            }



    onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
