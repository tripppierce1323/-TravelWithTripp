const { cards } = window;

function App() {
  return (
    <div>
      <header className="header">
        <h1>TravelWithTripp</h1>
        <p>Luxury Travel • Smart Rewards</p>
      </header>

      <section className="hero">
        <h2>Smarter rewards. Better trips.</h2>
        <p>Turn everyday spend into luxury travel experiences.</p>
      </section>

      <section className="cards">
        {cards.map((card) => (
          <div className="card" key={card.name}>
            <img src={card.image} alt={card.name} />

            <div className="card-content">
              <h3>{card.name}</h3>
              <p>{card.issuer}</p>
              <strong>{card.bonus}</strong>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);