import { Membre } from './Membre';

export class Publication{
    constructor(){}
    id:number;
    type:string;
    dateApparition:Date;
    lien:string;
    sourcePdf:string;
    auteurs:Membre[];
}