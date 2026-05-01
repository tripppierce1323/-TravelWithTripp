const { useState } = React;
const { cards } = window;

function App() {
  return (
    <div className="container">
      <h1>TravelWithTripp</h1>
      <p>Smarter rewards. Better trips.</p>

      <h2>Top Cards</h2>

      {cards.map((card) => (
        <div key={card.name} className="card">
          <img src={card.image} alt={card.name} style={{ width: "100%", borderRadius: "12px" }} />

          <div style={{ padding: "10px" }}>
            <h3>{card.name}</h3>
            <p>{card.issuer}</p>
            <p><strong>Welcome Bonus:</strong> {card.bonus}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);