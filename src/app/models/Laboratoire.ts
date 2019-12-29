import { Membre } from './Membre';

export class Laboratoire{
    constructor(){}
    id:number;
    nom:string;
    code:string;
    etablissement:string;
    universite:string;
    members:Membre[];
}