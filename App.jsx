import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import cards from "./cards";

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="logoMark">
          <div className="logoCircle">
            <span className="plane">✈</span>
            <span className="palm">🌴</span>
            <span className="wave">〰️</span>
          </div>
        </div>

        <h1>
          TravelWith<span>Tripp</span>
        </h1>

        <p className="tagline">Luxury Travel • Smart Rewards</p>

        <div className="goldLine">
          <span></span>
        </div>

        <h2>
          Smarter rewards.
          <br />
          Better trips.
        </h2>

        <p className="subtext">
          Turn everyday spend into luxury travel experiences.
        </p>
      </section>

      <section className="cardsSection">
        <h3>Featured Travel Cards</h3>

        <div className="cardsGrid">
          {cards.map((card) => (
            <div className="cardBox" key={card.name}>
              <h4>{card.name}</h4>

              <div className="cardImageWrap">
                <img src={card.image} />
              </div>

              <p className="bonus">{card.bonus}</p>
              <p className="rewards">{card.rewards}</p>

              <button>View Card Details ›</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);