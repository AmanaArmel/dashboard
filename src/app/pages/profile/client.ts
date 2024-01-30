
export class Client{
  idClient: number;
  nom: string;
  prenom:string;
  dateNaissance: string;
  sexe: string;
  adresse: string;
  numeroTelephone: string;
  courriel: string;
  nationalite:string;
  username: string;
  password: string;
  comptes:Array<any>;


  constructor(idClient: number, nom: string, prenom: string, dateNaissance: string, sexe: string, adresse: string, numeroTelephone: string, courriel: string, nationalite: string, username: string, password: string, comptes: Array<any>) {
    this.idClient = idClient;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.sexe = sexe;
    this.adresse = adresse;
    this.numeroTelephone = numeroTelephone;
    this.courriel = courriel;
    this.nationalite = nationalite;
    this.username = username;
    this.password = password;
    this.comptes = comptes;
  }
}
