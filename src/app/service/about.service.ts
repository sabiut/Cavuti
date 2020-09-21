import { Injectable } from "@angular/core";
import { AboutData } from '../model/about';
import { filter } from 'rxjs/operators';

@Injectable()

export class AboutService{

    private about = new Array<AboutData>(
        { id: 1, title: "Fijian concepts of belonging", details: "Fijians do not think of themselves as belonging to a nation or conversely as individuals, but instead identify as members of their paternal (primarily) and maternal (secondly) tribe or clan.  The term for that affiliation is icavuti. iCavuti implies ‘belong to’.  When making speeches or presentations, and during gift exchanges and services, the icavuti of those present are often mentioned. Using the correct icavuti is important as this adds mana (spiritual significance) and itovo vakavanua (correct protocols) to formalities"},
        { id: 3, title: "Shifting times", details: " Traditionally, Fiji was an oral culture, with important traditional knowledge such as icavuti memorised.  Until more recently, Fijians had the capacity to memorise large and sometimes complex information including lengthy icavuti. With the increased use of textualized (written) records, this is weakening remembered knowledge. iCavuti is a good example of this, with Fijians increasingly abdicating memorising cavuti and placing greater reliance on textualized sources. With access to written icavuti often limited, this is leading to cavuti being mis-presented and in some cases negated, resulting in culturally inappropriate practice and the loss of critical traditional knowledge and correct practice."},
        { id: 4, title: "Addressing the challenge", details: "As part of a suit of initiatives to preserve traditional knowledge such as icavuti, the Tabana ni Vosa & iTovo Vakaviti (Department of Language and Culture), Tabacakacaka iTaukei (Ministry of Fijian Affairs), has partnered with The University of Waikato and developed a mobile application providing readily available icavuti via a text- or map-based searchable platform. This application and the icavuti data is owned by na Tabana ni Vosa & iTovo Vakaviti (Department of Language and Culture). Any concerns or comments can be directed to na Tabana ni Vosa & iTovo Vakaviti through the ‘Contact’ page (in the menu). The development of the application was funded by a University of Waikato Summer Research Award 2019/20."},
        { id: 5, title: "Aknowledgements", details: "Director, Department of Language and Culture – Mrs Marilyn Tagicakibau ( Namuka, Nakelo, Tailevu)iCavuti Data Coordinator/Analyst – Mr Simione Sevudredre ( Naburenivalu, Namena, Tailevu)"}

    );


    getAbout(): Array<AboutData>{
        return this.about;
    }

    getAboutID(id: number): AboutData{
    return this.about.filter((detail) => detail.id === id)[0];
    }

}
