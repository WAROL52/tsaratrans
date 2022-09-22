import Billet from "./Billet"
import classSprinter from "./ClassSprinter"
import Client from "./Client"

export default class Voyage{
    constructor(dateDepart,lieuDepart,lieuDestination,sprinter,heureDepart="18h30"){
        if(!(sprinter instanceof classSprinter)) throw new Error("sprinter doit être instance de ClassSprinter")
        this.dateDepart=dateDepart
        this.lieuDepart=lieuDepart
        this.lieuDestination=lieuDestination
        this.sprinter=sprinter
        this.estParti=false
        this.heureDepart=heureDepart
        this.id=Math.random()
    }
    #passagers=[]
    get Passagers(){return this.#passagers}
    creerBillet(client,numeroDePlace){
        if(!(client instanceof Client)) throw new Error("client doit etre instance de Client")
        const billet=new Billet(client,this.dateDepart,this.lieuDepart,this.lieuDestination,numeroDePlace)
        this.ajouterPassagers(billet)
        return billet
    }
    ajouterPassagers(...billets){
        if(billets.length>this.nombreDePlaceDisponible) throw new Error ("On a plus assez de place pour tous ces passagers")
        this.#passagers.push(...billets.map(billet=>{
            if(!(billet instanceof Billet)) throw new Error("chaque billet doit etre instance de Billet")
            return billet
        }))
    }
    partirAuProchaineDestination(){
        this.estParti=true
    }
    arriver(){

    }
    get nombreDePlace(){return this.sprinter.nombreDePlace}
    get nombreDePlaceDisponible(){return this.sprinter.nombreDePlace-this.#passagers.length}
}