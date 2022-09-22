import { useState } from "react"
import classSprinter from "../class/ClassSprinter.js"
import Client from "../class/Client.js"
import Ville from "../class/Ville.js"
import Voyage from "../class/Voyage.js"
import img1 from "../img/sprinter1.jpg"
import img2 from "../img/sprinter2.jpg"
const Antananarivo=new Ville("Antananarivo","Capitale de Madagascar, Antananarivo est un réel concentré de ce que peut réserver l’île dans un cadre urbain. La « ville des Mille » comme le suggère son appellation, vous réserve 1000 trésors à découvrir. En famille, visitez un « Rova », un palais de l’époque royale ou arpentez les parcs animaliers pour découvrir la faune et la flore visibles aux quatre coins de l’île. Vous l’aurez compris, Antananarivo vous réserve un séjour riche pour les petits, comme pour les grands.","img/antananarivo.jpg")
const Toamasina=new Ville("Toamasina","Capitale de l’Est, au débouché du canal des Pangalanes (axe majeur de transport des marchandises le long de la côte Est malgache), Tamatave possède une importante raffinerie de pétrole assurant l’approvisionnement de la capitale. Son port est le principal port maritime de Madagascar. Il exporte les produits des produits agricoles la région : vanille, girofle, café.","img/toamasina.jpg")
Toamasina.ajouterDestination(Antananarivo,20_000)

const Mahanjaga= new Ville("Mahajanga","Majunga est une ville portuaire du nord-ouest de Madagascar, lovée contre le canal du Mozambique, elle se trouve à l’embouchure du fleuve Betsiboka. La ville est très étendue, on s’y retrouve grâce aux nombreux baobabs qui servent de repères dans le tracé des rues et des quartiers. Encore méconnue, cette ville offre de nombreux attraits naturels et historiques. Riche d’un patrimoine culturel et d’une végétation exubérante, votre séjour à Majunga promet d’être inoubliable","img/majunga.jpg")
Mahanjaga.ajouterDestination(Antananarivo,30_000)
Mahanjaga.ajouterDestination(Toamasina,50_000)

const Fianarantsoa= new Ville("Fianarantsoa","Ville des hautes terres de Madagascar, Fianarantsoa s’étend sur trois étages. Avec ses maisons traditionnelles, ses nombreuses églises et sa culture viticole, de nombreuses visites s’offrent à vous. Véritable carrefour routier, elle est située sur la RN7 à 400 km de Tananarive au cœur de la région sud-est.","img/fianarantsoa.jpg")
Fianarantsoa.ajouterDestination(Antananarivo,25000)
Fianarantsoa.ajouterDestination(Toamasina,45000)

const Diego= new Ville("Diego","Diego Suarez (Antsiranana) est la principale ville du nord de Madagascar. Destination de rêve, elle offre un panel d’activités nautiques et terrestres, dans un décor aussi incroyable qu’époustouflant. Des plages de rêve aux imposants massifs montagneux, vous découvrirez un décor différent à chaque étape de votre voyage. Un séjour épique qui promet de ramener de nombreux souvenirs.","img/diego.jpg")
Diego.ajouterDestination(Antananarivo,100_000)
Diego.ajouterDestination(Toamasina,120_000)

const Antsirabe=new Ville("Antsirabe","Comment ne pas visiter les terres centrales sans aller faire un tour à Antsirabe ? Située à 1500 m d’altitude, vous la reconnaitrez à ses nombreux pousse-pousse colorés qui bordent les rues. Elle vit principalement du textile, du tabac et de la production agricole, mais aussi de son eau, réputée dans le monde entier pour ses vertus thérapeutiques. Entourée de trois lacs, et d’une végétation riche, vous aurez la possibilité de faire de nombreuses activités en famille ou entre amis.","img/antsirabe.jpg")
Antsirabe.ajouterDestination(Antananarivo,20_000)
Antsirabe.ajouterDestination(Toamasina,40_000)

const Sambava=new Ville("Sambava","Située entre Vohémar et Antalaha, Sambava fait partie de ce que l’on appelle « le Triangle vert ». Capitale mondiale de la vanille, ","img/sambava.jpg")
Sambava.ajouterDestination(Antananarivo,100_000)
Sambava.ajouterDestination(Toamasina,120_000)

const Toliara=new Ville("Toliara","Tuléar, aussi appelée Toliara, est la capitale de la région sud de Madagascar. Cette ville baignée par le soleil toute l’année, offre une vie culturelle riche. Vous découvrirez une population chaleureuse et accueillante dans un cadre incroyable. Elle est l’aboutissement de la RN7, long périple depuis la capitale, vous adorerez vous relaxer sur les plages de rêve de la région.","img/toliara.jpg")
Toliara.ajouterDestination(Antananarivo,50_000)
Toliara.ajouterDestination(Diego,100_000)

const villes=[
    Toamasina,
    Antananarivo,
    Mahanjaga,
    Fianarantsoa,
    Diego,
    Antsirabe,
    Sambava,
    Toliara
]
const sprinter1=new classSprinter("Rakoto",18,img1,"123TBA","032 32 323 23","034 34 424 42")
const sprinter2=new classSprinter("Rabe",18,img2,"123TYZ","032 33 363 03","034 36 924 12")
const client1 = new Client("Rabe","Rolio","032 80 715 12")
const voyage1=new Voyage("12-06-2022",Toamasina,Antananarivo,sprinter1,"18h30")
const voyage2=new Voyage("13-06-2022",Antananarivo,Diego,sprinter2,"15h30")
voyage1.creerBillet(client1,2)
voyage1.creerBillet(client1,4)
voyage1.creerBillet(client1,5)
voyage1.creerBillet(client1,8)
voyage1.creerBillet(client1,10)
voyage1.creerBillet(client1,15)
const clients=[
    client1
]
const voyages=[
    voyage1,
    voyage2,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
    voyage1,
]
const data={
    villes,clients,voyages,
    achat:{
        places:[],
        prix:0,
        lieuDepart:'',
        lieuDestination:'',
        dateDepart:'',
        heureDepart:'',
        unite:0,
        voyage:null
    }
}

console.log(data);
export {
    data
}