import { Role } from './Role';
import { Outil } from './Outil';
import { Publication } from './Publication';
import { Evenement } from './Evenement';

export class Membre{
    constructor(){}
    id:number;
    cin:string;
    nom:string;
    prenom:string;
    dateNaissance:Date;
    cv:string;
    photo:string; //7ata ba3d
    email:string;
    password:string;
    lisyRoles:Role[];
    listEvenements:Evenement[];
    listPublication:Publication[];
    listOutils:Outil[];

}