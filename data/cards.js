const creditCards = [

  // =====================
  // AMEX MEMBERSHIP REWARDS
  // Point value estimate: 2.0 cents
  // =====================
  {
    name: "American Express Gold Card",
    issuer: "Amex",
    ecosystem: "Amex Membership Rewards",
    annualFee: 325,
    pointValue: 0.02,
    bestFor: "Dining + Groceries",
    rewards: { dining: 4, groceries: 4, gas: 1, rent: 1, hotels: 2, flights: 3, other: 1 },
    benefits: ["4x dining", "4x U.S. supermarkets", "3x flights booked directly or with Amex Travel", "Strong food-spend card"],
    why: "Best for people who spend heavily on dining and groceries."
  },
  {
    name: "The Platinum Card from American Express",
    issuer: "Amex",
    ecosystem: "Amex Membership Rewards",
    annualFee: 695,
    pointValue: 0.02,
    bestFor: "Flights + Luxury Travel",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 5, flights: 5, other: 1 },
    benefits: ["5x flights", "5x prepaid hotels through Amex Travel", "Airport lounge access", "Premium travel credits"],
    why: "Best for frequent flyers who value airport and luxury travel perks."
  },
  {
    name: "American Express Green Card",
    issuer: "Amex",
    ecosystem: "Amex Membership Rewards",
    annualFee: 150,
    pointValue: 0.02,
    bestFor: "Travel + Dining",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["3x travel", "3x transit", "3x dining", "Flexible Membership Rewards points"],
    why: "Best for broad travel and dining without Platinum-level fees."
  },
  

  // =====================
  // AMEX CASH BACK
  // Point value estimate: 1.0 cent
  // =====================
  {
    name: "Blue Cash Preferred Card",
    issuer: "Amex",
    ecosystem: "Cash Back",
    annualFee: 95,
    pointValue: 0.01,
    bestFor: "Groceries + Gas",
    rewards: { dining: 1, groceries: 6, gas: 3, rent: 1, hotels: 1, flights: 1, other: 1 },
    benefits: ["High cash back at U.S. supermarkets", "Gas rewards", "Streaming rewards", "Great family spending card"],
    why: "Best for grocery-heavy households that prefer cash back."
  },
  {
    name: "Blue Cash Everyday Card",
    issuer: "Amex",
    ecosystem: "Cash Back",
    annualFee: 0,
    pointValue: 0.01,
    bestFor: "Groceries + Gas + Online Shopping",
    rewards: { dining: 1, groceries: 3, gas: 3, rent: 1, hotels: 1, flights: 1, other: 1 },
    benefits: ["No annual fee", "Groceries rewards", "Gas rewards", "Online retail rewards"],
    why: "Best no-fee Amex for everyday cash back."
  },
  

  // =====================
  // AMEX DELTA
  // Point value estimate: 1.2 cents
  // =====================
  {
    name: "Delta SkyMiles Blue American Express Card",
    issuer: "Amex / Delta",
    ecosystem: "Delta SkyMiles",
    annualFee: 0,
    pointValue: 0.012,
    bestFor: "Starter Delta",
    rewards: { dining: 2, groceries: 1, gas: 1, rent: 1, hotels: 1, flights: 2, other: 1 },
    benefits: ["No annual fee", "2x Delta purchases", "2x dining", "Starter Delta card"],
    why: "Best no-fee card for casual Delta flyers."
  },
  {
    name: "Delta SkyMiles Gold American Express Card",
    issuer: "Amex / Delta",
    ecosystem: "Delta SkyMiles",
    annualFee: 150,
    pointValue: 0.012,
    bestFor: "Delta Flights",
    rewards: { dining: 2, groceries: 2, gas: 1, rent: 1, hotels: 1, flights: 2, other: 1 },
    benefits: ["Free checked bag on Delta", "Priority boarding", "2x Delta purchases", "2x dining and groceries"],
    why: "Best for occasional Delta flyers who check bags."
  },
  {
    name: "Delta SkyMiles Platinum American Express Card",
    issuer: "Amex / Delta",
    ecosystem: "Delta SkyMiles",
    annualFee: 350,
    pointValue: 0.012,
    bestFor: "Delta Flyers",
    rewards: { dining: 2, groceries: 2, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["3x Delta purchases", "3x hotels", "Companion certificate", "Free checked bag"],
    why: "Best for Delta flyers who can use the companion certificate."
  },
  {
    name: "Delta SkyMiles Reserve American Express Card",
    issuer: "Amex / Delta",
    ecosystem: "Delta SkyMiles",
    annualFee: 650,
    pointValue: 0.012,
    bestFor: "Premium Delta",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 1, flights: 3, other: 1 },
    benefits: ["Delta lounge access benefits", "3x Delta purchases", "Companion certificate", "Premium Delta travel perks"],
    why: "Best for loyal Delta flyers who want premium airport perks."
  },

  // =====================
  // AMEX HILTON
  // Point value estimate: 0.5 cents
  // =====================
  {
    name: "Hilton Honors American Express Card",
    issuer: "Amex / Hilton",
    ecosystem: "Hilton Honors",
    annualFee: 0,
    pointValue: 0.005,
    bestFor: "Starter Hilton",
    rewards: { dining: 5, groceries: 5, gas: 5, rent: 3, hotels: 7, flights: 3, other: 3 },
    benefits: ["No annual fee", "Hilton Honors points", "Good starter hotel card", "Bonus points at Hilton"],
    why: "Best no-fee Hilton card."
  },
  {
    name: "Hilton Honors Surpass Card",
    issuer: "Amex / Hilton",
    ecosystem: "Hilton Honors",
    annualFee: 150,
    pointValue: 0.005,
    bestFor: "Hilton + Everyday Spend",
    rewards: { dining: 6, groceries: 6, gas: 6, rent: 3, hotels: 12, flights: 3, other: 3 },
    benefits: ["High Hilton earning", "Bonus points on dining, groceries, and gas", "Hilton status benefits", "Good middle-tier Hilton card"],
    why: "Best for Hilton loyalists with strong everyday spending."
  },
  {
    name: "Hilton Honors Aspire Card",
    issuer: "Amex / Hilton",
    ecosystem: "Hilton Honors",
    annualFee: 550,
    pointValue: 0.005,
    bestFor: "Premium Hilton",
    rewards: { dining: 7, groceries: 3, gas: 3, rent: 3, hotels: 14, flights: 7, other: 3 },
    benefits: ["Premium Hilton benefits", "High Hilton earning", "Resort and travel credits", "Top-tier Hilton perks"],
    why: "Best for Hilton loyalists who use premium hotel benefits."
  },

  // =====================
  // AMEX MARRIOTT
  // Point value estimate: 0.8 cents
  // =====================
  {
    name: "Marriott Bonvoy Bevy American Express Card",
    issuer: "Amex / Marriott",
    ecosystem: "Marriott Bonvoy",
    annualFee: 250,
    pointValue: 0.008,
    bestFor: "Marriott + Dining",
    rewards: { dining: 4, groceries: 4, gas: 4, rent: 2, hotels: 6, flights: 2, other: 2 },
    benefits: ["Marriott points", "Dining and grocery bonus categories", "Elite night credits", "Good Marriott earning"],
    why: "Best for Marriott travelers who also spend on dining and groceries."
  },
  {
    name: "Marriott Bonvoy Brilliant American Express Card",
    issuer: "Amex / Marriott",
    ecosystem: "Marriott Bonvoy",
    annualFee: 650,
    pointValue: 0.008,
    bestFor: "Premium Marriott",
    rewards: { dining: 3, groceries: 3, gas: 3, rent: 2, hotels: 6, flights: 3, other: 2 },
    benefits: ["Premium Marriott benefits", "Free night certificate", "Elite status benefits", "Travel credits"],
    why: "Best for Marriott loyalists who want premium hotel perks."
  },

  // =====================
  // CHASE ULTIMATE REWARDS
  // Point value estimate: 2.0 cents
  // =====================
  {
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    ecosystem: "Chase Ultimate Rewards",
    annualFee: 95,
    pointValue: 0.02,
    bestFor: "Travel + Dining",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 5, flights: 5, other: 1 },
    benefits: ["5x Chase Travel", "3x dining", "Transfer partners like Hyatt and United", "Great beginner travel card"],
    why: "Best starter card for flexible travel points."
  },
  {
    name: "Chase Sapphire Reserve",
    issuer: "Chase",
    ecosystem: "Chase Ultimate Rewards",
    annualFee: 795,
    pointValue: 0.02,
    bestFor: "Premium Travel",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 8, flights: 8, other: 1 },
    benefits: ["Premium travel rewards", "Airport lounge access", "Travel credits", "Strong travel protection"],
    why: "Best for premium travelers who use Chase benefits often."
  },
  {
    name: "Chase Freedom Unlimited",
    issuer: "Chase",
    ecosystem: "Chase Ultimate Rewards",
    annualFee: 0,
    pointValue: 0.02,
    bestFor: "Everyday Spend",
    rewards: { dining: 3, groceries: 1.5, gas: 1.5, rent: 1.5, hotels: 5, flights: 5, other: 1.5 },
    benefits: ["No annual fee", "1.5x on everyday purchases", "3x dining", "Pairs well with Sapphire cards"],
    why: "Best Chase catch-all card."
  },
  {
    name: "Chase Freedom Flex",
    issuer: "Chase",
    ecosystem: "Chase Ultimate Rewards",
    annualFee: 0,
    pointValue: 0.02,
    bestFor: "Rotating Categories",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 5, flights: 5, other: 1 },
    benefits: ["No annual fee", "Rotating 5x categories", "3x dining", "Pairs well with Sapphire cards"],
    why: "Best for maximizing rotating bonus categories."
  },
  {
    name: "Chase Freedom Rise",
    issuer: "Chase",
    ecosystem: "Chase Ultimate Rewards",
    annualFee: 0,
    pointValue: 0.02,
    bestFor: "Building Credit",
    rewards: { dining: 1.5, groceries: 1.5, gas: 1.5, rent: 1.5, hotels: 1.5, flights: 1.5, other: 1.5 },
    benefits: ["No annual fee", "Designed for newer credit users", "Simple earning"],
    why: "Best Chase starter card for building credit."
  },

  // =====================
  // CHASE MARRIOTT
  // Point value estimate: 0.8 cents
  // =====================
  {
    name: "Marriott Bonvoy Bold",
    issuer: "Chase / Marriott",
    ecosystem: "Marriott Bonvoy",
    annualFee: 0,
    pointValue: 0.008,
    bestFor: "No-Fee Marriott",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 2, other: 1 },
    benefits: ["No annual fee", "Marriott points", "Starter Marriott card", "Travel rewards"],
    why: "Best no-fee Marriott card."
  },
  {
    name: "Marriott Bonvoy Boundless",
    issuer: "Chase / Marriott",
    ecosystem: "Marriott Bonvoy",
    annualFee: 95,
    pointValue: 0.008,
    bestFor: "Marriott Hotels",
    rewards: { dining: 3, groceries: 3, gas: 3, rent: 2, hotels: 6, flights: 2, other: 2 },
    benefits: ["Free night certificate", "Marriott points", "Elite night credits", "Good mid-tier Marriott card"],
    why: "Best starter Marriott card with an annual free night."
  },
  {
    name: "Marriott Bonvoy Bountiful",
    issuer: "Chase / Marriott",
    ecosystem: "Marriott Bonvoy",
    annualFee: 250,
    pointValue: 0.008,
    bestFor: "Marriott + Everyday Spend",
    rewards: { dining: 4, groceries: 4, gas: 4, rent: 2, hotels: 6, flights: 2, other: 2 },
    benefits: ["Marriott points", "Bonus categories", "Elite night credits", "Mid-premium Marriott card"],
    why: "Best for Marriott loyalists with everyday spending."
  },

  // =====================
  // CHASE HYATT
  // Point value estimate: 2.0 cents
  // =====================
  {
    name: "World of Hyatt Credit Card",
    issuer: "Chase / Hyatt",
    ecosystem: "World of Hyatt",
    annualFee: 95,
    pointValue: 0.02,
    bestFor: "Hyatt Hotels",
    rewards: { dining: 2, groceries: 1, gas: 1, rent: 1, hotels: 4, flights: 2, other: 1 },
    benefits: ["Hyatt points", "Free night certificate", "Elite night credits", "Great hotel redemption value"],
    why: "Best for Hyatt travelers."
  },

  // =====================
  // CHASE IHG
  // Point value estimate: 0.5 cents
  // =====================
  {
    name: "IHG One Rewards Traveler",
    issuer: "Chase / IHG",
    ecosystem: "IHG One Rewards",
    annualFee: 0,
    pointValue: 0.005,
    bestFor: "No-Fee IHG",
    rewards: { dining: 3, groceries: 3, gas: 3, rent: 2, hotels: 5, flights: 2, other: 2 },
    benefits: ["No annual fee", "IHG points", "Starter hotel card", "Good for casual IHG stays"],
    why: "Best no-fee IHG card."
  },
  {
    name: "IHG One Rewards Premier",
    issuer: "Chase / IHG",
    ecosystem: "IHG One Rewards",
    annualFee: 99,
    pointValue: 0.005,
    bestFor: "IHG Hotels",
    rewards: { dining: 5, groceries: 5, gas: 5, rent: 3, hotels: 10, flights: 3, other: 3 },
    benefits: ["IHG points", "Anniversary free night", "Strong hotel earning", "IHG status benefits"],
    why: "Best for IHG travelers."
  },

  // =====================
  // CHASE UNITED
  // Point value estimate: 1.3 cents
  // =====================
  {
    name: "United Gateway Card",
    issuer: "Chase / United",
    ecosystem: "United MileagePlus",
    annualFee: 0,
    pointValue: 0.013,
    bestFor: "No-Fee United",
    rewards: { dining: 2, groceries: 1, gas: 2, rent: 1, hotels: 1, flights: 2, other: 1 },
    benefits: ["No annual fee", "United miles", "Good starter United card"],
    why: "Best no-fee United card."
  },
  {
    name: "United Explorer Card",
    issuer: "Chase / United",
    ecosystem: "United MileagePlus",
    annualFee: 95,
    pointValue: 0.013,
    bestFor: "United Flights",
    rewards: { dining: 2, groceries: 1, gas: 1, rent: 1, hotels: 2, flights: 2, other: 1 },
    benefits: ["Free checked bag", "Priority boarding", "United miles", "Good beginner airline card"],
    why: "Best for occasional United flyers."
  },
  {
    name: "United Quest Card",
    issuer: "Chase / United",
    ecosystem: "United MileagePlus",
    annualFee: 250,
    pointValue: 0.013,
    bestFor: "United Loyalists",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["United travel credits", "Free checked bags", "3x United purchases", "Good for frequent United flyers"],
    why: "Best for frequent United travelers."
  },
  {
    name: "United Club Card",
    issuer: "Chase / United",
    ecosystem: "United MileagePlus",
    annualFee: 695,
    pointValue: 0.013,
    bestFor: "Premium United",
    rewards: { dining: 2, groceries: 1, gas: 1, rent: 1, hotels: 2, flights: 4, other: 1 },
    benefits: ["United Club membership", "Free checked bags", "Premium United perks", "Strong airline benefits"],
    why: "Best for United flyers who value lounge access."
  },

  // =====================
  // CHASE SOUTHWEST
  // Point value estimate: 1.3 cents
  // =====================
  {
    name: "Southwest Rapid Rewards Plus",
    issuer: "Chase / Southwest",
    ecosystem: "Southwest Rapid Rewards",
    annualFee: 69,
    pointValue: 0.013,
    bestFor: "Southwest Starter",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 2, flights: 2, other: 1 },
    benefits: ["Southwest points", "Anniversary points", "Low annual fee", "Good starter Southwest card"],
    why: "Best low-fee Southwest card."
  },
  {
    name: "Southwest Rapid Rewards Premier",
    issuer: "Chase / Southwest",
    ecosystem: "Southwest Rapid Rewards",
    annualFee: 99,
    pointValue: 0.013,
    bestFor: "Southwest Flyers",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["Southwest points", "Anniversary points", "Better Southwest earning", "No foreign transaction fees"],
    why: "Best middle-tier Southwest card."
  },
  {
    name: "Southwest Rapid Rewards Priority",
    issuer: "Chase / Southwest",
    ecosystem: "Southwest Rapid Rewards",
    annualFee: 149,
    pointValue: 0.013,
    bestFor: "Frequent Southwest",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["Southwest travel credit", "Anniversary points", "Upgraded boarding benefits", "Best personal Southwest card"],
    why: "Best for frequent Southwest flyers."
  },

  // =====================
  // CHASE AIRLINE PARTNERS
  // Point value estimates vary
  // =====================
  {
    name: "Aeroplan Card",
    issuer: "Chase / Air Canada",
    ecosystem: "Air Canada Aeroplan",
    annualFee: 95,
    pointValue: 0.017,
    bestFor: "Star Alliance Travel",
    rewards: { dining: 3, groceries: 3, gas: 1, rent: 1, hotels: 1, flights: 3, other: 1 },
    benefits: ["Aeroplan points", "Star Alliance redemptions", "Good travel partners"],
    why: "Best for people who understand airline transfer redemptions."
  },
  {
    name: "British Airways Visa Signature Card",
    issuer: "Chase / British Airways",
    ecosystem: "Avios",
    annualFee: 95,
    pointValue: 0.015,
    bestFor: "Avios Flights",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["Avios points", "British Airways purchases", "Partner airline redemptions"],
    why: "Best for Avios users and partner redemptions."
  },
  {
    name: "Aer Lingus Visa Signature Card",
    issuer: "Chase / Aer Lingus",
    ecosystem: "Avios",
    annualFee: 95,
    pointValue: 0.015,
    bestFor: "Avios Flights",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["Avios points", "Aer Lingus purchases", "Partner airline redemptions"],
    why: "Best for Avios users flying Aer Lingus."
  },
  {
    name: "Iberia Visa Signature Card",
    issuer: "Chase / Iberia",
    ecosystem: "Avios",
    annualFee: 95,
    pointValue: 0.015,
    bestFor: "Avios Flights",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["Avios points", "Iberia purchases", "Partner airline redemptions"],
    why: "Best for Avios users flying Iberia."
  },

  // =====================
  // CHASE CASH / RETAIL
  // Point value estimate: 1.0 cent
  // =====================
  {
    name: "Prime Visa",
    issuer: "Chase / Amazon",
    ecosystem: "Cash Back",
    annualFee: 0,
    pointValue: 0.01,
    bestFor: "Amazon + Whole Foods",
    rewards: { dining: 2, groceries: 2, gas: 2, rent: 1, hotels: 5, flights: 5, other: 1 },
    benefits: ["High Amazon earning", "Whole Foods rewards", "No annual fee with Prime"],
    why: "Best for heavy Amazon and Whole Foods shoppers."
  },
  {
    name: "Amazon Visa",
    issuer: "Chase / Amazon",
    ecosystem: "Cash Back",
    annualFee: 0,
    pointValue: 0.01,
    bestFor: "Amazon",
    rewards: { dining: 2, groceries: 2, gas: 2, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["Amazon rewards", "No annual fee", "Useful retail card"],
    why: "Best for Amazon shoppers without Prime."
  },


  // =====================
  // CAPITAL ONE MILES
  // Point value estimate: 1.8 cents
  // =====================
  {
    name: "Capital One Venture X",
    issuer: "Capital One",
    ecosystem: "Capital One Miles",
    annualFee: 395,
    pointValue: 0.018,
    bestFor: "Premium Travel + Catch-All",
    rewards: { dining: 2, groceries: 2, gas: 2, rent: 2, hotels: 10, flights: 5, other: 2 },
    benefits: ["2x on everything", "10x hotels through Capital One Travel", "5x flights through Capital One Travel", "Airport lounge access"],
    why: "Best premium card for simple 2x earning."
  },
  {
    name: "Capital One Venture Rewards",
    issuer: "Capital One",
    ecosystem: "Capital One Miles",
    annualFee: 95,
    pointValue: 0.018,
    bestFor: "Simple Travel Rewards",
    rewards: { dining: 2, groceries: 2, gas: 2, rent: 2, hotels: 5, flights: 5, other: 2 },
    benefits: ["2x on every purchase", "Simple miles earning", "Travel transfer partners", "Good mid-tier travel card"],
    why: "Best for simple travel rewards without tracking categories."
  },
  {
    name: "Capital One VentureOne",
    issuer: "Capital One",
    ecosystem: "Capital One Miles",
    annualFee: 0,
    pointValue: 0.018,
    bestFor: "No-Fee Travel",
    rewards: { dining: 1.25, groceries: 1.25, gas: 1.25, rent: 1.25, hotels: 5, flights: 1.25, other: 1.25 },
    benefits: ["No annual fee", "Travel miles", "Simple rewards", "Beginner-friendly"],
    why: "Best no-fee Capital One travel card."
  },

  // =====================
  // CAPITAL ONE CASH BACK
  // Point value estimate: 1.0 cent
  // =====================
  {
    name: "Capital One Savor",
    issuer: "Capital One",
    ecosystem: "Cash Back",
    annualFee: 0,
    pointValue: 0.01,
    bestFor: "Dining + Groceries + Entertainment",
    rewards: { dining: 3, groceries: 3, gas: 1, rent: 1, hotels: 5, flights: 5, other: 1 },
    benefits: ["3x dining", "3x groceries", "3x entertainment", "No annual fee"],
    why: "Best Capital One card for dining and groceries."
  },
  {
    name: "Capital One Quicksilver",
    issuer: "Capital One",
    ecosystem: "Cash Back",
    annualFee: 0,
    pointValue: 0.01,
    bestFor: "Simple Cash Back",
    rewards: { dining: 1.5, groceries: 1.5, gas: 1.5, rent: 1.5, hotels: 1.5, flights: 1.5, other: 1.5 },
    benefits: ["Flat cash back", "No annual fee", "Simple rewards", "Easy beginner card"],
    why: "Best for simple cash back on everything."
  },
  {
    name: "Capital One QuicksilverOne",
    issuer: "Capital One",
    ecosystem: "Cash Back",
    annualFee: 39,
    pointValue: 0.01,
    bestFor: "Fair Credit Cash Back",
    rewards: { dining: 1.5, groceries: 1.5, gas: 1.5, rent: 1.5, hotels: 1.5, flights: 1.5, other: 1.5 },
    benefits: ["Flat cash back", "For fair credit", "Simple rewards"],
    why: "Best for users building credit who still want cash back."
  },

  // =====================
  // CITI THANKYOU POINTS
  // Point value estimate: 1.8 cents
  // =====================
  {
    name: "Citi Strata Elite Card",
    issuer: "Citi",
    ecosystem: "Citi ThankYou Points",
    annualFee: 595,
    pointValue: 0.018,
    bestFor: "Premium Citi Travel",
    rewards: { dining: 3, groceries: 1.5, gas: 1.5, rent: 1.5, hotels: 6, flights: 6, other: 1.5 },
    benefits: ["Premium Citi travel card", "ThankYou transfer partners", "Travel benefits"],
    why: "Best premium Citi option for travel-focused users."
  },
  {
    name: "Citi Strata Premier Card",
    issuer: "Citi",
    ecosystem: "Citi ThankYou Points",
    annualFee: 95,
    pointValue: 0.018,
    bestFor: "Travel + Everyday",
    rewards: { dining: 3, groceries: 3, gas: 3, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["3x travel", "3x dining", "3x supermarkets", "3x gas"],
    why: "Best all-around Citi travel card."
  },
  {
    name: "Citi Double Cash Card",
    issuer: "Citi",
    ecosystem: "Citi ThankYou Points",
    annualFee: 0,
    pointValue: 0.018,
    bestFor: "Catch-All Spend",
    rewards: { dining: 2, groceries: 2, gas: 2, rent: 2, hotels: 2, flights: 2, other: 2 },
    benefits: ["2x total earning", "No annual fee", "Excellent catch-all card"],
    why: "Best Citi catch-all card."
  },
  {
    name: "Citi Custom Cash Card",
    issuer: "Citi",
    ecosystem: "Citi ThankYou Points",
    annualFee: 0,
    pointValue: 0.018,
    bestFor: "Top Monthly Category",
    rewards: { dining: 5, groceries: 5, gas: 5, rent: 1, hotels: 1, flights: 1, other: 1 },
    benefits: ["5x eligible top spend category", "No annual fee", "Great category optimizer"],
    why: "Best for one high monthly spending category."
  },
  {
    name: "Citi Rewards+ Card",
    issuer: "Citi",
    ecosystem: "Citi ThankYou Points",
    annualFee: 0,
    pointValue: 0.018,
    bestFor: "Small Purchases",
    rewards: { dining: 1, groceries: 2, gas: 2, rent: 1, hotels: 1, flights: 1, other: 1 },
    benefits: ["Rounds up points on purchases", "No annual fee", "Useful with other Citi cards"],
    why: "Best as a supporting Citi card."
  },



  // =====================
  // CITI AMERICAN AIRLINES
  // Point value estimate: 1.4 cents
  // =====================
  {
    name: "American Airlines AAdvantage MileUp Card",
    issuer: "Citi / American Airlines",
    ecosystem: "American AAdvantage",
    annualFee: 0,
    pointValue: 0.014,
    bestFor: "No-Fee American Airlines",
    rewards: { dining: 1, groceries: 2, gas: 1, rent: 1, hotels: 1, flights: 2, other: 1 },
    benefits: ["No annual fee", "AAdvantage miles", "Good starter AA card"],
    why: "Best no-fee American Airlines card."
  },
  {
    name: "Citi AAdvantage Platinum Select World Elite Mastercard",
    issuer: "Citi / American Airlines",
    ecosystem: "American AAdvantage",
    annualFee: 99,
    pointValue: 0.014,
    bestFor: "American Airlines",
    rewards: { dining: 2, groceries: 1, gas: 2, rent: 1, hotels: 1, flights: 2, other: 1 },
    benefits: ["Free checked bag", "Preferred boarding", "AAdvantage miles", "Good AA travel card"],
    why: "Best for occasional American Airlines flyers."
  },
  {
    name: "Citi AAdvantage Executive World Elite Mastercard",
    issuer: "Citi / American Airlines",
    ecosystem: "American AAdvantage",
    annualFee: 595,
    pointValue: 0.014,
    bestFor: "Premium American Airlines",
    rewards: { dining: 1, groceries: 1, gas: 1, rent: 1, hotels: 1, flights: 4, other: 1 },
    benefits: ["Admirals Club access", "Premium AA benefits", "Free checked bag", "Priority perks"],
    why: "Best for loyal American Airlines flyers who value lounge access."
  },

  // =====================
  // BILT
  // Point value estimate: 2.0 cents
  // =====================
  {
    name: "Bilt Mastercard",
    issuer: "Bilt",
    ecosystem: "Bilt Rewards",
    annualFee: 0,
    pointValue: 0.02,
    bestFor: "Rent",
    rewards: { dining: 3, groceries: 1, gas: 1, rent: 1, hotels: 2, flights: 2, other: 1 },
    benefits: ["Earn points on rent", "No annual fee", "3x dining", "Transfer partners"],
    why: "Best for renters who want points on rent payments."
  },
  {
    name: "Bilt Blue Card",
    issuer: "Bilt",
    ecosystem: "Bilt Rewards",
    annualFee: 0,
    pointValue: 0.02,
    bestFor: "Rent + Starter Bilt",
    rewards: { dining: 2, groceries: 1, gas: 1, rent: 1, hotels: 1, flights: 1, other: 1 },
    benefits: ["No annual fee", "Bilt rewards", "Designed for rent rewards"],
    why: "Best starter Bilt option as Bilt transitions to its new lineup."
  },
  {
    name: "Bilt Obsidian Card",
    issuer: "Bilt",
    ecosystem: "Bilt Rewards",
    annualFee: 95,
    pointValue: 0.02,
    bestFor: "Rent + Dining",
    rewards: { dining: 3, groceries: 2, gas: 1, rent: 1, hotels: 2, flights: 2, other: 1 },
    benefits: ["Bilt rewards", "Mid-tier Bilt option", "Rent-focused rewards"],
    why: "Best mid-tier Bilt option if the new lineup fits your rent strategy."
  },
  {
    name: "Bilt Palladium Card",
    issuer: "Bilt",
    ecosystem: "Bilt Rewards",
    annualFee: 495,
    pointValue: 0.02,
    bestFor: "Premium Bilt",
    rewards: { dining: 4, groceries: 2, gas: 1, rent: 1, hotels: 3, flights: 3, other: 1 },
    benefits: ["Premium Bilt option", "Bilt rewards", "Travel and rent-focused benefits"],
    why: "Best premium Bilt option if you use the higher-tier benefits."
  }

];