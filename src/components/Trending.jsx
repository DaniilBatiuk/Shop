import React from "react";
import ProductCard from "./ProductCard";

function Trending() {
    return (
        <section className="trending">
            <div className="trending__container">
                <div className="trending__title title">Trending Now</div>
                <div className="trending__content">
                    <div className="trending__items">
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trending;