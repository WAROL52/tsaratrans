export default class Billet{
    constructor(client,dateDepart,lieuDepart,lieuDestination,numeroPlace){
        this.numeroPlace=numeroPlace
        this.client=client
        this.dateDepart=dateDepart
        this.lieuDepart=lieuDepart
        this.lieuDestination=lieuDestination
    }
}