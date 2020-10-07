import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "ns-cavutinalotu",
  templateUrl: "./cavutinalotu.component.html",
  styleUrls: ["./cavutinalotu.component.css"],
  moduleId: module.id
})
export class CavutinalotuComponent implements OnInit {

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
