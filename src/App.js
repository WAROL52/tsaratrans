/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import chalk from 'chalk';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Achat from './components/Achat';
import Accueil from './components/Routes/Accueil';
import Reserver from './components/Routes/Reserver';
import Villes from './components/Routes/Villes';
import Voyages from './components/Routes/Voyages';
import { data } from './data/data';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
export const AppContexte = React.createContext({
  villes: [],
  clients: [],
  voyages: [],
  count: 0,
  achat: {
    places: [],
    prix: 0,
    lieuDepart: '',
    lieuDestination: '',
    dateDepart: '',
    heureDepart: '',
    unite: 0,
    voyage:null
  },
  update: () => { }
})
function App() {
  const [,up]=useState(Math.random())
  const update=()=>up(Math.random())
  return (
    <div className="tm-main-content" id="top">
      <div className="tm-top-bar-bg"></div>
      <AppContexte.Provider value={{...data,update}} >
        <Header />
        <Routes>
          <Route path="/" element={<Villes />} />
          <Route path="/Accueil" element={<Villes/>} />
          {/* <Route path="/Villes" element={<Reserver />} /> */}
          <Route path="/Reserver" element={<Reserver />} />
          {/* <Route path="/Voyages" element={<Voyages />} /> */}
        </Routes>
        <Achat />
        <Footer />
      </AppContexte.Provider>
    </div>
  );
}

export default App;


console.log("rolio",[chalk.red('90%')]);
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
console.log([chalk.yellow('70%')]);
console.log("\x1B[31m90% d \x1b[43m");

export  const  reset  =  "\x1b[0m"
export  const  clair  =  "\x1b[1m"
export  const  dim  =  "\x1b[2m"
export  const traitdesoulignement  =  "\x1b[4m"
export  const  clignotant  =  "\x1b[5m"
export  const  reverse  =  "\x1b[7m"
export  const  caché  =  "\x1b[8m"

export  const  noir  =  "\x1b[30m"
export  const  rouge  =  "\x1b[31m"
export  const  vert  =  "\x1b[32m"
export  const  jaune  =  "\x1B[33m"
export  const  bleu  =  "\x1b[34m"
export const  magenta  =  "\x1b[35m"
export const  cyan  =  "\x1b[36m"
export  const  blanc  =  "\x1b[37m"

export  const  BGblack  =  "\x1b[40m"
export  const  BGred  =  "\x1b[41m"
export  const  BGgreen  =  "\x1b[42m"
export  const  BGjaune  =  "\x1b[43m"
export  const  BGblue  =  "\x1b[44m"
export  const  BGmagenta  =  "\x1b[45m"
export  const  BGcyan  =  "\x1b[46m"
export  const  BGwhite  =  "\x1b[47m"

console.log("rolio"+jaune);