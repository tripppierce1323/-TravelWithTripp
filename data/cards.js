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

];
  