import { Injectable } from "@angular/core";
import { FijiData } from "../model/home.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable()

export class HomeMainService{

   fijiArray: Array<FijiData> = [];


   url = "https://comproject.net/confederacy/";


   headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token 5a72afc446dd4c38e5f9975f99228c3b3e04828a"
    });

   constructor(private http: HttpClient) { }

   getInfo(): any {
        return this.http.get(this.url, {headers: this.headers});
    }



   getID(id: number) {
        return this.http.get<FijiData>(`${this.url}${id}/`, {headers: this.headers});
      }

}
