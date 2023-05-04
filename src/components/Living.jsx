import React from "react";
import living1 from '../photos/living3.jpg';
import { Link } from "react-router-dom";
function Living() {
    return (
        <section className="living">
            <div className="living__container">
                <div className="living__items">
                    <div className="living__text">
                        <div className="living__title title">Creative harmonious living</div>
                        <div className="living__decription">RAOUF Products are all made to standaed sizes so that you can mix and match them freely</div>
                        <Link to="/Categories" className="living__button">Show more</Link>
                    </div>
                    <div className="living__image">
                        <img src={living1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Living;