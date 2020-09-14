import { Village } from './village.model';
export class FijiData {

    id: number;
    confederancy_name: string;
    province: string;
    district_name: string;
    village: string;

    constructor(id: number, confederancy_name: string, province: string, district_name:string, village: string) {
        this.id = id;
        this.confederancy_name = confederancy_name;
        this.province = province;
        this.district_name = district_name;
        this.village = village;


    }

}
