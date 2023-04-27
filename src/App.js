import React from "react";
import "./styles/App.css";
import gallery1 from './photos/gallery1.jpg';
import gallery2 from './photos/gallery2.jpg';
import gallery3 from './photos/gallery3.jpg';
import gallery4 from './photos/gallery4.jpg';
import gallery5 from './photos/gallery5.jpg';
function App() {
  return (
    <>
      <header className="header">
        <nav className="header__menu">
          <ul className="header__list">
            <li>
              <a href="" className="header__link">Categories</a>
            </li>
            <li>
              <a href="" className="header__link">Product page</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className="main__gallery gallery">
          <div className="gallery__container">
            <div className="gallery__items">
              <div className="gallery__item gallery__item_big">
                <img src={gallery1} alt=""></img>
              </div>
              <div className="gallery__item gallery__item">
                <img src={gallery2} alt=""></img>
              </div>
              <div className="gallery__item gallery__item">
                <img src={gallery3} alt=""></img>
              </div>
              <div className="gallery__item gallery__item">
                <img src={gallery4} alt=""></img>
              </div>
              <div className="gallery__item gallery__item">
                <img src={gallery5} alt=""></img>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">footer
      </footer>
    </>
  );
}

export default App;
