import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { AcknowkedgementData } from "../model/acknowledgement";


@Injectable()

export class AcknowkedgementService{

    villageData: Array<AcknowkedgementData> = [];

    url = "https://comproject.net/villages";


    headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token 5a72afc446dd4c38e5f9975f99228c3b3e04828a"
    });

    constructor(private http: HttpClient, private route: ActivatedRoute) { }


    getParameter(village_name: string){
        const province_param = new HttpParams({
            fromObject:{
                village_name: village_name
            }
        });

        return this.http.get(this.url, {params: province_param,  headers: this.headers});

    }

}
