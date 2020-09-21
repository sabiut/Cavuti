export class ContactData{
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    message: string;

    constructor( first_name: string, last_name:string, email:string, message: string){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.message = message;
}
}
