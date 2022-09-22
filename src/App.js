/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Achat from './components/Achat';
import Reserver from './components/Routes/Reserver';
import Villes from './components/Routes/Villes';
import {STORE } from './data/data';
import Footer from './Footer';
import Header from './Header';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={STORE}>
      <div className="tm-main-content" id="top">
        <div className="tm-top-bar-bg"></div>
          <Header />
          <Routes>
            <Route path="/" element={<Villes />} />
            <Route path="/Accueil" element={<Villes />} />
            <Route path="/Reserver" element={<Reserver />} />
          </Routes>
          <Achat />
          <Footer />
      </div>
    </Provider>
  );
}

export default App;