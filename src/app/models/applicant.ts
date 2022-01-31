export class Applicant {
    id?: number;
    ci: number;
    name: string;
    fatherLastName: String;
    motherLastName: String;
    email:String;
    cellphone: number;
    phone: number;

    constructor( ci: number, name: string, fatherLastName: String, motherLastName: String, email:String, cellphone: number,
        phone: number) {
        this.ci = ci;
        this.name = name;
        this.fatherLastName=fatherLastName;
        this.motherLastName=motherLastName;
        this.email=email;
        this.cellphone=cellphone;
        this.phone=phone
    }
}


