export class Village{
    district: number;
    district_code: string;
    village_name: string;
    acknowledgement: string;

    constructor(district: number, district_code: string, village_name: string, acknowledgement: string){
        this.district = district;
        this.district_code = district_code;
        this.village_name = village_name;
        this.acknowledgement = acknowledgement;
    }
    
}