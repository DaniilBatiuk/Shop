import React from "react";
import "./styles/App.css";
import Gallety from "./components/Gallery";
import HeaderMenu from "./components/HeaderMenu";

function App() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <main className="main">
        <Gallety></Gallety>
      </main>
      <footer className="footer">footer
      </footer>
    </>
  );
}

export default App;
