export default class Ville{
    clone=()=>{
        return new Ville(this.state)
    }
    constructor(nomVille,desc="",img,destination={}){
        this.state=typeof nomVille =="object"?nomVille:{
            nomVille,
            desc,
            img,
            destination
        }
    }
    get desc(){return this.state.desc}
    get nomVille(){return this.state.nomVille}
    get img(){return this.state.img}
    get destination(){return this.state.destination}
    ajouterDestination(autreVille,prixFrais){
        if(!(autreVille instanceof Ville)) throw new Error("autre doit être instance de Ville")
        if(typeof prixFrais !="number") throw new Error("autre doit être un Nombre")
        this.destination[autreVille.nomVille]={
            prixFrais,ville:autreVille.state
        }
        if(!autreVille.destination[this.nomVille]){
            autreVille.ajouterDestination(this,prixFrais)
        }
        return this.clone()
    }
}