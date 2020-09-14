import { ClassMethod } from "@angular/compiler";

export class DistrictData{
    province: number;
    province_code: string;
    district_name: string;

    constructor(province: number, province_code: string, distric_name: string){
        this.province = province;
        this.province_code = province_code;
        this.district_name =  distric_name;

    }
}
