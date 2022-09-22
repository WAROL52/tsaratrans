import Billet from "./Billet"

export default class Client{
    constructor(nom,prenom,numeroTelephone){
        this.nom=nom
        this.prenom=prenom
        this.numeroTelephone=numeroTelephone
    }
    #billets=[]
    ajouterBillet(...billets){
        this.#billets.push(...billets)
    }
    get billets(){
        return [...this.#billets]
    }
}
