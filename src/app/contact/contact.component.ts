import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ContactData } from "../model/contact";
import { ContactServices } from "../service/contact.service";
import { RouterExtensions } from 'nativescript-angular/router';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "contact",
    templateUrl: "./contact.component.html",
    moduleId: module.id
})
export class ContactComponent implements OnInit {

    postContact: ContactData;

    // tslint:disable-next-line: max-line-length
    constructor(private route: ActivatedRoute, private contactservices: ContactServices, private router: RouterExtensions) {

    }

    // tslint:disable-next-line: no-empty
    ngOnInit(): void {
    }

    newContact(firstName: string, lastName: string, email: string, message: string){
        this.contactservices.submitContact(firstName, lastName,
            email, message).subscribe(
            (_result) => this.router.navigate(["/home"]),
            (error) => console.log(error)
            );

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
