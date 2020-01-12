import {MembreReturn} from './MembreReturn';
import {Etudiant} from './Etudiant';

export class EnseignantChercheurReturn extends MembreReturn {
  constructor() {
    super();
  }
  private _dateInscription:Date;
  private _etablissement: string;
  private _grade: string;


  get dateInscription(): Date {
    return this._dateInscription;
  }

  set dateInscription(value: Date) {
    this._dateInscription = value;
  }

  get etablissement(): string {
    return this._etablissement;
  }

  set etablissement(value: string) {
    this._etablissement = value;
  }

  get grade(): string {
    return this._grade;
  }

  set grade(value: string) {
    this._grade = value;
  }
}

