import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,  HttpParams } from "@angular/common/http";
import { ProvinceData } from "../model/province.model";
import { FijiData } from '../model/home.model';

@Injectable()

export class ProvincesService{

    provincesArray: Array<FijiData> = [];

    url = "https://comproject.net/confederacy/";

    headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token 5a72afc446dd4c38e5f9975f99228c3b3e04828a"
    });

    constructor(private http: HttpClient) { }


    // getID(id: number) {
    //     return this.http.get<FijiData>(`${this.url}${id}/`, {headers: this.headers});
    //   }


    getParameter(confederancy_name: string){
        const province_param = new HttpParams({

            fromObject:{
                confederancy_name: confederancy_name
            }
        });

        return this.http.get(this.url, {params: province_param, headers: this.headers});

    }

}
