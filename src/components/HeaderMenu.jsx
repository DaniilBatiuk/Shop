import React from "react";
import logo from '../photos/logo.PNG';
function ShowMenu(e) {
    const targetItem = e.target;
    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}
function HeaderMenu() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__content">
                    <a href="" className="header__logo">
                        <img src={logo} alt="" />
                    </a>
                    <nav className="header__menu menu">
                        <div className="menu__body">
                            <ul className="menu__list">
                                <li>
                                    <a href="" className="menu__link">Categories</a>
                                </li>
                                <li>
                                    <a href="" className="menu__link">Product page</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <a href="" className="header__cart cart-header">
                        <span className="cart-header__text">Cart</span>
                        <span className="cart-header__quantity">0</span>
                    </a>
                    <button className="icon-menu" onClick={ShowMenu} type="button">
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default HeaderMenu;