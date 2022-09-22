export default class Ville{
    constructor(nomVille,desc,img){
        this.nomVille=nomVille
        this.desc=desc
        this.img=img
    }
    ajouterDestination(autreVille,prixFrais){
        if(!(autreVille instanceof Ville)) throw new Error("autre doit être instance de Ville")
        if(typeof prixFrais !="number") throw new Error("autre doit être un Nombre")
        this.destination[autreVille.nomVille]={
            prixFrais,ville:autreVille
        }
        if(!autreVille.destination[this.nomVille]){
            autreVille.ajouterDestination(this,prixFrais)
        }
    }
    destination={}
}