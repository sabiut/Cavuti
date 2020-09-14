import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ProvinceData } from "../model/province.model";
import { ProvincesService } from "../service/province.service";
import { ActivatedRoute } from '@angular/router';
import { HomeMainService } from '../service/home.service';
import { FijiData } from "../model/home.model";
import { filter } from 'rxjs/operators';

@Component({
  selector: "ns-province",
  templateUrl: "./province.component.html",
  styleUrls: ["./province.component.css"],
  moduleId: module.id
})
export class ProvinceComponent implements OnInit {

  details: FijiData;

  constructor(private route: ActivatedRoute, private router: RouterExtensions,
              private provinceservice: ProvincesService) {

    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
        const confederancy_name: string =params.get("confederancy_name");
        this.provinceservice.getParameter(confederancy_name).subscribe(
                    (data: FijiData) => {
                    this.details = data;
                    console.log(confederancy_name);
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
