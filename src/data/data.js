import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit"
import classSprinter from "../class/ClassSprinter.js"
import Client from "../class/Client.js"
import Ville from "../class/Ville.js"
import Voyage from "../class/Voyage.js"
import img1 from "../img/sprinter1.jpg"
import img2 from "../img/sprinter2.jpg"
import img3 from "../img/sprinter3.jpg"
import img4 from "../img/sprinter4.jpg"
import img5 from "../img/sprinter5.jpg"
const sprinterImg=[img1,img2,img3,img4,img5]
const Antananarivo = new Ville("Antananarivo", "Capitale de Madagascar, Antananarivo est un réel concentré de ce que peut réserver l’île dans un cadre urbain. La « ville des Mille » comme le suggère son appellation, vous réserve 1000 trésors à découvrir. En famille, visitez un « Rova », un palais de l’époque royale ou arpentez les parcs animaliers pour découvrir la faune et la flore visibles aux quatre coins de l’île. Vous l’aurez compris, Antananarivo vous réserve un séjour riche pour les petits, comme pour les grands.", "img/antananarivo.jpg")
const Toamasina = new Ville("Toamasina", "Capitale de l’Est, au débouché du canal des Pangalanes (axe majeur de transport des marchandises le long de la côte Est malgache), Tamatave possède une importante raffinerie de pétrole assurant l’approvisionnement de la capitale. Son port est le principal port maritime de Madagascar. Il exporte les produits des produits agricoles la région : vanille, girofle, café.", "img/toamasina.jpg")
Toamasina.ajouterDestination(Antananarivo, 20_000)

const Mahanjaga = new Ville("Mahajanga", "Majunga est une ville portuaire du nord-ouest de Madagascar, lovée contre le canal du Mozambique, elle se trouve à l’embouchure du fleuve Betsiboka. La ville est très étendue, on s’y retrouve grâce aux nombreux baobabs qui servent de repères dans le tracé des rues et des quartiers. Encore méconnue, cette ville offre de nombreux attraits naturels et historiques. Riche d’un patrimoine culturel et d’une végétation exubérante, votre séjour à Majunga promet d’être inoubliable", "img/majunga.jpg")
Mahanjaga.ajouterDestination(Antananarivo, 30_000)
Mahanjaga.ajouterDestination(Toamasina, 50_000)

const Fianarantsoa = new Ville("Fianarantsoa", "Ville des hautes terres de Madagascar, Fianarantsoa s’étend sur trois étages. Avec ses maisons traditionnelles, ses nombreuses églises et sa culture viticole, de nombreuses visites s’offrent à vous. Véritable carrefour routier, elle est située sur la RN7 à 400 km de Tananarive au cœur de la région sud-est.", "img/fianarantsoa.jpg")
Fianarantsoa.ajouterDestination(Antananarivo, 25000)
Fianarantsoa.ajouterDestination(Toamasina, 45000)

const Diego = new Ville("Diego", "Diego Suarez (Antsiranana) est la principale ville du nord de Madagascar. Destination de rêve, elle offre un panel d’activités nautiques et terrestres, dans un décor aussi incroyable qu’époustouflant. Des plages de rêve aux imposants massifs montagneux, vous découvrirez un décor différent à chaque étape de votre voyage. Un séjour épique qui promet de ramener de nombreux souvenirs.", "img/diego.jpg")
Diego.ajouterDestination(Antananarivo, 100_000)
Diego.ajouterDestination(Toamasina, 120_000)

const Antsirabe = new Ville("Antsirabe", "Comment ne pas visiter les terres centrales sans aller faire un tour à Antsirabe ? Située à 1500 m d’altitude, vous la reconnaitrez à ses nombreux pousse-pousse colorés qui bordent les rues. Elle vit principalement du textile, du tabac et de la production agricole, mais aussi de son eau, réputée dans le monde entier pour ses vertus thérapeutiques. Entourée de trois lacs, et d’une végétation riche, vous aurez la possibilité de faire de nombreuses activités en famille ou entre amis.", "img/antsirabe.jpg")
Antsirabe.ajouterDestination(Antananarivo, 20_000)
Antsirabe.ajouterDestination(Toamasina, 40_000)

