import Voyage from "./Voyage"

export default class classSprinter{
    constructor(nomChauffeur,nombreDePlace,img,numVoiture="123TBA",num1="032 32 323 23",num2="034 34 424 42"){
        this.nomChauffeur=nomChauffeur
        this.nombreDePlace=nombreDePlace
        this.img=img
        this.voyage=null
        this.num1=num1
        this.num2=num2
        this.numVoiture=numVoiture
    }
    get estUtiliser(){return !!this.voyage}
    utiliser(voyage){
        if(!(voyage instanceof Voyage)) throw new Error("voyage doit etre instance de Voyage")
        this.voyage=voyage
    }
}