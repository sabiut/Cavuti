export class AcknowkedgementData{
    id: number;
    confederancy: number;
    district_code: string;
    village_name: string;
    acknowledgement: string;

    constructor(id: number, confederancy: number, district_code: string, village_name: string, acknowledgement: string){
        this.id = id;
        this.confederancy = confederancy;
        this.district_code = district_code;
        this.village_name = village_name;
        acknowledgement = acknowledgement;
    }
}
