import { Membre } from './Membre';

export class Outil{
    constructor(){}
    id:number;
    nom:string;
    source:string;
    date:Date;
    listDeveloppeurs:Membre[];
}