import React from "react";
import "../styles/App.css";
import Gallety from "../components/Gallery";
import ProductsProud from "../components/ProductsProud";
import Trending from "../components/Trending";
import Living from "../components/Living";
function Home() {
    return (
        <>
            <Gallety></Gallety>
            <ProductsProud></ProductsProud>
            <Living></Living>
            <Trending></Trending>
        </>
    );
}

export default Home;