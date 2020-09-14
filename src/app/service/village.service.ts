import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { ActivatedRoute } from "@angular/router";
import { DistrictData } from "../model/distric.model";

@Injectable()

export class VillageServices{

    villageData: Array<DistrictData> =[];

    url = "https://comproject.net/districts/";


    headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token 5a72afc446dd4c38e5f9975f99228c3b3e04828a"
    });

    constructor(private http: HttpClient, private route: ActivatedRoute) { }


    getParameter(district_name: string){
        const province_param = new HttpParams({
            fromObject:{
                district_name: district_name
            }
        });

        return this.http.get(this.url, {params: province_param,  headers: this.headers});

    }

}
