import React from "react";
import "../styles/App.css";
import Gallety from "../components/Gallery";
import ProductsProud from "../components/ProductsProud";
function Home() {
    return (
        <>
            <Gallety></Gallety>
            <ProductsProud></ProductsProud>
        </>
    );
}

export default Home;