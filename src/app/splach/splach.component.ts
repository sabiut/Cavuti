import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";


@Component({
  selector: "ns-splach",
  templateUrl: "./splach.component.html",
  styleUrls: ["./splach.component.css"],
  moduleId: module.id
})
export class SplachComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/second-splash"], {clearHistory: true});

  },4000);

  }
}
