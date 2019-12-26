import { Membre } from './Membre';

export class Evenement{
    constructor(){}
    id:number;
    nom:string;
    dateEvt:Date;
    lieu:string;
    listOrganisateurs:Membre[];
}