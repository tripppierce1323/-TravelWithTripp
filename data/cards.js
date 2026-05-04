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
  },  
  
  // =====================
  // CHASE ULTIMATE REWARDS
  // =====================

  {
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    issuerTag: "chase",
    ecosystem: "Chase Ultimate Rewards",
    annualFee: 95,
    pointValue: 0.02,
    type: "flexible",
    brand: "chase",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Travel + Dining",

    rewards: {
      dining: 3,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 2,
      travelPortal: 5,
      other: 1
    },

    multipliers: [
      "5x Chase Travel",
      "3x dining",
      "2x travel",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "One of the best starter travel cards. I like it because Chase points are easy to understand and Hyatt transfers can be extremely valuable.",

    bestPairing: "Pairs well with Chase Freedom Unlimited and Chase Freedom Flex.",

    goodFor: [
      "Beginner travel points",
      "Dining",
      "Hyatt transfers",
      "Chase ecosystem"
    ],

    notGoodFor: [
      "Premium lounge perks",
      "People who want the highest grocery earning"
    ],

    featuredCard: true,

    tags: ["chase", "flexible", "travel", "dining", "beginner"],

    benefits: [
      "5x Chase Travel",
      "3x dining",
      "Transfer partners like Hyatt and United",
      "Great beginner travel card"
    ],

    why: "Best starter card for flexible travel points.",

    weaknesses: [
      "Best travel earning requires Chase Travel portal",
      "Not the strongest catch-all card"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Chase Sapphire Reserve",
    issuer: "Chase",
    issuerTag: "chase",
    ecosystem: "Chase Ultimate Rewards",
    annualFee: 795,
    pointValue: 0.02,
    type: "flexible",
    brand: "chase",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Premium Travel",

    rewards: {
      dining: 3,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 4,
      hotelsDirect: 4,
      travelPortal: 8,
      other: 1
    },

    multipliers: [
      "High earning through Chase Travel",
      "Strong dining earning",
      "Strong travel earning",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is for people who want premium travel perks and actually use the benefits. I would not pick it just because it sounds premium.",

    bestPairing: "Pairs well with Chase Freedom Unlimited and Chase Freedom Flex.",

    goodFor: [
      "Premium travel",
      "Travel protection",
      "Dining",
      "Chase points"
    ],

    notGoodFor: [
      "Low annual fee setups",
      "People who do not travel often",
      "Simple beginner setups"
    ],

    featuredCard: true,

    tags: ["chase", "flexible", "premium", "travel", "luxuryTravel"],

    benefits: [
      "Premium travel rewards",
      "Airport lounge access",
      "Travel credits",
      "Strong travel protection"
    ],

    why: "Best for premium travelers who use Chase benefits often.",

    weaknesses: [
      "High annual fee",
      "Best multipliers depend on Chase Travel portal"
    ],

    premium: true,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "Chase Freedom Unlimited",
    issuer: "Chase",
    issuerTag: "chase",
    ecosystem: "Chase Ultimate Rewards",
    annualFee: 0,
    pointValue: 0.02,
    type: "flexible",
    brand: "chase",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Everyday Spend",

    rewards: {
      dining: 3,
      groceries: 1.5,
      gas: 1.5,
      rent: 0,
      flightsDirect: 1.5,
      hotelsDirect: 1.5,
      travelPortal: 5,
      other: 1.5
    },

    multipliers: [
      "5x Chase Travel",
      "3x dining",
      "3x drugstores",
      "1.5x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "One of the best no-fee support cards. It gets much better when paired with a Sapphire card because the points become more powerful.",

    bestPairing: "Pairs well with Chase Sapphire Preferred or Chase Sapphire Reserve.",

    goodFor: [
      "Everyday spend",
      "No annual fee",
      "Chase setups",
      "Simple earning"
    ],

    notGoodFor: [
      "Standalone premium travel perks",
      "People who want a single premium card"
    ],

    featuredCard: true,

    tags: ["chase", "flexible", "cashback", "noAnnualFee", "everyday"],

    benefits: [
      "No annual fee",
      "1.5x on everyday purchases",
      "3x dining",
      "Pairs well with Sapphire cards"
    ],

    why: "Best Chase catch-all card.",

    weaknesses: [
      "Works best when paired with a Sapphire card"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Chase Freedom Flex",
    issuer: "Chase",
    issuerTag: "chase",
    ecosystem: "Chase Ultimate Rewards",
    annualFee: 0,
    pointValue: 0.02,
    type: "flexible",
    brand: "chase",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Rotating Categories",

    rewards: {
      dining: 3,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 1,
      hotelsDirect: 1,
      travelPortal: 5,
      other: 1
    },

    multipliers: [
      "5x rotating categories",
      "5x Chase Travel",
      "3x dining",
      "3x drugstores",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "Great if you like maximizing categories, but it takes more effort than the Freedom Unlimited because you have to track rotating categories.",

    bestPairing: "Pairs well with Chase Sapphire Preferred or Chase Sapphire Reserve.",

    goodFor: [
      "Rotating categories",
      "No annual fee",
      "Chase points",
      "Dining"
    ],

    notGoodFor: [
      "People who do not want to track categories",
      "Simple one-card setups"
    ],

    featuredCard: false,

    tags: ["chase", "flexible", "cashback", "noAnnualFee", "rotating"],

    benefits: [
      "No annual fee",
      "Rotating 5x categories",
      "3x dining",
      "Pairs well with Sapphire cards"
    ],

    why: "Best for maximizing rotating bonus categories.",

    weaknesses: [
      "Rotating categories require activation and tracking"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Chase Freedom Rise",
    issuer: "Chase",
    issuerTag: "chase",
    ecosystem: "Chase Ultimate Rewards",
    annualFee: 0,
    pointValue: 0.02,
    type: "flexible",
    brand: "chase",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Building Credit",

    rewards: {
      dining: 1.5,
      groceries: 1.5,
      gas: 1.5,
      rent: 0,
      flightsDirect: 1.5,
      hotelsDirect: 1.5,
      travelPortal: 1.5,
      other: 1.5
    },

    multipliers: [
      "1.5x on purchases",
      "Simple earning structure"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A simple Chase starter card for people building credit. This is not really a premium travel strategy card.",

    bestPairing: "Can eventually pair with Chase Sapphire Preferred.",

    goodFor: [
      "Building credit",
      "No annual fee",
      "Simple rewards"
    ],

    notGoodFor: [
      "Premium travel",
      "Maximizing travel redemptions"
    ],

    featuredCard: false,

    tags: ["chase", "flexible", "cashback", "noAnnualFee", "beginner"],

    benefits: [
      "No annual fee",
      "Designed for newer credit users",
      "Simple earning"
    ],

    why: "Best Chase starter card for building credit.",

    weaknesses: [
      "Not a premium travel card"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  // =====================
  // CHASE MARRIOTT
  // =====================

  {
    name: "Marriott Bonvoy Bold",
    issuer: "Chase / Marriott",
    issuerTag: "chase",
    ecosystem: "Marriott Bonvoy",
    annualFee: 0,
    pointValue: 0.008,
    type: "hotel",
    brand: "marriott",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "No-Fee Marriott",

    rewards: {
      dining: 1,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 3,
      travelPortal: 2,
      other: 1
    },

    multipliers: [
      "3x Marriott purchases",
      "2x travel",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A basic no-fee Marriott card. Good only if you want a simple Marriott starter card without paying an annual fee.",

    bestPairing: "Pairs well with a flexible travel card like Chase Sapphire Preferred.",

    goodFor: [
      "No annual fee",
      "Starter Marriott card",
      "Casual Marriott stays"
    ],

    notGoodFor: [
      "High Marriott earning",
      "Flexible point maximizers",
      "Premium hotel perks"
    ],

    featuredCard: false,

    tags: ["chase", "hotel", "marriott", "noAnnualFee"],

    benefits: [
      "No annual fee",
      "Marriott points",
      "Starter Marriott card",
      "Travel rewards"
    ],

    why: "Best no-fee Marriott card.",

    weaknesses: [
      "Low earning compared to paid Marriott cards"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Marriott Bonvoy Boundless",
    issuer: "Chase / Marriott",
    issuerTag: "chase",
    ecosystem: "Marriott Bonvoy",
    annualFee: 95,
    pointValue: 0.008,
    type: "hotel",
    brand: "marriott",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Marriott Hotels",

    rewards: {
      dining: 3,
      groceries: 3,
      gas: 3,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 6,
      travelPortal: 2,
      other: 2
    },

    multipliers: [
      "6x Marriott purchases",
      "3x dining",
      "3x groceries",
      "3x gas",
      "2x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is probably the Marriott card I would start with if you want a simple paid Marriott card because the free night can help justify the annual fee.",

    bestPairing: "Pairs well with Chase Sapphire Preferred.",

    goodFor: [
      "Marriott travelers",
      "Annual free night",
      "Starter hotel strategy"
    ],

    notGoodFor: [
      "People who do not stay with Marriott",
      "Flexible points first strategies"
    ],

    featuredCard: false,

    tags: ["chase", "hotel", "marriott"],

    benefits: [
      "Free night certificate",
      "Marriott points",
      "Elite night credits",
      "Good mid-tier Marriott card"
    ],

    why: "Best starter Marriott card with an annual free night.",

    weaknesses: [
      "Best only if you stay with Marriott"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Marriott Bonvoy Bountiful",
    issuer: "Chase / Marriott",
    issuerTag: "chase",
    ecosystem: "Marriott Bonvoy",
    annualFee: 250,
    pointValue: 0.008,
    type: "hotel",
    brand: "marriott",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Marriott + Everyday Spend",

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
      "4x gas",
      "2x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This card can earn well in common categories, but I would only prioritize it if you specifically value Marriott points.",

    bestPairing: "Pairs well with Chase Sapphire Preferred or Marriott Boundless.",

    goodFor: [
      "Marriott loyalists",
      "Dining",
      "Groceries",
      "Gas"
    ],

    notGoodFor: [
      "Casual Marriott users",
      "People who prefer flexible points"
    ],

    featuredCard: false,

    tags: ["chase", "hotel", "marriott"],

    benefits: [
      "Marriott points",
      "Bonus categories",
      "Elite night credits",
      "Mid-premium Marriott card"
    ],

    why: "Best for Marriott loyalists with everyday spending.",

    weaknesses: [
      "No-fee or $95 Marriott cards may be better for casual users"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  // =====================
  // CHASE HYATT
  // =====================

  {
    name: "World of Hyatt Credit Card",
    issuer: "Chase / Hyatt",
    issuerTag: "chase",
    ecosystem: "World of Hyatt",
    annualFee: 95,
    pointValue: 0.02,
    type: "hotel",
    brand: "hyatt",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Hyatt Hotels",

    rewards: {
      dining: 2,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 4,
      travelPortal: 2,
      other: 1
    },

    multipliers: [
      "4x Hyatt purchases",
      "2x dining",
      "2x flights purchased directly",
      "2x gym memberships",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "Hyatt points can be extremely valuable. I like this card most for people who already use Hyatt or want to build a Chase/Hyatt strategy.",

    bestPairing: "Pairs well with Chase Sapphire Preferred and Chase Freedom Unlimited.",

    goodFor: [
      "Hyatt travelers",
      "Free night certificate",
      "Hotel redemption value"
    ],

    notGoodFor: [
      "People who do not stay with Hyatt",
      "People who want broad hotel coverage"
    ],

    featuredCard: true,

    tags: ["chase", "hotel", "hyatt"],

    benefits: [
      "Hyatt points",
      "Free night certificate",
      "Elite night credits",
      "Great hotel redemption value"
    ],

    why: "Best for Hyatt travelers.",

    weaknesses: [
      "Best only if you use Hyatt"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  // =====================
  // CHASE IHG
  // =====================

  {
    name: "IHG One Rewards Traveler",
    issuer: "Chase / IHG",
    issuerTag: "chase",
    ecosystem: "IHG One Rewards",
    annualFee: 0,
    pointValue: 0.005,
    type: "hotel",
    brand: "ihg",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "No-Fee IHG",

    rewards: {
      dining: 3,
      groceries: 3,
      gas: 3,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 5,
      travelPortal: 2,
      other: 2
    },

    multipliers: [
      "5x IHG purchases",
      "3x dining",
      "3x groceries",
      "3x gas",
      "2x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A decent no-fee hotel starter card, but I would usually prefer Chase flexible points unless you specifically stay with IHG.",

    bestPairing: "Pairs well with Chase Sapphire Preferred.",

    goodFor: [
      "No annual fee",
      "Casual IHG stays",
      "Starter hotel card"
    ],

    notGoodFor: [
      "Flexible points",
      "Premium hotel perks"
    ],

    featuredCard: false,

    tags: ["chase", "hotel", "ihg", "noAnnualFee"],

    benefits: [
      "No annual fee",
      "IHG points",
      "Starter hotel card",
      "Good for casual IHG stays"
    ],

    why: "Best no-fee IHG card.",

    weaknesses: [
      "IHG points are less flexible than Chase points"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "IHG One Rewards Premier",
    issuer: "Chase / IHG",
    issuerTag: "chase",
    ecosystem: "IHG One Rewards",
    annualFee: 99,
    pointValue: 0.005,
    type: "hotel",
    brand: "ihg",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "IHG Hotels",

    rewards: {
      dining: 5,
      groceries: 5,
      gas: 5,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 10,
      travelPortal: 3,
      other: 3
    },

    multipliers: [
      "10x IHG purchases",
      "5x dining",
      "5x groceries",
      "5x gas",
      "3x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is the IHG card I would look at if you actually stay with IHG because the free night and status perks can make it worthwhile.",

    bestPairing: "Pairs well with Chase Sapphire Preferred or Chase Freedom Unlimited.",

    goodFor: [
      "IHG travelers",
      "Anniversary free night",
      "IHG status benefits"
    ],

    notGoodFor: [
      "People who do not stay with IHG",
      "Flexible point maximizers"
    ],

    featuredCard: false,

    tags: ["chase", "hotel", "ihg"],

    benefits: [
      "IHG points",
      "Anniversary free night",
      "Strong hotel earning",
      "IHG status benefits"
    ],

    why: "Best for IHG travelers.",

    weaknesses: [
      "Best only if you stay with IHG"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },
    // =====================
  // CHASE UNITED
  // =====================

  {
    name: "United Gateway Card",
    issuer: "Chase / United",
    issuerTag: "chase",
    ecosystem: "United MileagePlus",
    annualFee: 0,
    pointValue: 0.013,
    type: "airline",
    brand: "united",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "No-Fee United",

    rewards: {
      dining: 2,
      groceries: 1,
      gas: 2,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "2x United purchases",
      "2x gas",
      "2x local transit",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A simple no-fee United starter card, but it lacks the bigger United perks most travelers care about.",

    bestPairing: "Pairs well with Chase Sapphire Preferred.",

    goodFor: [
      "No annual fee",
      "Starter United card",
      "Casual United flyers"
    ],

    notGoodFor: [
      "Free checked bags",
      "United lounge perks",
      "Premium airline benefits"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "united", "noAnnualFee"],

    benefits: [
      "No annual fee",
      "United miles",
      "Good starter United card"
    ],

    why: "Best no-fee United card.",

    weaknesses: [
      "Limited United perks"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "United Explorer Card",
    issuer: "Chase / United",
    issuerTag: "chase",
    ecosystem: "United MileagePlus",
    annualFee: 95,
    pointValue: 0.013,
    type: "airline",
    brand: "united",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "United Flights",

    rewards: {
      dining: 2,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 2,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "2x United purchases",
      "2x dining",
      "2x hotel stays",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is the United card I would look at first for occasional United flyers because the checked bag benefit can matter quickly.",

    bestPairing: "Pairs well with Chase Sapphire Preferred or Chase Freedom Unlimited.",

    goodFor: [
      "Occasional United flyers",
      "Free checked bag",
      "Priority boarding"
    ],

    notGoodFor: [
      "People who rarely fly United",
      "Everyday spending optimization"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "united"],

    benefits: [
      "Free checked bag",
      "Priority boarding",
      "United miles",
      "Good beginner airline card"
    ],

    why: "Best for occasional United flyers.",

    weaknesses: [
      "Not strong for everyday spending"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "United Quest Card",
    issuer: "Chase / United",
    issuerTag: "chase",
    ecosystem: "United MileagePlus",
    annualFee: 250,
    pointValue: 0.013,
    type: "airline",
    brand: "united",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "United Loyalists",

    rewards: {
      dining: 3,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "3x United purchases",
      "3x dining",
      "3x select streaming services",
      "2x other travel",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This starts making sense for more frequent United flyers who can use the credits and checked bag benefits.",

    bestPairing: "Pairs well with Chase Sapphire Preferred or Chase Freedom Unlimited.",

    goodFor: [
      "Frequent United flyers",
      "United credits",
      "Free checked bags"
    ],

    notGoodFor: [
      "Casual United flyers",
      "Simple low-fee setups"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "united"],

    benefits: [
      "United travel credits",
      "Free checked bags",
      "3x United purchases",
      "Good for frequent United flyers"
    ],

    why: "Best for frequent United travelers.",

    weaknesses: [
      "Best only if you fly United regularly"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "United Club Card",
    issuer: "Chase / United",
    issuerTag: "chase",
    ecosystem: "United MileagePlus",
    annualFee: 695,
    pointValue: 0.013,
    type: "airline",
    brand: "united",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Premium United",

    rewards: {
      dining: 2,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 4,
      hotelsDirect: 2,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "4x United purchases",
      "2x dining",
      "2x other travel",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is really about United Club access. I would only consider it if you fly United often enough to value the lounge membership.",

    bestPairing: "Pairs well with Chase Sapphire Preferred or Chase Freedom Unlimited.",

    goodFor: [
      "United loyalists",
      "United Club access",
      "Premium United perks"
    ],

    notGoodFor: [
      "Casual United flyers",
      "Everyday spending",
      "Low annual fee setups"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "united", "premium"],

    benefits: [
      "United Club membership",
      "Free checked bags",
      "Premium United perks",
      "Strong airline benefits"
    ],

    why: "Best for United flyers who value lounge access.",

    weaknesses: [
      "High annual fee",
      "Weak everyday earning"
    ],

    premium: true,
    beginnerFriendly: false,
    business: false
  },

  // =====================
  // CHASE SOUTHWEST
  // =====================

  {
    name: "Southwest Rapid Rewards Plus",
    issuer: "Chase / Southwest",
    issuerTag: "chase",
    ecosystem: "Southwest Rapid Rewards",
    annualFee: 69,
    pointValue: 0.013,
    type: "airline",
    brand: "southwest",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Southwest Starter",

    rewards: {
      dining: 1,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 2,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "2x Southwest purchases",
      "2x Rapid Rewards hotel and car rental partners",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A low-fee Southwest starter card, but I would compare it against the higher Southwest cards if you fly them often.",

    bestPairing: "Pairs well with Chase Sapphire Preferred.",

    goodFor: [
      "Southwest beginners",
      "Low annual fee",
      "Anniversary points"
    ],

    notGoodFor: [
      "Premium Southwest perks",
      "Everyday spending"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "southwest"],

    benefits: [
      "Southwest points",
      "Anniversary points",
      "Low annual fee",
      "Good starter Southwest card"
    ],

    why: "Best low-fee Southwest card.",

    weaknesses: [
      "Limited premium Southwest perks"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Southwest Rapid Rewards Premier",
    issuer: "Chase / Southwest",
    issuerTag: "chase",
    ecosystem: "Southwest Rapid Rewards",
    annualFee: 99,
    pointValue: 0.013,
    type: "airline",
    brand: "southwest",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Southwest Flyers",

    rewards: {
      dining: 1,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "3x Southwest purchases",
      "2x Rapid Rewards hotel and car rental partners",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A middle-tier Southwest card for people who fly Southwest regularly but do not need every premium perk.",

    bestPairing: "Pairs well with Chase Sapphire Preferred or Freedom Unlimited.",

    goodFor: [
      "Southwest flyers",
      "Anniversary points",
      "No foreign transaction fees"
    ],

    notGoodFor: [
      "People who rarely fly Southwest",
      "Premium Southwest perks"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "southwest"],

    benefits: [
      "Southwest points",
      "Anniversary points",
      "Better Southwest earning",
      "No foreign transaction fees"
    ],

    why: "Best middle-tier Southwest card.",

    weaknesses: [
      "Best only if you fly Southwest"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "Southwest Rapid Rewards Priority",
    issuer: "Chase / Southwest",
    issuerTag: "chase",
    ecosystem: "Southwest Rapid Rewards",
    annualFee: 149,
    pointValue: 0.013,
    type: "airline",
    brand: "southwest",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Frequent Southwest",

    rewards: {
      dining: 1,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "3x Southwest purchases",
      "2x Rapid Rewards hotel and car rental partners",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is probably the best personal Southwest card if you fly them enough to use the travel credit and upgraded boarding benefits.",

    bestPairing: "Pairs well with Chase Sapphire Preferred.",

    goodFor: [
      "Frequent Southwest flyers",
      "Southwest travel credit",
      "Upgraded boarding"
    ],

    notGoodFor: [
      "People who rarely fly Southwest",
      "Everyday spending optimization"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "southwest"],

    benefits: [
      "Southwest travel credit",
      "Anniversary points",
      "Upgraded boarding benefits",
      "Best personal Southwest card"
    ],

    why: "Best for frequent Southwest flyers.",

    weaknesses: [
      "Best only if you fly Southwest often"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  // =====================
  // CHASE AIRLINE PARTNERS
  // =====================

  {
    name: "Aeroplan Card",
    issuer: "Chase / Air Canada",
    issuerTag: "chase",
    ecosystem: "Air Canada Aeroplan",
    annualFee: 95,
    pointValue: 0.017,
    type: "airline",
    brand: "aircanada",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Star Alliance Travel",

    rewards: {
      dining: 3,
      groceries: 3,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "3x Air Canada purchases",
      "3x dining",
      "3x groceries",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is more advanced than a normal beginner travel card, but Aeroplan can be very powerful if you understand airline redemptions.",

    bestPairing: "Pairs well with Chase Sapphire Preferred or Amex Membership Rewards cards.",

    goodFor: [
      "Star Alliance redemptions",
      "Advanced points users",
      "Dining and groceries"
    ],

    notGoodFor: [
      "Beginners who want simplicity",
      "People who do not understand airline partners"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "aircanada", "aeroplan"],

    benefits: [
      "Aeroplan points",
      "Star Alliance redemptions",
      "Good travel partners"
    ],

    why: "Best for people who understand airline transfer redemptions.",

    weaknesses: [
      "More advanced than beginner travel cards"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "British Airways Visa Signature Card",
    issuer: "Chase / British Airways",
    issuerTag: "chase",
    ecosystem: "Avios",
    annualFee: 95,
    pointValue: 0.015,
    type: "airline",
    brand: "britishairways",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Avios Flights",

    rewards: {
      dining: 3,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "3x British Airways purchases",
      "2x hotel accommodations",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "Useful for Avios users, but too niche for most beginners unless you already know how you want to redeem Avios.",

    bestPairing: "Pairs well with Chase Sapphire Preferred.",

    goodFor: [
      "Avios users",
      "Partner airline redemptions",
      "British Airways purchases"
    ],

    notGoodFor: [
      "Most beginners",
      "People who do not use Avios"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "avios", "britishairways"],

    benefits: [
      "Avios points",
      "British Airways purchases",
      "Partner airline redemptions"
    ],

    why: "Best for Avios users and partner redemptions.",

    weaknesses: [
      "Best if you understand Avios redemptions"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "Aer Lingus Visa Signature Card",
    issuer: "Chase / Aer Lingus",
    issuerTag: "chase",
    ecosystem: "Avios",
    annualFee: 95,
    pointValue: 0.015,
    type: "airline",
    brand: "aerlingus",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Avios Flights",

    rewards: {
      dining: 3,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "3x Aer Lingus purchases",
      "2x hotel accommodations",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A niche Avios card. I would only look at this if Aer Lingus or Avios redemptions are part of your strategy.",

    bestPairing: "Pairs well with Chase Sapphire Preferred.",

    goodFor: [
      "Avios users",
      "Aer Lingus flyers",
      "Partner airline redemptions"
    ],

    notGoodFor: [
      "Most beginners",
      "People who do not use Avios"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "avios", "aerlingus"],

    benefits: [
      "Avios points",
      "Aer Lingus purchases",
      "Partner airline redemptions"
    ],

    why: "Best for Avios users flying Aer Lingus.",

    weaknesses: [
      "Niche airline card for most users"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "Iberia Visa Signature Card",
    issuer: "Chase / Iberia",
    issuerTag: "chase",
    ecosystem: "Avios",
    annualFee: 95,
    pointValue: 0.015,
    type: "airline",
    brand: "iberia",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Avios Flights",

    rewards: {
      dining: 3,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "3x Iberia purchases",
      "2x hotel accommodations",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "Another niche Avios card. Powerful for the right person, but not where I would start for most beginners.",

    bestPairing: "Pairs well with Chase Sapphire Preferred.",

    goodFor: [
      "Avios users",
      "Iberia flyers",
      "Partner airline redemptions"
    ],

    notGoodFor: [
      "Most beginners",
      "Simple travel setups"
    ],

    featuredCard: false,

    tags: ["chase", "airline", "avios", "iberia"],

    benefits: [
      "Avios points",
      "Iberia purchases",
      "Partner airline redemptions"
    ],

    why: "Best for Avios users flying Iberia.",

    weaknesses: [
      "Niche airline card for most users"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  // =====================
  // CHASE CASH / RETAIL
  // =====================

  {
    name: "Prime Visa",
    issuer: "Chase / Amazon",
    issuerTag: "chase",
    ecosystem: "Cash Back",
    annualFee: 0,
    pointValue: 0.01,
    type: "cashback",
    brand: "amazon",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Amazon + Whole Foods",

    rewards: {
      dining: 2,
      groceries: 2,
      gas: 2,
      rent: 0,
      flightsDirect: 1,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 5
    },

    multipliers: [
      "5% back at Amazon with eligible Prime membership",
      "5% back at Whole Foods with eligible Prime membership",
      "2% back at restaurants",
      "2% back at gas stations",
      "1% back elsewhere"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A great retail card if you spend heavily at Amazon or Whole Foods. It is not really a travel strategy card.",

    bestPairing: "Pairs well with a flexible travel card.",

    goodFor: [
      "Amazon",
      "Whole Foods",
      "No annual fee with Prime"
    ],

    notGoodFor: [
      "Travel points",
      "People who do not shop at Amazon"
    ],

    featuredCard: false,

    tags: ["chase", "cashback", "amazon", "noAnnualFee"],

    benefits: [
      "High Amazon earning",
      "Whole Foods rewards",
      "No annual fee with Prime"
    ],

    why: "Best for heavy Amazon and Whole Foods shoppers.",

    weaknesses: [
      "Best value depends on Amazon/Whole Foods spending"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Amazon Visa",
    issuer: "Chase / Amazon",
    issuerTag: "chase",
    ecosystem: "Cash Back",
    annualFee: 0,
    pointValue: 0.01,
    type: "cashback",
    brand: "amazon",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Amazon",

    rewards: {
      dining: 1,
      groceries: 2,
      gas: 2,
      rent: 0,
      flightsDirect: 1,
      hotelsDirect: 3,
      travelPortal: 1,
      other: 2
    },

    multipliers: [
      "3% back at Amazon",
      "2% back at restaurants",
      "2% back at gas stations",
      "1% back elsewhere"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "Useful if you shop at Amazon but do not have Prime. Prime members should usually look at the Prime Visa instead.",

    bestPairing: "Pairs well with a flexible travel card.",

    goodFor: [
      "Amazon shoppers without Prime",
      "No annual fee",
      "Simple cash back"
    ],

    notGoodFor: [
      "Prime members",
      "Travel points strategy"
    ],

    featuredCard: false,

    tags: ["chase", "cashback", "amazon", "noAnnualFee"],

    benefits: [
      "Amazon rewards",
      "No annual fee",
      "Useful retail card"
    ],

    why: "Best for Amazon shoppers without Prime.",

    weaknesses: [
      "Prime Visa is better for Prime members"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  // =====================
  // CAPITAL ONE MILES
  // =====================

  {
    name: "Capital One Venture X",
    issuer: "Capital One",
    issuerTag: "capitalone",
    ecosystem: "Capital One Miles",
    annualFee: 395,
    pointValue: 0.018,
    type: "flexible",
    brand: "capitalone",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Premium Travel + Catch-All",

    rewards: {
      dining: 2,
      groceries: 2,
      gas: 2,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 2,
      travelPortal: 10,
      other: 2
    },

    multipliers: [
      "2x everything",
      "10x hotels through Capital One Travel",
      "5x flights through Capital One Travel"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "One of the easiest premium travel cards to justify if you use the travel credit and want simple 2x earning.",

    bestPairing: "Pairs well with Capital One Savor.",

    goodFor: [
      "Simple 2x earning",
      "Premium travel",
      "Lounge access",
      "Capital One miles"
    ],

    notGoodFor: [
      "People who avoid travel portals",
      "People who want the best dining/grocery card"
    ],

    featuredCard: true,

    tags: ["capitalone", "flexible", "premium", "travel", "luxuryTravel", "everyday"],

    benefits: [
      "2x on everything",
      "10x hotels through Capital One Travel",
      "5x flights through Capital One Travel",
      "Airport lounge access"
    ],

    why: "Best premium card for simple 2x earning.",

    weaknesses: [
      "Top travel multipliers require Capital One Travel portal"
    ],

    premium: true,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "Capital One Venture Rewards",
    issuer: "Capital One",
    issuerTag: "capitalone",
    ecosystem: "Capital One Miles",
    annualFee: 95,
    pointValue: 0.018,
    type: "flexible",
    brand: "capitalone",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Simple Travel Rewards",

    rewards: {
      dining: 2,
      groceries: 2,
      gas: 2,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 2,
      travelPortal: 5,
      other: 2
    },

    multipliers: [
      "2x everything",
      "5x hotels through Capital One Travel"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A simple travel card for people who do not want to track categories. Venture X is worth comparing if you travel enough to use the credits.",

    bestPairing: "Pairs well with Capital One Savor.",

    goodFor: [
      "Simple rewards",
      "Travel miles",
      "Everyday spend"
    ],

    notGoodFor: [
      "Premium perks",
      "Category maximizers"
    ],

    featuredCard: false,

    tags: ["capitalone", "flexible", "travel", "everyday"],

    benefits: [
      "2x on every purchase",
      "Simple miles earning",
      "Travel transfer partners",
      "Good mid-tier travel card"
    ],

    why: "Best for simple travel rewards without tracking categories.",

    weaknesses: [
      "Fewer premium perks than Venture X"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Capital One VentureOne",
    issuer: "Capital One",
    issuerTag: "capitalone",
    ecosystem: "Capital One Miles",
    annualFee: 0,
    pointValue: 0.018,
    type: "flexible",
    brand: "capitalone",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "No-Fee Travel",

    rewards: {
      dining: 1.25,
      groceries: 1.25,
      gas: 1.25,
      rent: 0,
      flightsDirect: 1.25,
      hotelsDirect: 1.25,
      travelPortal: 5,
      other: 1.25
    },

    multipliers: [
      "1.25x everything",
      "5x hotels and rental cars through Capital One Travel"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A no-fee travel card, but the earning rate is much weaker than the Venture Rewards or Venture X.",

    bestPairing: "Pairs well with Capital One Savor.",

    goodFor: [
      "No annual fee",
      "Beginner travel rewards",
      "Simple rewards"
    ],

    notGoodFor: [
      "High earning",
      "Premium travel perks"
    ],

    featuredCard: false,

    tags: ["capitalone", "flexible", "travel", "noAnnualFee", "beginner"],

    benefits: [
      "No annual fee",
      "Travel miles",
      "Simple rewards",
      "Beginner-friendly"
    ],

    why: "Best no-fee Capital One travel card.",

    weaknesses: [
      "Lower everyday earning than Venture Rewards"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  // =====================
  // CAPITAL ONE CASH BACK
  // =====================

  {
    name: "Capital One Savor",
    issuer: "Capital One",
    issuerTag: "capitalone",
    ecosystem: "Cash Back",
    annualFee: 0,
    pointValue: 0.01,
    type: "cashback",
    brand: "capitalone",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Dining + Groceries + Entertainment",

    rewards: {
      dining: 3,
      groceries: 3,
      gas: 1,
      rent: 0,
      flightsDirect: 1,
      hotelsDirect: 1,
      travelPortal: 5,
      other: 1
    },

    multipliers: [
      "3% dining",
      "3% groceries",
      "3% entertainment",
      "1% everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A really strong no-fee card for dining and groceries, especially if you want simple cash back or want to pair it with Venture X.",

    bestPairing: "Pairs well with Capital One Venture X.",

    goodFor: [
      "Dining",
      "Groceries",
      "Entertainment",
      "No annual fee"
    ],

    notGoodFor: [
      "Premium travel perks",
      "People who want Amex or Chase points"
    ],

    featuredCard: true,

    tags: ["capitalone", "cashback", "dining", "groceries", "noAnnualFee"],

    benefits: [
      "3x dining",
      "3x groceries",
      "3x entertainment",
      "No annual fee"
    ],

    why: "Best Capital One card for dining and groceries.",

    weaknesses: [
      "Cash back value is simpler but less flexible than transferable points"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Capital One Quicksilver",
    issuer: "Capital One",
    issuerTag: "capitalone",
    ecosystem: "Cash Back",
    annualFee: 0,
    pointValue: 0.01,
    type: "cashback",
    brand: "capitalone",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Simple Cash Back",

    rewards: {
      dining: 1.5,
      groceries: 1.5,
      gas: 1.5,
      rent: 0,
      flightsDirect: 1.5,
      hotelsDirect: 1.5,
      travelPortal: 1.5,
      other: 1.5
    },

    multipliers: [
      "1.5% cash back on purchases"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "Simple and beginner-friendly, but not the strongest card if you are trying to maximize categories or travel points.",

    bestPairing: "Pairs well with Capital One Savor or Venture X.",

    goodFor: [
      "Simple cash back",
      "No annual fee",
      "Beginners"
    ],

    notGoodFor: [
      "Maximizing travel points",
      "High category earning"
    ],

    featuredCard: false,

    tags: ["capitalone", "cashback", "noAnnualFee", "everyday", "beginner"],

    benefits: [
      "Flat cash back",
      "No annual fee",
      "Simple rewards",
      "Easy beginner card"
    ],

    why: "Best for simple cash back on everything.",

    weaknesses: [
      "Not optimized for travel points"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Capital One QuicksilverOne",
    issuer: "Capital One",
    issuerTag: "capitalone",
    ecosystem: "Cash Back",
    annualFee: 39,
    pointValue: 0.01,
    type: "cashback",
    brand: "capitalone",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Fair Credit Cash Back",

    rewards: {
      dining: 1.5,
      groceries: 1.5,
      gas: 1.5,
      rent: 0,
      flightsDirect: 1.5,
      hotelsDirect: 1.5,
      travelPortal: 1.5,
      other: 1.5
    },

    multipliers: [
      "1.5% cash back on purchases"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is mainly for people building credit. If you can qualify for no-fee cards with similar earning, those may be better.",

    bestPairing: "Pairs well with a future no-fee or travel card once credit improves.",

    goodFor: [
      "Fair credit",
      "Building credit",
      "Simple cash back"
    ],

    notGoodFor: [
      "People who qualify for stronger no-fee cards",
      "Travel rewards maximizers"
    ],

    featuredCard: false,

    tags: ["capitalone", "cashback", "everyday", "beginner"],

    benefits: [
      "Flat cash back",
      "For fair credit",
      "Simple rewards"
    ],

    why: "Best for users building credit who still want cash back.",

    weaknesses: [
      "Annual fee despite basic earning structure"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },
  // =====================
  // CITI THANKYOU POINTS
  // =====================

  {
    name: "Citi Strata Elite Card",
    issuer: "Citi",
    issuerTag: "citi",
    ecosystem: "Citi ThankYou Points",
    annualFee: 595,
    pointValue: 0.018,
    type: "flexible",
    brand: "citi",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Premium Citi Travel",

    rewards: {
      dining: 3,
      groceries: 1.5,
      gas: 1.5,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 6,
      other: 1.5
    },

    multipliers: [
      "6x Citi Travel",
      "3x dining",
      "3x flights",
      "3x hotels",
      "1.5x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is Citi’s premium travel option. I would mainly look at it if you are intentionally building around Citi ThankYou points.",
    bestPairing: "Pairs well with Citi Double Cash and Citi Custom Cash.",

    goodFor: [
      "Premium Citi setup",
      "Travel",
      "Citi ThankYou points"
    ],

    notGoodFor: [
      "Beginners",
      "Low annual fee setups",
      "People who want Chase or Amex transfer partners"
    ],

    featuredCard: false,

    tags: ["citi", "flexible", "premium", "travel"],

    benefits: [
      "Premium Citi travel card",
      "ThankYou transfer partners",
      "Travel benefits"
    ],

    why: "Best premium Citi option for travel-focused users.",

    weaknesses: [
      "High annual fee",
      "More advanced than basic travel cards"
    ],

    premium: true,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "Citi Strata Premier Card",
    issuer: "Citi",
    issuerTag: "citi",
    ecosystem: "Citi ThankYou Points",
    annualFee: 95,
    pointValue: 0.018,
    type: "flexible",
    brand: "citi",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Travel + Everyday",

    rewards: {
      dining: 3,
      groceries: 3,
      gas: 3,
      rent: 0,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 3,
      other: 1
    },

    multipliers: [
      "3x dining",
      "3x supermarkets",
      "3x gas",
      "3x travel",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "Very underrated all-around card because it covers several major everyday categories in one card.",
    bestPairing: "Pairs well with Citi Double Cash and Citi Custom Cash.",

    goodFor: [
      "Dining",
      "Groceries",
      "Gas",
      "Travel",
      "Citi ThankYou points"
    ],

    notGoodFor: [
      "Premium lounge perks",
      "People who want the Chase ecosystem"
    ],

    featuredCard: true,

    tags: ["citi", "flexible", "travel", "dining", "groceries", "gas"],

    benefits: [
      "3x travel",
      "3x dining",
      "3x supermarkets",
      "3x gas"
    ],

    why: "Best all-around Citi travel card.",

    weaknesses: [
      "Not as simple as a flat 2x card"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Citi Double Cash Card",
    issuer: "Citi",
    issuerTag: "citi",
    ecosystem: "Citi ThankYou Points",
    annualFee: 0,
    pointValue: 0.018,
    type: "flexible",
    brand: "citi",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Catch-All Spend",

    rewards: {
      dining: 2,
      groceries: 2,
      gas: 2,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 2,
      travelPortal: 2,
      other: 2
    },

    multipliers: [
      "2x total earning on purchases"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A great catch-all card, especially inside a Citi setup with Strata Premier.",
    bestPairing: "Pairs well with Citi Strata Premier.",

    goodFor: [
      "Everyday spend",
      "No annual fee",
      "Simple earning",
      "Citi setups"
    ],

    notGoodFor: [
      "Bonus category maximizers",
      "Premium travel perks"
    ],

    featuredCard: false,

    tags: ["citi", "flexible", "cashback", "noAnnualFee", "everyday"],

    benefits: [
      "2x total earning",
      "No annual fee",
      "Excellent catch-all card"
    ],

    why: "Best Citi catch-all card.",

    weaknesses: [
      "Best when paired with a premium Citi transfer card"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Citi Custom Cash Card",
    issuer: "Citi",
    issuerTag: "citi",
    ecosystem: "Citi ThankYou Points",
    annualFee: 0,
    pointValue: 0.018,
    type: "flexible",
    brand: "citi",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Top Monthly Category",

    rewards: {
      dining: 1,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 1,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "5x eligible top monthly category",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "Great as a one-category optimizer. I would not use it as my only card, but it can be powerful in a Citi setup.",
    bestPairing: "Pairs well with Citi Strata Premier and Citi Double Cash.",

    goodFor: [
      "One high monthly category",
      "No annual fee",
      "Category optimization"
    ],

    notGoodFor: [
      "Simple one-card setups",
      "People who do not want to think about categories"
    ],

    featuredCard: false,

    tags: ["citi", "flexible", "cashback", "noAnnualFee", "category"],

    benefits: [
      "5x eligible top spend category",
      "No annual fee",
      "Great category optimizer"
    ],

    why: "Best for one high monthly spending category.",

    weaknesses: [
      "Requires category strategy to maximize"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Citi Rewards+ Card",
    issuer: "Citi",
    issuerTag: "citi",
    ecosystem: "Citi ThankYou Points",
    annualFee: 0,
    pointValue: 0.018,
    type: "flexible",
    brand: "citi",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Small Purchases",

    rewards: {
      dining: 1,
      groceries: 2,
      gas: 2,
      rent: 0,
      flightsDirect: 1,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "2x supermarkets",
      "2x gas",
      "Rounds up points on purchases",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is more of a supporting Citi card than a card I would usually recommend by itself.",
    bestPairing: "Pairs well with Citi Strata Premier.",

    goodFor: [
      "Small purchases",
      "No annual fee",
      "Citi setups"
    ],

    notGoodFor: [
      "Standalone travel setup",
      "Premium benefits"
    ],

    featuredCard: false,

    tags: ["citi", "flexible", "noAnnualFee"],

    benefits: [
      "Rounds up points on purchases",
      "No annual fee",
      "Useful with other Citi cards"
    ],

    why: "Best as a supporting Citi card.",

    weaknesses: [
      "Not usually the best standalone card"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  // =====================
  // CITI AMERICAN AIRLINES
  // =====================

  {
    name: "American Airlines AAdvantage MileUp Card",
    issuer: "Citi / American Airlines",
    issuerTag: "citi",
    ecosystem: "American AAdvantage",
    annualFee: 0,
    pointValue: 0.014,
    type: "airline",
    brand: "american",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "No-Fee American Airlines",

    rewards: {
      dining: 1,
      groceries: 2,
      gas: 1,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "2x American Airlines purchases",
      "2x groceries",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A no-fee American Airlines starter card, but it does not have the bigger AA perks that occasional flyers may care about.",
    bestPairing: "Pairs well with Citi Strata Premier or Citi Double Cash.",

    goodFor: [
      "No annual fee",
      "Starter American Airlines card",
      "Casual AA flyers"
    ],

    notGoodFor: [
      "Free checked bags",
      "Premium AA perks",
      "Everyday spending"
    ],

    featuredCard: false,

    tags: ["citi", "airline", "american", "noAnnualFee"],

    benefits: [
      "No annual fee",
      "AAdvantage miles",
      "Good starter AA card"
    ],

    why: "Best no-fee American Airlines card.",

    weaknesses: [
      "Limited AA travel perks"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Citi AAdvantage Platinum Select World Elite Mastercard",
    issuer: "Citi / American Airlines",
    issuerTag: "citi",
    ecosystem: "American AAdvantage",
    annualFee: 99,
    pointValue: 0.014,
    type: "airline",
    brand: "american",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "American Airlines",

    rewards: {
      dining: 2,
      groceries: 1,
      gas: 2,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "2x American Airlines purchases",
      "2x restaurants",
      "2x gas",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is the AA card I would compare first if you fly American occasionally and value checked bag benefits.",
    bestPairing: "Pairs well with Citi Strata Premier.",

    goodFor: [
      "Occasional American Airlines flyers",
      "Free checked bag",
      "Preferred boarding"
    ],

    notGoodFor: [
      "People who rarely fly American",
      "Premium lounge perks"
    ],

    featuredCard: false,

    tags: ["citi", "airline", "american"],

    benefits: [
      "Free checked bag",
      "Preferred boarding",
      "AAdvantage miles",
      "Good AA travel card"
    ],

    why: "Best for occasional American Airlines flyers.",

    weaknesses: [
      "Not a strong everyday card"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Citi AAdvantage Executive World Elite Mastercard",
    issuer: "Citi / American Airlines",
    issuerTag: "citi",
    ecosystem: "American AAdvantage",
    annualFee: 595,
    pointValue: 0.014,
    type: "airline",
    brand: "american",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Premium American Airlines",

    rewards: {
      dining: 1,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 4,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "4x American Airlines purchases",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This card is mainly about Admirals Club access. I would only consider it if you fly American enough to really value the lounge benefit.",
    bestPairing: "Pairs well with Citi Strata Premier or Citi Double Cash.",

    goodFor: [
      "American Airlines loyalists",
      "Admirals Club access",
      "Premium AA perks"
    ],

    notGoodFor: [
      "Casual American flyers",
      "Everyday spending",
      "Low annual fee setups"
    ],

    featuredCard: false,

    tags: ["citi", "airline", "american", "premium"],

    benefits: [
      "Admirals Club access",
      "Premium AA benefits",
      "Free checked bag",
      "Priority perks"
    ],

    why: "Best for loyal American Airlines flyers who value lounge access.",

    weaknesses: [
      "High annual fee",
      "Weak everyday earning"
    ],

    premium: true,
    beginnerFriendly: false,
    business: false
  },

  // =====================
  // BILT
  // =====================

  {
    name: "Bilt Mastercard",
    issuer: "Bilt",
    issuerTag: "bilt",
    ecosystem: "Bilt Rewards",
    annualFee: 0,
    pointValue: 0.02,
    type: "flexible",
    brand: "bilt",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Rent",

    rewards: {
      dining: 3,
      groceries: 1,
      gas: 1,
      rent: 1,
      flightsDirect: 2,
      hotelsDirect: 2,
      travelPortal: 2,
      other: 1
    },

    multipliers: [
      "1x rent",
      "3x dining",
      "2x travel",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "Best card for renters because earning points on rent is rare. I would mainly recommend it when rent is part of the strategy.",
    bestPairing: "Pairs well with a dining, grocery, or premium travel card.",

    goodFor: [
      "Rent",
      "Dining",
      "Transfer partners",
      "No annual fee"
    ],

    notGoodFor: [
      "Non-renters",
      "People who want the highest grocery earning"
    ],

    featuredCard: true,

    tags: ["bilt", "flexible", "rent", "noAnnualFee"],

    benefits: [
      "Earn points on rent",
      "No annual fee",
      "3x dining",
      "Transfer partners"
    ],

    why: "Best for renters who want points on rent payments.",

    weaknesses: [
      "Best value depends heavily on rent spend"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Bilt Blue Card",
    issuer: "Bilt",
    issuerTag: "bilt",
    ecosystem: "Bilt Rewards",
    annualFee: 0,
    pointValue: 0.02,
    type: "flexible",
    brand: "bilt",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Rent + Starter Bilt",

    rewards: {
      dining: 2,
      groceries: 1,
      gas: 1,
      rent: 1,
      flightsDirect: 1,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "1x rent",
      "2x dining",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A starter Bilt option. I would only prioritize this if rent rewards are the main reason you want it.",
    bestPairing: "Pairs well with a stronger dining, grocery, or travel card.",

    goodFor: [
      "Rent",
      "Starter Bilt users",
      "No annual fee"
    ],

    notGoodFor: [
      "Non-renters",
      "Maximizing everyday categories"
    ],

    featuredCard: false,

    tags: ["bilt", "flexible", "rent", "noAnnualFee", "beginner"],

    benefits: [
      "No annual fee",
      "Bilt rewards",
      "Designed for rent rewards"
    ],

    why: "Best starter Bilt option as Bilt transitions to its new lineup.",

    weaknesses: [
      "Limited upside compared to higher-tier Bilt options"
    ],

    premium: false,
    beginnerFriendly: true,
    business: false
  },

  {
    name: "Bilt Obsidian Card",
    issuer: "Bilt",
    issuerTag: "bilt",
    ecosystem: "Bilt Rewards",
    annualFee: 95,
    pointValue: 0.02,
    type: "flexible",
    brand: "bilt",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Rent + Dining",

    rewards: {
      dining: 3,
      groceries: 2,
      gas: 1,
      rent: 1,
      flightsDirect: 2,
      hotelsDirect: 2,
      travelPortal: 2,
      other: 1
    },

    multipliers: [
      "1x rent",
      "3x dining",
      "2x groceries",
      "2x travel",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A mid-tier Bilt option. It should really only move up in recommendations when the user selects rent.",
    bestPairing: "Pairs well with a grocery, airline, or hotel card depending on your strategy.",

    goodFor: [
      "Rent",
      "Dining",
      "Bilt transfer partners"
    ],

    notGoodFor: [
      "Non-renters",
      "People who do not need rent rewards"
    ],

    featuredCard: false,

    tags: ["bilt", "flexible", "rent", "dining"],

    benefits: [
      "Bilt rewards",
      "Mid-tier Bilt option",
      "Rent-focused rewards"
    ],

    why: "Best mid-tier Bilt option if the new lineup fits your rent strategy.",

    weaknesses: [
      "Only worth it if the annual fee fits your rent strategy"
    ],

    premium: false,
    beginnerFriendly: false,
    business: false
  },

  {
    name: "Bilt Palladium Card",
    issuer: "Bilt",
    issuerTag: "bilt",
    ecosystem: "Bilt Rewards",
    annualFee: 495,
    pointValue: 0.02,
    type: "flexible",
    brand: "bilt",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Premium Bilt",

    rewards: {
      dining: 4,
      groceries: 2,
      gas: 1,
      rent: 1,
      flightsDirect: 3,
      hotelsDirect: 3,
      travelPortal: 3,
      other: 1
    },

    multipliers: [
      "1x rent",
      "4x dining",
      "2x groceries",
      "3x travel",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This should only be a premium Bilt/rent strategy card. It should not outrank cards like Amex Gold or Citi Strata Premier for normal dining and grocery filters.",
    bestPairing: "Pairs well with a premium travel or hotel card.",

    goodFor: [
      "Rent",
      "Premium Bilt users",
      "Dining",
      "Travel"
    ],

    notGoodFor: [
      "Non-renters",
      "Low annual fee setups",
      "People only optimizing groceries"
    ],

    featuredCard: false,

    tags: ["bilt", "flexible", "rent", "premium", "travel"],

    benefits: [
      "Premium Bilt option",
      "Bilt rewards",
      "Travel and rent-focused benefits"
    ],

    why: "Best premium Bilt option if you use the higher-tier benefits.",

    weaknesses: [
      "High annual fee for a rent-focused setup"
    ],

    premium: true,
    beginnerFriendly: false,
    business: false
  }
];
  