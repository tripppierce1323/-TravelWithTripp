import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const cards = [
  {
    name: "Amex Gold",
    image:
      "https://icm.aexp-static.com/Internet/internationalcardshop/en_us/images/cards/gold-card.png",
    bonus: "Great for groceries + restaurants",
    rewards: "4x dining • 4x U.S. supermarkets",
  },
  {
    name: "Amex Platinum",
    image:
      "https://icm.aexp-static.com/Internet/internationalcardshop/en_us/images/cards/platinum-card.png",
    bonus: "Luxury travel perks",
    rewards: "5x flights • Lounge access • Hotel credits",
  },
  {
    name: "Chase Sapphire Preferred",
    image:
      "https://creditcards.chase.com/K-Marketplace/images/cardart/sapphire_preferred_card.png",
    bonus: "Best starter travel card",
    rewards: "Travel partners • Dining • Travel portal",
  },
  {
    name: "Chase Sapphire Reserve",
    image:
      "https://creditcards.chase.com/K-Marketplace/images/cardart/sapphire_reserve_card.png",
    bonus: "Premium Chase travel card",
    rewards: "$300 travel credit • Lounge access",
  },
  {
    name: "Capital One Venture X",
    image:
      "https://ecm.capitalone.com/WCM/card/products/venture-x-card-art.png",
    bonus: "Simple premium travel setup",
    rewards: "2x everywhere • Lounge access • Travel credit",
  },
  {
    name: "Bilt Mastercard",
    image:
      "https://assets.biltrewards.com/images/card/bilt-mastercard.png",
    bonus: "Earn points on rent",
    rewards: "Rent • Dining • Travel partners",
  },
];

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
        <p className="sectionText">
          Compare cards that unlock flights, hotels, lounges, and luxury travel.
        </p>

        <div className="cardsGrid">
          {cards.map((card) => (
            <div className="cardBox" key={card.name}>
              <h4>{card.name}</h4>

              <div className="cardImageWrap">
                <img src={card.image} alt={card.name} />
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

// 🔥 THIS IS WHAT FIXES THE BLANK SCREEN
createRoot(document.getElementById("root")).render(<App />);