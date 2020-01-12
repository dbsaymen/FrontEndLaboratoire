import {MembreReturn} from './MembreReturn';
import {EnseignantChercheur} from './EnseignantChercheur';

export class EtudiantReturn extends MembreReturn {
  constructor() {
    super();
  }

  private _dateInscription: Date;
  private _sujet: string;
  private _diplome: string;
  private _type:string;
  private _encadrant: EnseignantChercheur;


  get dateInscription(): Date {
    return this._dateInscription;
  }

  set dateInscription(value: Date) {
    this._dateInscription = value;
  }

  get sujet(): string {
    return this._sujet;
  }

  set sujet(value: string) {
    this._sujet = value;
  }

  get diplome(): string {
    return this._diplome;
  }

  set diplome(value: string) {
    this._diplome = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get encadrant(): EnseignantChercheur {
    return this._encadrant;
  }

  set encadrant(value: EnseignantChercheur) {
    this._encadrant = value;
  }
}
