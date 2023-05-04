import React, { } from "react";
import ProductCard from "./ProductCard";
import chair3 from '../photos/chair3.jpg';
import chair4 from '../photos/chair4.jpg';
import sofa1 from '../photos/sofa1.jpg';
import sofa4 from '../photos/sofa4.jpg';
import sofa5 from '../photos/sofa5.jpg';
import nightstand1 from '../photos/nightstand1.jpg';
import nightstand4 from '../photos/nightstand4.jpg';
import nightstand5 from '../photos/nightstand5.jpg';
import table1 from '../photos/table1.jpg';
import table4 from '../photos/table4.jpg';

const productList = [
    { photo: chair3, title: "Semi-bar stool B-22 Copper-corduroy", price: 97.99 },
    { photo: chair4, title: "Semi-bar chair B-140-1 Azure", price: 112.99 },
    { photo: sofa1, title: "Sofa Luciano Gray", price: 988.99 },
    { photo: sofa4, title: "Sofa Orlando Ice", price: 891.99 },
    { photo: sofa5, title: "Sofa Dominic Gray", price: 399.99 },
    { photo: nightstand1, title: "Bedside table Teneta S120 Black", price: 459.99 },
    { photo: nightstand4, title: "Sideboard Bourbon 3 MDF Oak Nemo Latte", price: 170.99 },
    { photo: nightstand5, title: "Picasso cabinet Blue Lagoon MDF", price: 105.99 },
    { photo: table1, title: "Table HT-001 D100 White", price: 230.99 },
    { photo: table4, title: "Corner table 120x80 Black", price: 225.99 }
];

function Scroll(e){
    e.currentTarget.scrollLeft += e.deltaY;
};
function ScrollLeft(){
    const scrollConteiner = document.getElementById("scrollConteiner");
    scrollConteiner.scrollLeft -= scrollConteiner.offsetWidth;
};

function ScrollRight(){
    const scrollConteiner = document.getElementById("scrollConteiner");
    scrollConteiner.scrollLeft += scrollConteiner.offsetWidth;
};
function Trending() {
    return (
        <section className="trending">
            <div className="trending__container">
                <div className="trending__title__buttons">
                    <div className="trending__title title">Trending Now</div>
                    <div className="trending__buttons">
                        <button className="trending__button" onClick={ScrollLeft}>&#129128;</button>
                        <button className="trending__button" onClick={ScrollRight}>&#129130;</button>
                    </div>
                </div>
                <div className="trending__items" id="scrollConteiner" onWheel={Scroll}>
                    {productList.map((elem) => (
                        <ProductCard key={elem.title} product={elem} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Trending;
