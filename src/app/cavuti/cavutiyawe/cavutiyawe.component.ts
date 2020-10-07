import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "ns-cavutiyawe",
  templateUrl: "./cavutiyawe.component.html",
  styleUrls: ["./cavutiyawe.component.css"],
  moduleId: module.id
})
export class CavutiyaweComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit(): void {
  }

  get canGoBack() {
    return this.router.canGoBack();
    }

  onGoBack() {
    this.router.backToPreviousPage();
  }

}
