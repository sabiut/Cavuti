import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
  selector: "ns-second-splash",
  templateUrl: "./second-splash.component.html",
  styleUrls: ["./second-splash.component.css"],
  moduleId: module.id
})
export class SecondSplashComponent implements OnInit {

    constructor(private router: RouterExtensions) { }

    ngOnInit(): void {
            setTimeout(() => {
            this.router.navigate(["/third-splash"], {clearHistory: true});
          }, 6000);

          }

  }


