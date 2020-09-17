import { Injectable } from "@angular/core";
import { AboutData } from '../model/about';
import { filter } from 'rxjs/operators';

@Injectable()

export class AboutService{

    private about = new Array<AboutData>(
        { id: 1, title: "Fijian concepts of belonging"},
        { id: 3, title: "Shifting times"},
        { id: 4, title: "Addressing the challenge"},
        { id: 5, title: "Aknowledgements"}

    );


    getAbout(): Array<AboutData>{
        return this.about;
    }

    getAboutID(id: number): AboutData{
    return this.about.filter((detail) => detail.id === id)[0];
    }

}
