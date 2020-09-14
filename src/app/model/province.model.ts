export class ProvinceData{
    confederancy: number;
    confederancy_code: string;
    province_name: string;
    district: string;

    constructor( confederancy: number, confederancy_code: string, province_name: string, district: string,){
        this.confederancy = confederancy;
        this.confederancy_code = confederancy_code;
        this.province_name = province_name;
        this.district = district;

   }
}
