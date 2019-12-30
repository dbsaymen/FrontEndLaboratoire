import { Role } from './Role';
import { Outil } from './Outil';
import { Publication } from './Publication';
import { Evenement } from './Evenement';
import { Laboratoire } from './Laboratoire';
import { Etudiant } from './Etudiant';
import { EnseignantChercheur } from './EnseignantChercheur';

export class Membre{
    constructor(){}
    id:number;
    publicID:string;
    cin:string;
    nom:string;
    prenom:string;
    dateNaissance:Date;
    cv:string;
    photo:string; //7ata ba3d
    email:string;
    password:string;
    laboratoire:Laboratoire;
    activated:boolean=true;
    roles:Role[];
    evts:Evenement[];
    pubs:Publication[];
    outils:Outil[];
}