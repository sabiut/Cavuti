import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "ns-cavutikadavu",
  templateUrl: "./cavutikadavu.component.html",
  styleUrls: ["./cavutikadavu.component.css"],
  moduleId: module.id
})
export class CavutikadavuComponent implements OnInit {

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
