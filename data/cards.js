const creditCards = [
  // =====================
  // AMERICAN EXPRESS
  // =====================
  {
    name: "American Express Gold Card",
    issuer: "American Express",
    annualFee: 325,
    bestFor: "Dining + Groceries",
    rewards: { dining: 4, groceries: 4, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: [
      "4x dining",
      "4x U.S. supermarkets",
      "3x flights",
      "Strong everyday points card"
    ],
    why: "Best for high dining and grocery spending."
  },
  {
    name: "The Platinum Card from American Express",
    issuer: "American Express",
    annualFee: 695,
    bestFor: "Flights + Luxury Travel",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 5, flights: 5, other: 1 },
    benefits: [
      "5x flights",
      "5x prepaid hotels through Amex Travel",
      "Airport lounge access",
      "Premium travel credits"
    ],
    why: "Best for frequent flyers who value luxury travel perks."
  },
  {
    name: "American Express Green Card",
    issuer: "American Express",
    annualFee: 150,
    bestFor: "Travel + Dining",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: [
      "3x travel",
      "3x dining",
      "Good mid-tier travel card",
      "Flexible Membership Rewards points"
    ],
    why: "Best for broad travel and dining without Platinum-level fees."
  },
  {
    name: "Blue Cash Preferred Card",
    issuer: "American Express",
    annualFee: 95,
    bestFor: "Groceries + Gas",
    rewards: { dining: 1, groceries: 6, gas: 3, rent: 1, hotels: 1, flights: 1, other: 1 },
    benefits: [
      "High cash back at U.S. supermarkets",
      "Gas rewards",
      "Streaming rewards",
      "Great family spending card"
    ],
    why: "Best for grocery-heavy households."
  },
  {
    name: "Blue Cash Everyday Card",
    issuer: "American Express",
    annualFee: 0,
    bestFor: "Groceries + Gas + Online Shopping",
    rewards: { dining: 1, groceries: 3, gas: 3, rent: 1, hotels: 1, flights: 1, other: 1 },
    benefits: [
      "No annual fee",
      "Groceries rewards",
      "Gas rewards",
      "Online retail rewards"
    ],
    why: "Best no-fee Amex for everyday spending."
  },

  // =====================
  // CHASE
  // =====================
  {
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    annualFee: 95,
    bestFor: "Travel + Dining",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 5, flights: 5, other: 1 },
    benefits: [
      "5x Chase Travel",
      "3x dining",
      "Transfer partners like Hyatt and United",
      "Great beginner travel card"
    ],
    why: "Best starter card for flexible travel points."
  },
  {
    name: "Chase Sapphire Reserve",
    issuer: "Chase",
    annualFee: 795,
    bestFor: "Premium Travel",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 8, flights: 8, other: 1 },
    benefits: [
      "Premium travel rewards",
      "Airport lounge access",
      "Travel credits",
      "Strong travel protection"
    ],
    why: "Best for premium travelers who use Chase benefits often."
  },
  {
    name: "Chase Freedom Unlimited",
    issuer: "Chase",
    annualFee: 0,
    bestFor: "Everyday Spend",
    rewards: { dining: 3, groceries: 1.5, gas: 1.5, rent: 1.5, hotels: 5, flights: 5, other: 1.5 },
    benefits: [
      "No annual fee",
      "1.5x on everyday purchases",
      "3x dining",
      "Pairs well with Sapphire cards"
    ],
    why: "Best Chase catch-all card."
  },
  {
    name: "Chase Freedom Flex",
    issuer: "Chase",
    annualFee: 0,
    bestFor: "Rotating Categories",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 5, flights: 5, other: 1 },
    benefits: [
      "No annual fee",
      "Rotating 5x categories",
      "3x dining",
      "Pairs well with Sapphire cards"
    ],
    why: "Best for maximizing rotating bonus categories."
  },

  // =====================
  // BILT
  // =====================
  {
    name: "Bilt Mastercard",
    issuer: "Bilt",
    annualFee: 0,
    bestFor: "Rent",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 2, flights: 2, other: 1 },
    benefits: [
      "Earn points on rent",
      "No annual fee",
      "3x dining",
      "Transfer partners"
    ],
    why: "Best for renters who want points on rent payments."
  },

  // =====================
  // CAPITAL ONE / VENTURE
  // =====================
  {
    name: "Capital One Venture X",
    issuer: "Capital One",
    annualFee: 395,
    bestFor: "Premium Travel + Catch-All",
    rewards: { dining: 2, groceries: 2, gas: 2, rent: 2, hotels: 10, flights: 5, other: 2 },
    benefits: [
      "2x on everything",
      "10x hotels through Capital One Travel",
      "5x flights through Capital One Travel",
      "Airport lounge access"
    ],
    why: "Best premium card for simple 2x earning."
  },
  {
    name: "Capital One Venture Rewards",
    issuer: "Capital One",
    annualFee: 95,
    bestFor: "Simple Travel Rewards",
    rewards: { dining: 2, groceries: 2, gas: 2, rent: 2, hotels: 5, flights: 5, other: 2 },
    benefits: [
      "2x on every purchase",
      "Simple miles earning",
      "Travel transfer partners",
      "Good mid-tier travel card"
    ],
    why: "Best for simple travel rewards without tracking categories."
  },
  {
    name: "Capital One VentureOne",
    issuer: "Capital One",
    annualFee: 0,
    bestFor: "No-Fee Travel",
    rewards: { dining: 1.25, groceries: 1.25, gas: 1.25, rent: 1.25, hotels: 5, flights: 1.25, other: 1.25 },
    benefits: [
      "No annual fee",
      "Travel miles",
      "Simple rewards",
      "Beginner-friendly"
    ],
    why: "Best no-fee Capital One travel card."
  },
  {
    name: "Capital One Savor",
    issuer: "Capital One",
    annualFee: 0,
    bestFor: "Dining + Groceries + Entertainment",
    rewards: { dining: 3, groceries: 3, gas: 1, rent: 1, hotels: 5, flights: 5, other: 1 },
    benefits: [
      "3x dining",
      "3x groceries",
      "3x entertainment",
      "No annual fee"
    ],
    why: "Best Capital One card for dining and groceries."
  },
  {
    name: "Capital One Quicksilver",
    issuer: "Capital One",
    annualFee: 0,
    bestFor: "Simple Cash Back",
    rewards: { dining: 1.5, groceries: 1.5, gas: 1.5, rent: 1.5, hotels: 1.5, flights: 1.5, other: 1.5 },
    benefits: [
      "Flat cash back",
      "No annual fee",
      "Simple rewards",
      "Easy beginner card"
    ],
    why: "Best for simple cash back on everything."
  },

  // =====================
  // DELTA AMEX
  // =====================
  {
    name: "Delta SkyMiles Blue American Express Card",
    issuer: "American Express / Delta",
    annualFee: 0,
    bestFor: "Starter Delta",
    rewards: { dining: 2, groceries: 1, gas: 1, rent: 1, hotels: 1, flights: 2, other: 1 },
    benefits: [
      "No annual fee",
      "2x Delta purchases",
      "2x dining",
      "Starter Delta card"
    ],
    why: "Best no-fee card for casual Delta flyers."
  },
  {
    name: "Delta SkyMiles Gold American Express Card",
    issuer: "American Express / Delta",
    annualFee: 150,
    bestFor: "Delta Flights",
    rewards: { dining: 2, groceries: 2, gas: 1, rent: 1, hotels: 1, flights: 2, other: 1 },
    benefits: [
      "Free checked bag on Delta",
      "Priority boarding",
      "2x Delta purchases",
      "2x dining and groceries"
    ],
    why: "Best for occasional Delta flyers who check bags."
  },
  {
    name: "Delta SkyMiles Platinum American Express Card",
    issuer: "American Express / Delta",
    annualFee: 350,
    bestFor: "Delta Flyers",
    rewards: { dining: 2, groceries: 2, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: [
      "3x Delta purchases",
      "3x hotels",
      "Companion certificate",
      "Free checked bag"
    ],
    why: "Best for Delta flyers who can use the companion certificate."
  },
  {
    name: "Delta SkyMiles Reserve American Express Card",
    issuer: "American Express / Delta",
    annualFee: 650,
    bestFor: "Premium Delta",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 1, flights: 3, other: 1 },
    benefits: [
      "Delta lounge access benefits",
      "3x Delta purchases",
      "Companion certificate",
      "Premium Delta travel perks"
    ],
    why: "Best for loyal Delta flyers who want premium airport perks."
  },

  // =====================
  // HILTON AMEX
  // =====================
  {
    name: "Hilton Honors American Express Card",
    issuer: "American Express / Hilton",
    annualFee: 0,
    bestFor: "Starter Hilton",
    rewards: { dining: 5, groceries: 5, gas: 5, rent: 3, hotels: 7, flights: 3, other: 3 },
    benefits: [
      "No annual fee",
      "Hilton Honors points",
      "Good starter hotel card",
      "Bonus points at Hilton"
    ],
    why: "Best no-fee Hilton card."
  },
  {
    name: "Hilton Honors Surpass Card",
    issuer: "American Express / Hilton",
    annualFee: 150,
    bestFor: "Hilton + Everyday Spend",
    rewards: { dining: 6, groceries: 6, gas: 6, rent: 3, hotels: 12, flights: 3, other: 3 },
    benefits: [
      "High Hilton earning",
      "Bonus points on dining, groceries, and gas",
      "Hilton status benefits",
      "Good middle-tier Hilton card"
    ],
    why: "Best for Hilton loyalists with strong everyday spending."
  },
  {
    name: "Hilton Honors Aspire Card",
    issuer: "American Express / Hilton",
    annualFee: 550,
    bestFor: "Premium Hilton",
    rewards: { dining: 7, groceries: 3, gas: 3, rent: 3, hotels: 14, flights: 7, other: 3 },
    benefits: [
      "Premium Hilton benefits",
      "High Hilton earning",
      "Resort and travel credits",
      "Top-tier Hilton perks"
    ],
    why: "Best for Hilton loyalists who use premium hotel benefits."
  },

  // =====================
  // MARRIOTT
  // =====================
  {
    name: "Marriott Bonvoy Boundless",
    issuer: "Chase / Marriott",
    annualFee: 95,
    bestFor: "Marriott Hotels",
    rewards: { dining: 3, groceries: 3, gas: 3, rent: 2, hotels: 6, flights: 2, other: 2 },
    benefits: [
      "Free night certificate",
      "Marriott points",
      "Elite night credits",
      "Good mid-tier Marriott card"
    ],
    why: "Best starter Marriott card with an annual free night."
  },
  {
    name: "Marriott Bonvoy Bold",
    issuer: "Chase / Marriott",
    annualFee: 0,
    bestFor: "No-Fee Marriott",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 2, other: 1 },
    benefits: [
      "No annual fee",
      "Marriott points",
      "Starter Marriott card",
      "Travel rewards"
    ],
    why: "Best no-fee Marriott card."
  },
  {
    name: "Marriott Bonvoy Bountiful",
    issuer: "Chase / Marriott",
    annualFee: 250,
    bestFor: "Marriott + Everyday Spend",
    rewards: { dining: 4, groceries: 4, gas: 4, rent: 2, hotels: 6, flights: 2, other: 2 },
    benefits: [
      "Marriott points",
      "Bonus categories",
      "Elite night credits",
      "Mid-premium Marriott card"
    ],
    why: "Best for Marriott loyalists with everyday spending."
  },
  {
    name: "Marriott Bonvoy Bevy",
    issuer: "American Express / Marriott",
    annualFee: 250,
    bestFor: "Marriott + Dining",
    rewards: { dining: 4, groceries: 4, gas: 4, rent: 2, hotels: 6, flights: 2, other: 2 },
    benefits: [
      "Marriott points",
      "Dining and grocery bonus categories",
      "Elite night credits",
      "Good Marriott earning"
    ],
    why: "Best for Marriott travelers who also spend on dining and groceries."
  },
  {
    name: "Marriott Bonvoy Brilliant",
    issuer: "American Express / Marriott",
    annualFee: 650,
    bestFor: "Premium Marriott",
    rewards: { dining: 3, groceries: 3, gas: 3, rent: 2, hotels: 6, flights: 3, other: 2 },
    benefits: [
      "Premium Marriott benefits",
      "Free night certificate",
      "Elite status benefits",
      "Travel credits"
    ],
    why: "Best for Marriott loyalists who want premium hotel perks."
  },

  // =====================
  // CHASE HOTEL / AIRLINE CARDS
  // =====================
  {
    name: "World of Hyatt Credit Card",
    issuer: "Chase / Hyatt",
    annualFee: 95,
    bestFor: "Hyatt Hotels",
    rewards: { dining: 2, groceries: 1, gas: 1, rent: 1, hotels: 4, flights: 2, other: 1 },
    benefits: [
      "Hyatt points",
      "Free night certificate",
      "Elite night credits",
      "Great hotel redemption value"
    ],
    why: "Best for Hyatt travelers."
  },
  {
    name: "IHG One Rewards Premier",
    issuer: "Chase / IHG",
    annualFee: 99,
    bestFor: "IHG Hotels",
    rewards: { dining: 5, groceries: 5, gas: 5, rent: 3, hotels: 10, flights: 3, other: 3 },
    benefits: [
      "IHG points",
      "Anniversary free night",
      "Strong hotel earning",
      "IHG status benefits"
    ],
    why: "Best for IHG travelers."
  },
  {
    name: "IHG One Rewards Traveler",
    issuer: "Chase / IHG",
    annualFee: 0,
    bestFor: "No-Fee IHG",
    rewards: { dining: 3, groceries: 3, gas: 3, rent: 2, hotels: 5, flights: 2, other: 2 },
    benefits: [
      "No annual fee",
      "IHG points",
      "Starter hotel card",
      "Good for casual IHG stays"
    ],
    why: "Best no-fee IHG card."
  },
  {
    name: "United Explorer Card",
    issuer: "Chase / United",
    annualFee: 95,
    bestFor: "United Flights",
    rewards: { dining: 2, groceries: 1, gas: 1, rent: 1, hotels: 2, flights: 2, other: 1 },
    benefits: [
      "Free checked bag",
      "Priority boarding",
      "United miles",
      "Good beginner airline card"
    ],
    why: "Best for occasional United flyers."
  },
  {
    name: "United Quest Card",
    issuer: "Chase / United",
    annualFee: 250,
    bestFor: "United Loyalists",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: [
      "United travel credits",
      "Free checked bags",
      "3x United purchases",
      "Good for frequent United flyers"
    ],
    why: "Best for frequent United travelers."
  },
  {
    name: "United Club Card",
    issuer: "Chase / United",
    annualFee: 695,
    bestFor: "Premium United",
    rewards: { dining: 2, groceries: 1, gas: 1, rent: 1, hotels: 2, flights: 4, other: 1 },
    benefits: [
      "United Club membership",
      "Free checked bags",
      "Premium United perks",
      "Strong airline benefits"
    ],
    why: "Best for United flyers who value lounge access."
  },
  {
    name: "Southwest Rapid Rewards Plus",
    issuer: "Chase / Southwest",
    annualFee: 69,
    bestFor: "Southwest Starter",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 2, flights: 2, other: 1 },
    benefits: [
      "Southwest points",
      "Anniversary points",
      "Low annual fee",
      "Good starter Southwest card"
    ],
    why: "Best low-fee Southwest card."
  },
  {
    name: "Southwest Rapid Rewards Premier",
    issuer: "Chase / Southwest",
    annualFee: 99,
    bestFor: "Southwest Flyers",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: [
      "Southwest points",
      "Anniversary points",
      "Better Southwest earning",
      "No foreign transaction fees"
    ],
    why: "Best middle-tier Southwest card."
  },
  {
    name: "Southwest Rapid Rewards Priority",
    issuer: "Chase / Southwest",
    annualFee: 149,
    bestFor: "Frequent Southwest",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: [
      "Southwest travel credit",
      "Anniversary points",
      "Upgraded boarding benefits",
      "Best personal Southwest card"
    ],
    why: "Best for frequent Southwest flyers."
  }
];