import React from "react";
import chair1 from '../photos/chair1.jpg';

function ProductCard() {
    return (
        <div className="products-card__item">
            <div className="products-card__image">
                <img src={chair1} alt="" />
            </div>
            <div className="products-card__body">
                <div className="products-card__name">Chair M-45 Mustard corduroy</div>
                <div className="products-card__price">455$</div>
            </div>
        </div>
    );
}

export default ProductCard;