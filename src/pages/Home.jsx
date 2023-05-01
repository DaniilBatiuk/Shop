import React from "react";
import "../styles/App.css";
import Gallety from "../components/Gallery";
import ProductsProud from "../components/ProductsProud";
import Trending from "../components/Trending";
function Home() {
    return (
        <>
            <Gallety></Gallety>
            <ProductsProud></ProductsProud>
            <Trending></Trending>
        </>
    );
}

export default Home;