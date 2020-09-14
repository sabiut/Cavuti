import { Injectable } from "@angular/core";
import { ProvinceData} from "../model/province.model";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Observable } from "tns-core-modules/ui/page";
import { ActivatedRoute } from '@angular/router';

@Injectable()

export class DistrictService {

    districtArray: Array<ProvinceData> = [];


    url = "https://comproject.net/provinces/";


    headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token 5a72afc446dd4c38e5f9975f99228c3b3e04828a"
    });

    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    // getInfo(): any {
    //     return this.http.get(this.url, {headers: this.headers});
    // }


    // getProvince(province: any){
    //     return this.http.get(`${this.url}${province}/`, {headers: this.headers});
    //   }


    getParameter(province: string){
        const province_param = new HttpParams({
            fromObject:{
                province_name: province
            }
        });
        return this.http.get(this.url, {params: province_param,  headers: this.headers});

    }



}
