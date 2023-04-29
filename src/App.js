import React from "react";
import "./styles/App.css";
import Gallety from "./components/Gallery";
import HeaderMenu from "./components/HeaderMenu";
import ProductsProud from "./components/ProductsProud";

function App() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <main className="main">
        <Gallety></Gallety>
        <ProductsProud></ProductsProud>
      </main>
      <footer className="footer">footer
      </footer>
    </>
  );
}

export default App;
