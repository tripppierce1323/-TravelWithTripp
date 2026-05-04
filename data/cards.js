const creditCards = [

  // =====================
  // AMEX MEMBERSHIP REWARDS
  // =====================

  {
    name: "American Express Gold Card",
    issuer: "Amex",
    issuerTag: "amex",
    ecosystem: "Amex Membership Rewards",
    annualFee: 325,
    pointValue: 0.02,
    type: "flexible",
    brand: "amex",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Dining + Groceries",

    rewards: {
      dining: 4,
      groceries: 4,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 1,
      travelPortal: 3,
      other: 1
    },

    multipliers: [
      "4x dining",
      "4x U.S. supermarkets",
      "3x flights booked directly or with Amex Travel",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "One of my favorite everyday points cards for people who spend a lot on food. The big thing is making sure you naturally use the credits.",

    bestPairing: "Pairs well with Amex Platinum or Blue Business Plus.",

    goodFor: [
      "Dining",
      "Groceries",
      "Flexible Amex points",
      "People who can use food-related credits"
    ],

    notGoodFor: [
      "People who hate monthly credits",
      "People who want hotel-specific perks",
      "Simple cash back users"
    ],

    featuredCard: true,

    tags: ["amex", "flexible", "dining", "groceries", "travel"],

    benefits: [
      "4x dining",
      "4x U.S. supermarkets",
      "3x flights booked directly or with Amex Travel",
      "Strong food-spend card"
    ],

    why: "Best for people who spend heavily on dining and groceries.",

    weaknesses: [
      "Credits require monthly usage",
      "Not the best hotel card"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "The Platinum Card from American Express",
    issuer: "Amex",
    issuerTag: "amex",
    ecosystem: "Amex Membership Rewards",
    annualFee: 895,
    pointValue: 0.02,
    type: "flexible",
    brand: "amex",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Flights + Luxury Travel",

    rewards: {
      dining: 1,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 5,
      hotelsDirect: 1,
      travelPortal: 5,
      other: 1
    },

    multipliers: [
      "5x flights booked directly with airlines or through Amex Travel",
      "5x prepaid hotels booked through Amex Travel",
      "1x most other purchases"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is more of a luxury perks card than an everyday spending card. It can be incredible if you use the lounges, credits, and premium travel benefits, but it is not the card I would use for normal daily spending.",

    bestPairing: "Pairs well with Amex Gold for dining and groceries.",

    goodFor: [
      "Airport lounge access",
      "Flights",
      "Luxury travel perks",
      "People who can use premium credits"
    ],

    notGoodFor: [
      "Everyday spending",
      "People who do not travel often",
      "People who will not use the credits"
    ],

    featuredCard: true,

    tags: ["amex", "flexible", "premium", "flights", "luxuryTravel"],

    benefits: [
      "5x flights",
      "5x prepaid hotels through Amex Travel",
      "Airport lounge access",
      "Premium travel credits"
    ],

    why: "Best for frequent flyers who value airport and luxury travel perks.",

    weaknesses: [
      "Very high annual fee",
      "Credits can be hard to fully use",
      "Not strong for everyday spending"
    ],

    premium: true,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "American Express Green Card",
    issuer: "Amex",
    issuerTag: "amex",
    ecosystem: "Amex Membership Rewards",
    annualFee: 150,
    pointValue: 0.02,
    type: "flexible",
    brand: "amex",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Travel + Dining",

    rewards: {
      dining: 3,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 3,
      other: 1
    },

    multipliers: [
      "3x travel",
      "3x transit",
      "3x dining",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A solid broad travel and dining card, but I would usually compare it closely against the Chase Sapphire Preferred before choosing it.",

    bestPairing: "Pairs well with Amex Gold if you want to stay inside Membership Rewards.",

    goodFor: [
      "Broad travel",
      "Transit",
      "Dining",
      "Flexible Amex points"
    ],

    notGoodFor: [
      "Groceries",
      "Premium airport perks",
      "People who want the simplest beginner card"
    ],

    featuredCard: false,

    tags: ["amex", "flexible", "travel", "dining"],

    benefits: [
      "3x travel",
      "3x transit",
      "3x dining",
      "Flexible Membership Rewards points"
    ],

    why: "Best for broad travel and dining without Platinum-level fees.",

    weaknesses: [
      "Not best for groceries",
      "Less premium travel perks than Platinum"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  // =====================
  // AMEX CASH BACK
  // =====================

  {
    name: "Blue Cash Preferred Card",
    issuer: "Amex",
    issuerTag: "amex",
    ecosystem: "Cash Back",
    annualFee: 95,
    pointValue: 0.01,
    type: "cashback",
    brand: "amex",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Groceries + Gas",

    rewards: {
      dining: 1,
      groceries: 6,
      gas: 3,
      rent: 0,
      flightsDirect: 1,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "6% back at U.S. supermarkets",
      "3% back on gas",
      "3% back on transit",
      "1% back elsewhere"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is a strong cash back card for families or grocery-heavy households. I would use this more for simple cash back than travel points.",

    bestPairing: "Pairs well with a flexible travel card like Chase Sapphire Preferred or Venture X.",

    goodFor: [
      "Groceries",
      "Gas",
      "Cash back",
      "Families"
    ],

    notGoodFor: [
      "Transferable travel points",
      "Luxury travel perks"
    ],

    featuredCard: true,

    tags: ["amex", "cashback", "groceries", "gas"],

    benefits: [
      "6x cash back at U.S. supermarkets",
      "3x gas",
      "Streaming rewards",
      "Great family spending card"
    ],

    why: "Best for grocery-heavy households that prefer cash back.",

    weaknesses: [
      "Not ideal for travel points"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Blue Cash Everyday Card",
    issuer: "Amex",
    issuerTag: "amex",
    ecosystem: "Cash Back",
    annualFee: 0,
    pointValue: 0.01,
    type: "cashback",
    brand: "amex",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Groceries + Gas + Online Shopping",

    rewards: {
      dining: 1,
      groceries: 3,
      gas: 3,
      rent: 0,
      flightsDirect: 1,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "3% back at U.S. supermarkets",
      "3% back on gas",
      "3% back on U.S. online retail",
      "1% back elsewhere"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A good no-annual-fee starter card for people who want easy cash back on common everyday categories.",

    bestPairing: "Pairs well with Blue Cash Preferred or a flexible travel card.",

    goodFor: [
      "No annual fee",
      "Groceries",
      "Gas",
      "Online shopping"
    ],

    notGoodFor: [
      "Premium travel",
      "Transferable points strategy"
    ],

    featuredCard: false,

    tags: ["amex", "cashback", "groceries", "gas", "noAnnualFee"],

    benefits: [
      "No annual fee",
      "3x groceries",
      "3x gas",
      "Online retail rewards"
    ],

    why: "Best no-fee Amex for everyday cash back.",

    weaknesses: [
      "Not a premium travel card"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  // =====================
  // AMEX DELTA
  // =====================

  {
    name: "Delta SkyMiles Blue American Express Card",
    issuer: "Amex / Delta",
    issuerTag: "amex",
    ecosystem: "Delta SkyMiles",
    annualFee: 0,
    pointValue: 0.012,
    type: "airline",
    brand: "delta",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Starter Delta",

    rewards: {
      dining: 2,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "2x Delta purchases",
      "2x dining",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A simple no-fee Delta starter card, but most Delta flyers will probably get more value from the Gold version if they check bags.",

    bestPairing: "Pairs well with Amex Gold or Amex Platinum.",

    goodFor: [
      "No annual fee",
      "Casual Delta flyers",
      "Dining"
    ],

    notGoodFor: [
      "Free checked bag perks",
      "Premium Delta perks",
      "Everyday earning"
    ],

    featuredCard: false,

    tags: ["amex", "airline", "delta", "noAnnualFee"],

    benefits: [
      "No annual fee",
      "2x Delta purchases",
      "2x dining",
      "Starter Delta card"
    ],

    why: "Best no-fee card for casual Delta flyers.",

    weaknesses: [
      "Limited premium Delta perks"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Delta SkyMiles Gold American Express Card",
    issuer: "Amex / Delta",
    issuerTag: "amex",
    ecosystem: "Delta SkyMiles",
    annualFee: 150,
    pointValue: 0.012,
    type: "airline",
    brand: "delta",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Delta Flights",

    rewards: {
      dining: 2,
      groceries: 2,
      gas: 1,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "2x Delta purchases",
      "2x dining",
      "2x groceries",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is usually the Delta card I would look at first if you fly Delta occasionally and value the checked bag benefit.",

    bestPairing: "Pairs well with Amex Gold or Amex Platinum.",

    goodFor: [
      "Occasional Delta flyers",
      "Free checked bag",
      "Priority boarding"
    ],

    notGoodFor: [
      "People who rarely fly Delta",
      "Maximizing everyday points"
    ],

    featuredCard: false,

    tags: ["amex", "airline", "delta"],

    benefits: [
      "Free checked bag on Delta",
      "Priority boarding",
      "2x Delta purchases",
      "2x dining and groceries"
    ],

    why: "Best for occasional Delta flyers who check bags.",

    weaknesses: [
      "Not the best everyday earning card"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Delta SkyMiles Platinum American Express Card",
    issuer: "Amex / Delta",
    issuerTag: "amex",
    ecosystem: "Delta SkyMiles",
    annualFee: 350,
    pointValue: 0.012,
    type: "airline",
    brand: "delta",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Delta Flyers",

    rewards: {
      dining: 2,
      groceries: 2,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "3x Delta purchases",
      "3x hotels",
      "2x dining",
      "2x groceries",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This card starts to make sense if you fly Delta enough to use the companion certificate and Delta-specific perks.",

    bestPairing: "Pairs well with Amex Gold for stronger everyday food spending.",

    goodFor: [
      "Delta flyers",
      "Companion certificate users",
      "Free checked bag"
    ],

    notGoodFor: [
      "People who rarely fly Delta",
      "Simple beginner setups"
    ],

    featuredCard: false,

    tags: ["amex", "airline", "delta"],

    benefits: [
      "3x Delta purchases",
      "3x hotels",
      "Companion certificate",
      "Free checked bag"
    ],

    why: "Best for Delta flyers who can use the companion certificate.",

    weaknesses: [
      "Only makes sense if you fly Delta enough"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "Delta SkyMiles Reserve American Express Card",
    issuer: "Amex / Delta",
    issuerTag: "amex",
    ecosystem: "Delta SkyMiles",
    annualFee: 650,
    pointValue: 0.012,
    type: "airline",
    brand: "delta",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Premium Delta",

    rewards: {
      dining: 1,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "3x Delta purchases",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is a premium Delta perks card, not an everyday earning card. I would only consider it if you are loyal to Delta and value the airport benefits.",

    bestPairing: "Pairs well with Amex Gold for everyday spending.",

    goodFor: [
      "Delta loyalists",
      "Premium Delta perks",
      "Airport benefits"
    ],

    notGoodFor: [
      "Everyday spending",
      "Casual Delta flyers",
      "Low-fee setups"
    ],

    featuredCard: false,

    tags: ["amex", "airline", "delta", "premium"],

    benefits: [
      "Delta lounge access benefits",
      "3x Delta purchases",
      "Companion certificate",
      "Premium Delta travel perks"
    ],

    why: "Best for loyal Delta flyers who want premium airport perks.",

    weaknesses: [
      "High annual fee",
      "Weak everyday earning"
    ],

    premium: true,
    beginnerFriendly: false,
    business: false
  },

  // =====================
  // AMEX HILTON
  // =====================

  {
    name: "Hilton Honors American Express Card",
    issuer: "Amex / Hilton",
    issuerTag: "amex",
    ecosystem: "Hilton Honors",
    annualFee: 0,
    pointValue: 0.005,
    type: "hotel",
    brand: "hilton",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Starter Hilton",

    rewards: {
      dining: 5,
      groceries: 5,
      gas: 5,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 7,
      travelPortal: 3,
      other: 3
    },

    multipliers: [
      "7x Hilton purchases",
      "5x dining",
      "5x groceries",
      "5x gas",
      "3x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A good no-fee Hilton starter card, but remember Hilton points are not worth the same as flexible points.",

    bestPairing: "Pairs well with a flexible travel card like Amex Gold, Sapphire Preferred, or Venture X.",

    goodFor: [
      "No annual fee",
      "Starter Hilton card",
      "Casual Hilton stays"
    ],

    notGoodFor: [
      "Flexible points",
      "People who do not stay at Hilton"
    ],

    featuredCard: false,

    tags: ["amex", "hotel", "hilton", "noAnnualFee"],

    benefits: [
      "No annual fee",
      "Hilton Honors points",
      "Good starter hotel card",
      "Bonus points at Hilton"
    ],

    why: "Best no-fee Hilton card.",

    weaknesses: [
      "Hilton points are worth less than flexible points"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Hilton Honors Surpass Card",
    issuer: "Amex / Hilton",
    issuerTag: "amex",
    ecosystem: "Hilton Honors",
    annualFee: 150,
    pointValue: 0.005,
    type: "hotel",
    brand: "hilton",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Hilton + Everyday Spend",

    rewards: {
      dining: 6,
      groceries: 6,
      gas: 6,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 12,
      travelPortal: 3,
      other: 3
    },

    multipliers: [
      "12x Hilton purchases",
      "6x dining",
      "6x groceries",
      "6x gas",
      "3x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This can be a strong Hilton card if you stay with Hilton and want a middle-tier hotel card, but I would not rank it above flexible points cards for normal dining and grocery spend.",

    bestPairing: "Pairs well with Amex Gold or Hilton Aspire.",

    goodFor: [
      "Hilton loyalists",
      "Hilton earning",
      "Dining, groceries, and gas inside Hilton points"
    ],

    notGoodFor: [
      "People who do not stay at Hilton",
      "Flexible travel points"
    ],

    featuredCard: false,

    tags: ["amex", "hotel", "hilton"],

    benefits: [
      "High Hilton earning",
      "Bonus points on dining, groceries, and gas",
      "Hilton status benefits",
      "Good middle-tier Hilton card"
    ],

    why: "Best for Hilton loyalists with strong everyday spending.",

    weaknesses: [
      "Less flexible than transferable points"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "Hilton Honors Aspire Card",
    issuer: "Amex / Hilton",
    issuerTag: "amex",
    ecosystem: "Hilton Honors",
    annualFee: 550,
    pointValue: 0.005,
    type: "hotel",
    brand: "hilton",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Premium Hilton",

    rewards: {
      dining: 7,
      groceries: 3,
      gas: 3,
      rent: 0,
      flightsDirect: 7,
      hotelsDirect: 14,
      travelPortal: 7,
      other: 3
    },

    multipliers: [
      "14x Hilton purchases",
      "7x flights",
      "7x dining",
      "3x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is the premium Hilton card. It can be very valuable for Hilton loyalists, but I would not recommend it just for dining or grocery earning.",

    bestPairing: "Pairs well with Amex Gold or Amex Platinum.",

    goodFor: [
      "Hilton loyalists",
      "Premium hotel benefits",
      "Resort and travel credits"
    ],

    notGoodFor: [
      "People who do not stay with Hilton",
      "Simple beginner setups",
      "Low annual fee setups"
    ],

    featuredCard: true,

    tags: ["amex", "hotel", "hilton", "premium", "luxuryTravel"],

    benefits: [
      "Premium Hilton benefits",
      "High Hilton earning",
      "Resort and travel credits",
      "Top-tier Hilton perks"
    ],

    why: "Best for Hilton loyalists who use premium hotel benefits.",

    weaknesses: [
      "High annual fee",
      "Best only if you stay with Hilton"
    ],

    premium: true,
    beginnerFriendly: false,
    business: false
  },

  // =====================
  // AMEX MARRIOTT
  // =====================

  {
    name: "Marriott Bonvoy Bevy American Express Card",
    issuer: "Amex / Marriott",
    issuerTag: "amex",
    ecosystem: "Marriott Bonvoy",
    annualFee: 250,
    pointValue: 0.008,
    type: "hotel",
    brand: "marriott",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Marriott + Dining",

    rewards: {
      dining: 4,
      groceries: 4,
      gas: 4,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 6,
      travelPortal: 2,
      other: 2
    },

    multipliers: [
      "6x Marriott purchases",
      "4x dining",
      "4x groceries",
      "2x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This can make sense for Marriott loyalists, but for dining and groceries I would usually prefer flexible points first.",

    bestPairing: "Pairs well with a premium Marriott card or a flexible points card.",

    goodFor: [
      "Marriott travelers",
      "Dining",
      "Groceries",
      "Hotel points"
    ],

    notGoodFor: [
      "People who do not stay with Marriott",
      "Flexible points maximizers"
    ],

    featuredCard: false,

    tags: ["amex", "hotel", "marriott"],

    benefits: [
      "Marriott points",
      "Dining and grocery bonus categories",
      "Elite night credits",
      "Good Marriott earning"
    ],

    why: "Best for Marriott travelers who also spend on dining and groceries.",

    weaknesses: [
      "Best only if you value Marriott points"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "Marriott Bonvoy Brilliant American Express Card",
    issuer: "Amex / Marriott",
    issuerTag: "amex",
    ecosystem: "Marriott Bonvoy",
    annualFee: 650,
    pointValue: 0.008,
    type: "hotel",
    brand: "marriott",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Premium Marriott",

    rewards: {
      dining: 3,
      groceries: 3,
      gas: 3,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 6,
      travelPortal: 3,
      other: 2
    },

    multipliers: [
      "6x Marriott purchases",
      "3x dining",
      "3x flights",
      "2x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A premium Marriott card for people who actually stay with Marriott enough to use the benefits. Not a simple everyday card.",

    bestPairing: "Pairs well with Amex Gold or Chase Sapphire Preferred.",

    goodFor: [
      "Marriott loyalists",
      "Premium Marriott perks",
      "Free night certificate"
    ],

    notGoodFor: [
      "People who do not stay with Marriott",
      "Low-fee setups",
      "Simple cash back users"
    ],

    featuredCard: false,

    tags: ["amex", "hotel", "marriott", "premium"],

    benefits: [
      "Premium Marriott benefits",
      "Free night certificate",
      "Elite status benefits",
      "Travel credits"
    ],

    why: "Best for Marriott loyalists who want premium hotel perks.",

    weaknesses: [
      "High annual fee",
      "Not a simple beginner card"
    ],

    premium: true,
    beginnerFriendly: false,
    business: false
  },];