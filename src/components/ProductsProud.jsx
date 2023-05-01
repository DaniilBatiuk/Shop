import React from "react";
import ProductCard from "./ProductCard";

function ProductsProud() {
    return (
        <section className="products-proud">
            <div className="products-proud__container">
                <div className="products-proud__title title">Products we are proud of</div>
                <div className="products-proud__items">
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
        </section>
    );
}

export default ProductsProud;