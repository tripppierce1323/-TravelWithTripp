const { useState } = React;
const { cards } = window;

export default function App() {
  return (
    <div className="container">
      <h1>TravelWithTripp</h1>
      <p>Smarter rewards. Better trips.</p>

      <h2>Top Cards</h2>
      {cards.map((card) => (
        <div key={card.name} className="card">
          <img src={card.image} alt={card.name} />
          <div>
            <h3>{card.name}</h3>
            <p>{card.issuer}</p>
            <p>Bonus: {card.bonus}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);