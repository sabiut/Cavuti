import { Injectable } from "@angular/core";
import { FijiData } from "../model/home.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ContactData } from "../model/contact";


@Injectable()

export class ContactServices{

    url = "https://comproject.net/contact/";


    headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token 5a72afc446dd4c38e5f9975f99228c3b3e04828a"
    });

    constructor(private http: HttpClient) { }

//     submitContact(first_name: string, last_name: string, email: string, message: string){
//         const body = JSON.stringify({first_name, last_name, email, message});

//         return this.http.post<ContactData>(this.url, body, {headers: this.headers});

// }

    submitContact(first_name: string, last_name: string, email: string, message: string){
        const body = JSON.stringify({first_name, last_name, email, message});
        return this.http.post<ContactData>(this.url, body, {headers: this.headers});
}
}
