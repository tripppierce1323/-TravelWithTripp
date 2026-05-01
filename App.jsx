import "./index.css";

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
    rewards: "Airport lounges • Hotel credits • 5x flights",
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
      "https://www.biltrewards.com/_next/image?url=https%3A%2F%2Fassets.biltrewards.com%2Fimages%2Fcard%2Fbilt-mastercard.png&w=640&q=75",
    bonus: "Earn points on rent",
    rewards: "Rent • Dining • Travel partners",
  },
];

export default function App() {
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
          Compare cards that can help unlock flights, hotels, lounges, and
          luxury trips.
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