const Sambava = new Ville("Sambava", "Située entre Vohémar et Antalaha, Sambava fait partie de ce que l’on appelle « le Triangle vert ». Capitale mondiale de la vanille, ", "img/sambava.jpg")
Sambava.ajouterDestination(Antananarivo, 100_000)
Sambava.ajouterDestination(Toamasina, 120_000)

const Toliara = new Ville("Toliara", "Tuléar, aussi appelée Toliara, est la capitale de la région sud de Madagascar. Cette ville baignée par le soleil toute l’année, offre une vie culturelle riche. Vous découvrirez une population chaleureuse et accueillante dans un cadre incroyable. Elle est l’aboutissement de la RN7, long périple depuis la capitale, vous adorerez vous relaxer sur les plages de rêve de la région.", "img/toliara.jpg")
Toliara.ajouterDestination(Antananarivo, 50_000)
Toliara.ajouterDestination(Diego, 100_000)

function randInt(min,max,out){
    min=!isNaN(out)&&min>out?out:min
    return Math.floor(Math.random()*(max-min))+min
}
function createArray(len,value=0){
    const list=[]
    for (let index = 0; index < len; index++) {
        list.push(index) 
    }
    return list
}

const listSprinter=sprinterImg.map(img=>new classSprinter("Rakoto", 18, img,randInt(100,999)+"TBA", "032 32 323 23", "034 34 424 42"))
const client1 = new Client("Rabe", "Rolio", "032 80 715 12")
const listVille=[Antananarivo,Toamasina,Mahanjaga,Fianarantsoa,Diego,Antsirabe,Sambava,Toliara]

const clients = createSlice({
    name: "clients",
    initialState: [
        client1
    ],
    reducers: {}
})
const voyages = createSlice({
    name: "voyages",
    initialState: createArray(100).map(_=>{
        const ville=listVille[randInt(0,listVille.length)]
        const dest=Object.values(ville.destination)
        const destination=dest[randInt(0,dest.length)].ville
        const sprinter=listSprinter[randInt(0,listSprinter.length)]
        const voyage=new Voyage(`${randInt(1,29)}-${randInt(1,13)}-${randInt(2022,2024)}`,ville,destination, sprinter,`${randInt(6,20)}h${randInt(0,59)}`)
        createArray(randInt(0,18)).map(i=>voyage.creerBillet(client1,randInt(0,18)))
        return voyage
    }),
    reducers: {
        updateVoyage: (c, { payload }) => {
            return c
        }
    }
})
const achats = createSlice({
    name: "achats",
    initialState: {
        places: [],
        prix: 0,
        lieuDepart: '',
        lieuDestination: '',
        dateDepart: '',
        heureDepart: '',
        unite: 0,
        voyage: null
    },
    reducers: {
        setInfo(achat, { payload }) {
            Object.assign(achat, payload)
            // console.log(payload);
            // console.log({...achat});
            // achat.unite=12
            return achat
        }
    }
})
const villes = createSlice({
    name: "villes",
    initialState: [
        Toamasina,
        Antananarivo,
        Mahanjaga,
        Fianarantsoa,
        Diego,
        Antsirabe,
        Sambava,
        Toliara
    ],
    reducers: {}
})
const voyageSelected = createSlice({
    name: "voyageSelected",
    initialState: null,
    reducers: {
        setVoyageSelected: (_, { payload }) => payload
    }
})
const STORE = configureStore({
    reducer: combineReducers({
        voyages: voyages.reducer,
        clients: clients.reducer,
        achats: achats.reducer,
        villes: villes.reducer,
        voyageSelected: voyageSelected.reducer
    }),
    middleware: (fn) => fn({ serializableCheck: false })
})
const { setInfo } = achats.actions
const { setVoyageSelected } = voyageSelected.actions
const { updateVoyage } = voyages.actions
export {
    STORE, setInfo, setVoyageSelected, updateVoyage
}

