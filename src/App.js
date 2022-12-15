import React from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Promocion from "./components/Promocion";




function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="no se encontraron productos"/>
      <Promocion/>
      <Footer/>
    </div>
  );
}

export default App;
