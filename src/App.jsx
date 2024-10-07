import React from 'react';
import NavBar from './components/Navbar'; 
import ItemListContainer from './components/ItemListContainer'; 

function App() {
  return (
    <div className="App">
      {/* Aquí integramos los componentes del NavBar y el contenedor */}
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido al Cybermart de RodanTech!" />
    </div>
  );
}

export default App;
