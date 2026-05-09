const businessCreditCards = [

  // =====================
  // AMEX BUSINESS
  // =====================

  {
    name: "The Business Platinum Card from American Express",
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
    bestFor: "Premium Business Travel",

    rewards: {
      dining: 1,
      groceries: 1,
      gas: 1,
      rent: 0,
      flightsDirect: 5,
      hotelsDirect: 1,
      travelPortal: 5,
      other: 1.5
    },

    multipliers: [
      "5x flights through Amex Travel",
      "5x prepaid hotels through Amex Travel",
      "1.5x on eligible large business purchases",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is a premium business travel card, not an everyday spending card. It is best for business owners who travel often and can use the travel credits and lounge benefits.",

    bestPairing: "Pairs well with Amex Business Gold or Blue Business Plus.",

    goodFor: [
      "Business travel",
      "Airport lounge access",
      "Premium travel credits",
      "Large business purchases"
    ],

    notGoodFor: [
      "Low annual fee setups",
      "Simple everyday earning",
      "Businesses that do not travel"
    ],

    featuredCard: true,

    tags: ["amex", "business", "flexible", "premium", "travel", "luxuryTravel"],

    benefits: [
      "Premium travel perks",
      "Airport lounge access",
      "Amex Membership Rewards",
      "Business travel credits"
    ],

    why: "Best for business owners who travel often and value premium perks.",

    weaknesses: [
      "Very high annual fee",
      "Not ideal for everyday business spend",
      "Credits require effort to maximize"
    ],

    premium: true,
    beginnerFriendly: false,
    business: true
  },

  {
    name: "American Express Business Gold Card",
    issuer: "Amex",
    issuerTag: "amex",
    ecosystem: "Amex Membership Rewards",
    annualFee: 375,
    pointValue: 0.02,
    type: "flexible",
    brand: "amex",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Business Category Spend",

    rewards: {
      dining: 1,
      groceries: 1,
      gas: 4,
      rent: 0,
      flightsDirect: 1,
      hotelsDirect: 1,
      travelPortal: 3,
      other: 4
    },

    multipliers: [
      "4x on top eligible business categories",
      "3x flights and prepaid hotels through Amex Travel",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This card is strong if your business spends heavily in eligible bonus categories. I would not recommend it as the simplest first business card.",

    bestPairing: "Pairs well with Blue Business Plus or Business Platinum.",

    goodFor: [
      "Business owners",
      "High business category spend",
      "Amex Membership Rewards",
      "Ad spend or gas-heavy businesses"
    ],

    notGoodFor: [
      "Simple no-fee setups",
      "Businesses with low monthly spend",
      "People who want easy flat earning"
    ],

    featuredCard: true,

    tags: ["amex", "business", "flexible", "travel"],

    benefits: [
      "Flexible Amex points",
      "Strong business category earning",
      "Good for high business spend"
    ],

    why: "Best for businesses with large spend in eligible Amex bonus categories.",

    weaknesses: [
      "Higher annual fee",
      "Category structure is more complex",
      "Not ideal for beginners"
    ],

    premium: false,
    beginnerFriendly: false,
    business: true
  },

  {
    name: "Blue Business Plus Credit Card",
    issuer: "Amex",
    issuerTag: "amex",
    ecosystem: "Amex Membership Rewards",
    annualFee: 0,
    pointValue: 0.02,
    type: "flexible",
    brand: "amex",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Business Catch-All",

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
      "2x on everyday business purchases",
      "1x after annual cap",
      "No annual fee"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "One of the best no-annual-fee business cards because it earns flexible Amex points at 2x on everyday business purchases.",

    bestPairing: "Pairs well with Amex Gold, Business Gold, or Business Platinum.",

    goodFor: [
      "Business catch-all spend",
      "No annual fee",
      "Flexible Amex points",
      "Simple earning"
    ],

    notGoodFor: [
      "Premium travel perks",
      "Category bonus maximizers"
    ],

    featuredCard: true,

    tags: ["amex", "business", "flexible", "noAnnualFee", "everyday"],

    benefits: [
      "No annual fee",
      "2x everyday business purchases",
      "Flexible Amex points"
    ],

    why: "Best no-fee Amex business catch-all card.",

    weaknesses: [
      "No major premium perks",
      "Annual cap on 2x earning"
    ],

    premium: false,
    beginnerFriendly: true,
    business: true
  },

  {
    name: "Blue Business Cash Card",
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
    bestFor: "Simple Business Cash Back",

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
      "2% cash back on eligible business purchases",
      "1% after annual cap",
      "No annual fee"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "This is the cash back version of the Blue Business Plus. I would pick Blue Business Plus if you want points and this if you only want simple cash back.",

    bestPairing: "Pairs well with a travel rewards business card.",

    goodFor: [
      "Simple cash back",
      "No annual fee",
      "Business catch-all spend"
    ],

    notGoodFor: [
      "Transferable points",
      "Premium travel perks"
    ],

    featuredCard: false,

    tags: ["amex", "business", "cashback", "noAnnualFee", "everyday"],

    benefits: [
      "No annual fee",
      "Simple cash back",
      "Good business catch-all card"
    ],

    why: "Best for business owners who want simple no-fee cash back.",

    weaknesses: [
      "No transferable points",
      "No premium benefits"
    ],

    premium: false,
    beginnerFriendly: true,
    business: true
  },
  //Hilton Amex Business//
//.                     //
{
  name: "Hilton Honors American Express Business Card",
  issuer: "Amex / Hilton",
  issuerTag: "amex",
  ecosystem: "Hilton Honors",
  annualFee: 195,
  pointValue: 0.005,
  type: "hotel",
  brand: "hilton",
  imageUrl: "",
  youtubeUrl: "",
  applyUrl: "#",

  bestFor: "Hilton Business Travel",

  rewards: {
    dining: 5,
    groceries: 3,
    gas: 3,
    rent: 0,
    flightsDirect: 5,
    hotelsDirect: 12,
    travelPortal: 3,
    other: 3
  },

  tags: [
    "amex",
    "business",
    "hotel",
    "hilton",
    "travel"
  ],

  benefits: [
    "12x Hilton purchases",
    "5x flights booked directly with airlines",
    "5x dining",
    "5x gas stations",
    "Complimentary Hilton Gold status"
  ],

  welcomeBonus: "Check Amex for the latest elevated offer.",

  why: "One of the best business hotel cards for Hilton loyalists who travel frequently.",

  myReview:
    "This is one of the strongest hotel business cards if you stay at Hilton properties often. The automatic Hilton Gold status and strong Hilton earning make it easy to justify.",

  goodFor: [
    "Hilton business travelers",
    "Frequent hotel stays",
    "Business travel expenses",
    "Hilton loyalists"
  ],

  notGoodFor: [
    "People who rarely stay at Hilton",
    "Users wanting flexible points",
    "Simple cashback setups"
  ],

  bestPairing: [
    "Amex Gold",
    "Amex Platinum",
    "Blue Business Plus"
  ],

  weaknesses: [
    "Hilton points are less flexible than Membership Rewards",
    "Best value comes from Hilton stays"
  ],

  premium: false,
  beginnerFriendly: false,
  business: true,
  featured: true
},
  // =====================
  // CHASE INK BUSINESS
  // =====================

  {
    name: "Ink Business Preferred",
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
    bestFor: "Business Travel + Ads",

    rewards: {
      dining: 1,
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
      "3x shipping",
      "3x internet, cable, and phone",
      "3x advertising",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "One of the best business travel cards because it unlocks Chase transfer partners at a reasonable annual fee.",

    bestPairing: "Pairs well with Ink Business Unlimited and Ink Business Cash.",

    goodFor: [
      "Business travel",
      "Advertising",
      "Shipping",
      "Chase transfer partners"
    ],

    notGoodFor: [
      "Simple cash back only",
      "People who want no annual fee",
      "Dining and grocery optimization"
    ],

    featuredCard: true,

    tags: ["chase", "business", "flexible", "travel"],

    benefits: [
      "Chase transfer partners",
      "Strong business categories",
      "Great business travel card"
    ],

    why: "Best Chase business card for transferable points.",

    weaknesses: [
      "Has annual fee",
      "Not a dining or grocery card"
    ],

    premium: false,
    beginnerFriendly: false,
    business: true
  },

  {
    name: "Ink Business Unlimited",
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
    bestFor: "Business Catch-All",

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
      "1.5x on every purchase",
      "No annual fee"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A great no-fee business catch-all card, especially if paired with a Sapphire card or Ink Preferred.",

    bestPairing: "Pairs well with Ink Business Preferred or Chase Sapphire Preferred.",

    goodFor: [
      "Business catch-all spend",
      "No annual fee",
      "Chase setups"
    ],

    notGoodFor: [
      "Premium perks",
      "High category earning"
    ],

    featuredCard: true,

    tags: ["chase", "business", "flexible", "noAnnualFee", "everyday"],

    benefits: [
      "No annual fee",
      "Simple 1.5x earning",
      "Pairs well with premium Chase cards"
    ],

    why: "Best no-fee Chase business catch-all card.",

    weaknesses: [
      "Best when paired with a transfer card"
    ],

    premium: false,
    beginnerFriendly: true,
    business: true
  },

  {
    name: "Ink Business Cash",
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
    bestFor: "Office + Internet",

    rewards: {
      dining: 2,
      groceries: 1,
      gas: 2,
      rent: 0,
      flightsDirect: 1,
      hotelsDirect: 1,
      travelPortal: 1,
      other: 1
    },

    multipliers: [
      "5x office supply stores",
      "5x internet, cable, and phone",
      "2x gas",
      "2x dining",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A very strong no-fee business card if you can use the 5x categories. This is one of the best support cards in the Chase ecosystem.",

    bestPairing: "Pairs well with Ink Business Preferred.",

    goodFor: [
      "Office supplies",
      "Internet and phone bills",
      "No annual fee",
      "Chase points"
    ],

    notGoodFor: [
      "Simple one-card setups",
      "Businesses without those categories"
    ],

    featuredCard: true,

    tags: ["chase", "business", "flexible", "noAnnualFee"],

    benefits: [
      "5x business categories",
      "No annual fee",
      "Strong Chase support card"
    ],

    why: "Best for office, internet, cable, and phone business spend.",

    weaknesses: [
      "Category caps and tracking required"
    ],

    premium: false,
    beginnerFriendly: true,
    business: true
  },

  // =====================
  // CAPITAL ONE BUSINESS
  // =====================

  {
    name: "Capital One Venture X Business",
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
    bestFor: "Premium Business Travel",

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
      "2x miles on every purchase",
      "10x hotels and rental cars through Capital One Travel",
      "5x flights through Capital One Travel"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A strong premium business card for simple 2x earning and travel perks. I like it most for business owners who want simplicity plus lounge access.",

    bestPairing: "Pairs well with Capital One Spark Cash or Venture Business.",

    goodFor: [
      "Business travel",
      "Simple 2x earning",
      "Lounge access",
      "Capital One miles"
    ],

    notGoodFor: [
      "People who do not travel",
      "People who avoid travel portals"
    ],

    featuredCard: true,

    tags: ["capitalone", "business", "flexible", "premium", "travel", "luxuryTravel"],

    benefits: [
      "2x miles on every purchase",
      "Premium travel benefits",
      "Airport lounge access",
      "Capital One transfer partners"
    ],

    why: "Best premium Capital One business travel card.",

    weaknesses: [
      "Annual fee",
      "Top travel multipliers require Capital One Travel"
    ],

    premium: true,
    beginnerFriendly: false,
    business: true
  },

  {
    name: "Capital One Venture Business",
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
    bestFor: "Simple Business Miles",

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
      "2x miles on every purchase",
      "5x hotels and rental cars through Capital One Travel"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A simple business miles card for people who want flat 2x earning without tracking categories.",

    bestPairing: "Pairs well with Venture X Business or Spark Cash.",

    goodFor: [
      "Simple business rewards",
      "Flat 2x earning",
      "Travel miles"
    ],

    notGoodFor: [
      "Premium lounge access",
      "Category maximizers"
    ],

    featuredCard: false,

    tags: ["capitalone", "business", "flexible", "travel", "everyday"],

    benefits: [
      "2x on every purchase",
      "Simple business miles",
      "Travel rewards"
    ],

    why: "Best for business owners who want simple travel miles.",

    weaknesses: [
      "Fewer premium perks than Venture X Business"
    ],

    premium: false,
    beginnerFriendly: true,
    business: true
  },

  {
    name: "Capital One Spark Cash Plus",
    issuer: "Capital One",
    issuerTag: "capitalone",
    ecosystem: "Cash Back",
    annualFee: 150,
    pointValue: 0.01,
    type: "cashback",
    brand: "capitalone",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "High Business Cash Back",

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
      "2% cash back on every purchase",
      "5% cash back on hotels and rental cars through Capital One Travel"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "Great for businesses that want simple uncapped cash back and spend enough to justify the annual fee.",

    bestPairing: "Pairs well with Venture X Business if you want both cash back and travel miles.",

    goodFor: [
      "High business spend",
      "Simple cash back",
      "Flat earning"
    ],

    notGoodFor: [
      "Transferable points",
      "Low-spend businesses",
      "No annual fee setups"
    ],

    featuredCard: false,

    tags: ["capitalone", "business", "cashback", "everyday"],

    benefits: [
      "Simple 2% cash back",
      "Good for high business spend",
      "No category tracking"
    ],

    why: "Best for businesses that want simple high cash back.",

    weaknesses: [
      "Annual fee",
      "No transferable points"
    ],

    premium: false,
    beginnerFriendly: true,
    business: true
  },

  {
    name: "Capital One Spark Cash Select",
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
    bestFor: "No-Fee Business Cash Back",

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
      "1.5% cash back on every purchase",
      "No annual fee"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-04",

    myReview: "A simple no-fee business cash back card. Good for beginners, but not the strongest long-term rewards setup.",

    bestPairing: "Pairs well with a premium business travel card.",

    goodFor: [
      "No annual fee",
      "Simple cash back",
      "Beginner business owners"
    ],

    notGoodFor: [
      "Maximizing rewards",
      "Premium travel perks"
    ],

    featuredCard: false,

    tags: ["capitalone", "business", "cashback", "noAnnualFee", "everyday"],

    benefits: [
      "No annual fee",
      "Simple 1.5% cash back",
      "Easy business card"
    ],

    why: "Best no-fee Capital One business cash back card.",

    weaknesses: [
      "Lower earning than Spark Cash Plus"
    ],

    premium: false,
    beginnerFriendly: true,
    business: true
  }

  // =====================
  // AMEX MARRIOTT BUSINESS
  // Add before closing ];
  // =====================

  {
    name: "Marriott Bonvoy Business American Express Card",
    issuer: "Amex / Marriott",
    issuerTag: "amex",
    ecosystem: "Marriott Bonvoy",
    annualFee: 125,
    pointValue: 0.008,
    type: "hotel",
    brand: "marriott",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Marriott Business Travel",

    rewards: {
      dining: 4,
      groceries: 1,
      gas: 4,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 6,
      travelPortal: 2,
      other: 2
    },

    multipliers: [
      "6x Marriott purchases",
      "4x restaurants",
      "4x gas stations",
      "4x wireless telephone services",
      "2x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-09",

    myReview: "This is the main Marriott business card to consider if you stay with Marriott and value annual free night certificates.",
    bestPairing: "Pairs well with Amex Business Gold, Blue Business Plus, or a flexible travel card.",

    goodFor: [
      "Marriott business travelers",
      "Annual free night certificate",
      "Business hotel stays",
      "Marriott loyalists"
    ],

    notGoodFor: [
      "People who rarely stay at Marriott",
      "Users wanting flexible points",
      "Cash back setups"
    ],

    featuredCard: true,
    tags: ["amex", "business", "hotel", "marriott", "travel"],
    benefits: [
      "Marriott points",
      "Annual free night certificate",
      "Elite night credits",
      "Business hotel rewards"
    ],
    why: "Best Marriott business card for business owners who stay with Marriott.",
    weaknesses: [
      "Marriott points are less flexible than transferable points",
      "Best value depends on Marriott stays"
    ],

    premium: false,
    beginnerFriendly: false,
    business: true
  },
    // =====================
  // CHASE HYATT BUSINESS
  // Add before closing ];
  // =====================

  {
    name: "World of Hyatt Business Credit Card",
    issuer: "Chase / Hyatt",
    issuerTag: "chase",
    ecosystem: "World of Hyatt",
    annualFee: 199,
    pointValue: 0.02,
    type: "hotel",
    brand: "hyatt",
    imageUrl: "",
    youtubeUrl: "",
    applyUrl: "#",
    bestFor: "Hyatt Business Travel",

    rewards: {
      dining: 2,
      groceries: 1,
      gas: 2,
      rent: 0,
      flightsDirect: 2,
      hotelsDirect: 4,
      travelPortal: 2,
      other: 1
    },

    multipliers: [
      "4x Hyatt purchases",
      "2x select business categories",
      "2x fitness clubs and gym memberships",
      "1x everything else"
    ],

    welcomeBonus: "Check the current welcome bonus before applying.",
    lastUpdated: "2026-05-09",

    myReview: "Hyatt points are extremely valuable, but this card is best for actual Hyatt loyalists rather than casual travelers.",
    bestPairing: "Pairs well with Chase Sapphire Preferred, Sapphire Reserve, or Ink Business Preferred.",

    goodFor: [
      "Hyatt loyalists",
      "Business hotel stays",
      "High-value hotel redemptions",
      "Chase ecosystem users"
    ],

    notGoodFor: [
      "People who do not stay at Hyatt",
      "Simple cash back users",
      "Broad hotel flexibility"
    ],

    featuredCard: true,
    tags: ["chase", "business", "hotel", "hyatt", "travel"],
    benefits: [
      "Hyatt points",
      "Elite night credit opportunities",
      "Strong redemption value",
      "Business hotel benefits"
    ],
    why: "Best for business owners who regularly stay with Hyatt.",
    weaknesses: [
      "Hyatt footprint is smaller than Marriott or Hilton",
      "Best only if you use Hyatt"
    ],

    premium: false,
    beginnerFriendly: false,
    business: true
  },
  // =====================
// AMEX DELTA BUSINESS
// Add below Hilton/Marriott/Hyatt/IHG business cards
// =====================
{
  name: "Delta SkyMiles Gold Business American Express Card",
  issuer: "Amex / Delta",
  issuerTag: "amex",
  ecosystem: "Delta SkyMiles",
  annualFee: 150,
  pointValue: 0.013,
  type: "airline",
  brand: "delta",
  imageUrl: "",
  youtubeUrl: "",
  applyUrl: "#",

  bestFor: "Starter Delta Business",

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
    "2x U.S. shipping",
    "1x everything else"
  ],

  tags: ["amex", "business", "airline", "delta"],

  benefits: [
    "First checked bag free",
    "Priority boarding",
    "Delta flight credit opportunity"
  ],

  welcomeBonus: "Check Amex for latest Delta Gold Business offer.",

  why: "Best starter business card for occasional Delta flyers.",

  myReview:
    "This is the easiest Delta business card to justify if you fly Delta occasionally and value the free checked bag.",

  goodFor: [
    "Occasional Delta flyers",
    "Business owners who fly Delta",
    "Free checked bag"
  ],

  notGoodFor: [
    "Premium lounge access",
    "Everyday business spend",
    "People who rarely fly Delta"
  ],

  bestPairing: [
    "Amex Business Gold",
    "Blue Business Plus"
  ],

  weaknesses: [
    "Not strong for everyday spending",
    "Limited premium perks"
  ],

  premium: false,
  beginnerFriendly: true,
  business: true,
  featured: false
},

{
  name: "Delta SkyMiles Platinum Business American Express Card",
  issuer: "Amex / Delta",
  issuerTag: "amex",
  ecosystem: "Delta SkyMiles",
  annualFee: 350,
  pointValue: 0.013,
  type: "airline",
  brand: "delta",
  imageUrl: "",
  youtubeUrl: "",
  applyUrl: "#",

  bestFor: "Delta Business Flyers",

  rewards: {
    dining: 1,
    groceries: 1,
    gas: 1.5,
    rent: 0,
    flightsDirect: 3,
    hotelsDirect: 3,
    travelPortal: 1,
    other: 1
  },

  multipliers: [
    "3x Delta purchases",
    "3x hotels",
    "1.5x eligible larger purchases",
    "1x everything else"
  ],

  tags: ["amex", "business", "airline", "delta"],

  benefits: [
    "Companion certificate",
    "First checked bag free",
    "Priority boarding",
    "MQD earning support"
  ],

  welcomeBonus: "Check Amex for latest Delta Platinum Business offer.",

  why: "Best middle-tier Delta business card for flyers who can use the companion certificate.",

  myReview:
    "This is the Delta business card I’d compare first if you fly Delta enough to use the companion certificate but do not need the highest-tier Reserve card.",

  goodFor: [
    "Frequent Delta flyers",
    "Companion certificate users",
    "Business travel"
  ],

  notGoodFor: [
    "Casual Delta flyers",
    "People who want flexible points",
    "Simple cash back setups"
  ],

  bestPairing: [
    "Amex Gold",
    "Blue Business Plus"
  ],

  weaknesses: [
    "Only worth it if you use Delta benefits",
    "Weak everyday earning compared to flexible points cards"
  ],

  premium: false,
  beginnerFriendly: false,
  business: true,
  featured: false
},

//
//IHG
//

{
  name: "IHG One Rewards Premier Business Card",
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

  bestFor: "IHG Hotel Stays",

  rewards: {
    dining: 3,
    groceries: 2,
    gas: 5,
    rent: 0,
    flightsDirect: 3,
    hotelsDirect: 10,
    travelPortal: 2,
    other: 3
  },

  multipliers: [
    "10x IHG purchases",
    "5x gas stations",
    "5x travel",
    "3x dining"
  ],

  tags: [
    "chase",
    "business",
    "hotel",
    "ihg",
    "travel"
  ],

  benefits: [
    "IHG Platinum status",
    "Anniversary free night",
    "Global Entry/TSA credit"
  ],

  welcomeBonus: "Check Chase for latest IHG Business offer.",

  why: "Strong value for IHG loyalists with a low annual fee.",

  myReview:
    "The annual free night alone can offset the annual fee if you stay at IHG occasionally.",

  goodFor: [
    "IHG travelers",
    "Road warriors",
    "Lower annual fee hotel setup"
  ],

  notGoodFor: [
    "Luxury hotel maximizers",
    "Flexible points setups"
  ],

  bestPairing: [
    "Ink Business Preferred"
  ],

  weaknesses: [
    "IHG points are lower value"
  ],

  premium: false,
  beginnerFriendly: true,
  business: true,
  featured: false
},
// =====================
// SOUTHWEST BUSINESS
// =====================

{
  name: "Southwest Rapid Rewards Premier Business Credit Card",
  issuer: "Chase / Southwest",
  issuerTag: "chase",
  ecosystem: "Southwest Rapid Rewards",
  annualFee: 99,
  pointValue: 0.014,
  type: "airline",
  brand: "southwest",
  imageUrl: "",
  youtubeUrl: "",
  applyUrl: "#",

  bestFor: "Southwest Business Flyers",

  rewards: {
    dining: 2,
    groceries: 1,
    gas: 1,
    rent: 0,
    flightsDirect: 3,
    hotelsDirect: 2,
    travelPortal: 1,
    other: 1
  },

  multipliers: [
    "3x Southwest purchases",
    "2x Rapid Rewards hotel and car rental partners",
    "2x local transit and commuting",
    "1x everything else"
  ],

  tags: ["chase", "business", "airline", "southwest"],

  benefits: [
    "Companion Pass qualifying points",
    "EarlyBird Check-In credits",
    "Anniversary bonus points"
  ],

  welcomeBonus: "Check Chase for latest Southwest Premier Business offer.",

  why: "Great for Southwest loyalists chasing Companion Pass.",

  myReview:
    "One of the easiest ways to help earn the Southwest Companion Pass for business owners.",

  goodFor: [
    "Southwest flyers",
    "Domestic travel",
    "Companion Pass strategy"
  ],

  notGoodFor: [
    "Luxury travel",
    "International premium flights"
  ],

  bestPairing: [
    "Chase Sapphire Preferred"
  ],

  weaknesses: [
    "Limited airline partner flexibility"
  ],

  premium: false,
  beginnerFriendly: true,
  business: true,
  featured: false
},

{
  name: "Southwest Rapid Rewards Performance Business Credit Card",
  issuer: "Chase / Southwest",
  issuerTag: "chase",
  ecosystem: "Southwest Rapid Rewards",
  annualFee: 199,
  pointValue: 0.014,
  type: "airline",
  brand: "southwest",
  imageUrl: "",
  youtubeUrl: "",
  applyUrl: "#",

  bestFor: "Frequent Southwest Travelers",

  rewards: {
    dining: 3,
    groceries: 1,
    gas: 2,
    rent: 0,
    flightsDirect: 4,
    hotelsDirect: 3,
    travelPortal: 1,
    other: 1
  },

  multipliers: [
    "4x Southwest purchases",
    "3x Rapid Rewards hotel/car partners",
    "2x social media and search advertising",
    "2x internet/cable/phone"
  ],

  tags: ["chase", "business", "airline", "southwest", "premium"],

  benefits: [
    "Upgraded boardings",
    "Wi-Fi credits",
    "Companion Pass qualifying points"
  ],

  welcomeBonus: "Check Chase for latest Southwest Performance Business offer.",

  why: "Best premium Southwest business card.",

  myReview:
    "Worth it for heavy Southwest travelers who value upgraded boarding and extra perks.",

  goodFor: [
    "Frequent Southwest flyers",
    "Companion Pass users",
    "Business travel"
  ],

  notGoodFor: [
    "Luxury travel seekers",
    "International airline partners"
  ],

  bestPairing: [
    "Chase Sapphire Reserve"
  ],

  weaknesses: [
    "Southwest-only ecosystem"
  ],

  premium: true,
  beginnerFriendly: false,
  business: true,
  featured: false
},

// =====================
// UNITED BUSINESS
// =====================

{
  name: "United Business Card",
  issuer: "Chase / United",
  issuerTag: "chase",
  ecosystem: "United MileagePlus",
  annualFee: 150,
  pointValue: 0.013,
  type: "airline",
  brand: "united",
  imageUrl: "",
  youtubeUrl: "",
  applyUrl: "#",

  bestFor: "United Business Flyers",

  rewards: {
    dining: 2,
    groceries: 1,
    gas: 2,
    rent: 0,
    flightsDirect: 2,
    hotelsDirect: 2,
    travelPortal: 1,
    other: 1
  },

  multipliers: [
    "2x United purchases",
    "2x dining",
    "2x gas stations",
    "2x office supply stores"
  ],

  tags: [
    "chase",
    "business",
    "airline",
    "united"
  ],

  benefits: [
    "Free checked bag",
    "Priority boarding",
    "United flight discounts"
  ],

  welcomeBonus: "Check Chase for latest United Business offer.",

  why: "Best United business airline card for frequent flyers.",

  myReview:
    "Solid airline business card if you regularly fly United and want travel perks.",

  goodFor: [
    "United loyalists",
    "Business travel",
    "Airline perks"
  ],

  notGoodFor: [
    "Everyday spend",
    "Flexible points users"
  ],

  bestPairing: [
    "Chase Sapphire Preferred"
  ],

  weaknesses: [
    "Limited value outside United ecosystem"
  ],

  premium: false,
  beginnerFriendly: true,
  business: true,
  featured: false
},

{
  name: "United Club Business Card",
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

  bestFor: "Premium United Travelers",

  rewards: {
    dining: 2,
    groceries: 1,
    gas: 2,
    rent: 0,
    flightsDirect: 7,
    hotelsDirect: 2,
    travelPortal: 1,
    other: 1.5
  },

  multipliers: [
    "7x United purchases",
    "2x dining",
    "2x travel",
    "1.5x everything else"
  ],

  tags: ["chase", "business", "airline", "united", "premium"],

  benefits: [
    "United Club membership",
    "Premier Access",
    "Free checked bags"
  ],

  welcomeBonus: "Check Chase for latest United Club Business offer.",

  why: "Best premium United business travel card.",

  myReview:
    "Best for business travelers heavily committed to United and Star Alliance travel.",

  goodFor: [
    "United loyalists",
    "Airport lounge access",
    "Frequent business flyers"
  ],

  notGoodFor: [
    "Casual travelers",
    "Simple rewards setups"
  ],

  bestPairing: [
    "Chase Sapphire Preferred"
  ],

  weaknesses: [
    "Very high annual fee"
  ],

  premium: true,
  beginnerFriendly: false,
  business: true,
  featured: false
},

// =====================
// AMERICAN AIRLINES BUSINESS
// =====================

{
  name: "CitiBusiness AAdvantage Platinum Select Mastercard",
  issuer: "Citi / American Airlines",
  issuerTag: "citi",
  ecosystem: "American Airlines AAdvantage",
  annualFee: 99,
  pointValue: 0.014,
  type: "airline",
  brand: "american",
  imageUrl: "",
  youtubeUrl: "",
  applyUrl: "#",

  bestFor: "American Airlines Flyers",

  rewards: {
    dining: 1,
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
    "2x gas stations",
    "2x telecommunications",
    "1x everything else"
  ],

  tags: ["citi", "business", "airline", "american"],

  benefits: [
    "First checked bag free",
    "Preferred boarding",
    "Companion certificate opportunity"
  ],

  welcomeBonus: "Check Citi for latest AA Business offer.",

  why: "Best business card for American Airlines loyalists.",

  myReview:
    "Strong airline business card if you regularly fly American Airlines and value checked bag savings.",

  goodFor: [
    "American Airlines travelers",
    "Business flights",
    "Domestic travel"
  ],

  notGoodFor: [
    "Flexible points users",
    "Luxury travel redemptions"
  ],

  bestPairing: [
    "Citi Strata Premier"
  ],

  weaknesses: [
    "Limited outside AA ecosystem"
  ],

  premium: false,
  beginnerFriendly: true,
  business: true,
  featured: false
},

// =====================
// WYNDHAM BUSINESS
// =====================

{
  name: "Wyndham Rewards Earner Business Card",
  issuer: "Barclays / Wyndham",
  issuerTag: "barclays",
  ecosystem: "Wyndham Rewards",
  annualFee: 95,
  pointValue: 0.011,
  type: "hotel",
  brand: "wyndham",
  imageUrl: "",
  youtubeUrl: "",
  applyUrl: "#",

  bestFor: "Gas + Wyndham Stays",

  rewards: {
    dining: 5,
    groceries: 1,
    gas: 8,
    rent: 0,
    flightsDirect: 1,
    hotelsDirect: 8,
    travelPortal: 1,
    other: 1
  },

  multipliers: [
    "8x Wyndham purchases",
    "8x gas",
    "5x marketing/advertising/utilities",
    "1x everything else"
  ],

  tags: ["business", "hotel", "wyndham"],

  benefits: [
    "Wyndham Diamond status",
    "Strong gas rewards",
    "Caesars status match potential"
  ],

  welcomeBonus: "Check Barclays for latest Wyndham Business offer.",

  why: "One of the strongest gas rewards business cards available.",

  myReview:
    "Extremely underrated business card for gas spending and Wyndham/Caesars strategies.",

  goodFor: [
    "Road warriors",
    "Gas spending",
    "Wyndham stays"
  ],

  notGoodFor: [
    "Luxury hotel seekers",
    "Flexible points setups"
  ],

  bestPairing: [
    "Chase Sapphire Preferred"
  ],

  weaknesses: [
    "Smaller hotel footprint"
  ],

  premium: false,
  beginnerFriendly: false,
  business: true,
 featured: true
},

// =====================
// ALASKA BUSINESS
// =====================

{
  name: "Alaska Airlines Visa Business Card",
  issuer: "Bank of America / Alaska",
  issuerTag: "boa",
  ecosystem: "Alaska Mileage Plan",
  annualFee: 70,
  pointValue: 0.018,
  type: "airline",
  brand: "alaska",
  imageUrl: "",
  youtubeUrl: "",
  applyUrl: "#",

  bestFor: "Alaska Mileage Plan",

  rewards: {
    dining: 2,
    groceries: 1,
    gas: 1,
    rent: 0,
    flightsDirect: 3,
    hotelsDirect: 1,
    travelPortal: 1,
    other: 1
  },

  multipliers: [
    "3x Alaska purchases",
    "2x gas, EV charging, shipping",
    "2x cable/streaming"
  ],

  tags: ["business", "airline", "alaska"],

  benefits: [
    "Companion fare",
    "Free checked bag",
    "Oneworld partner value"
  ],

  welcomeBonus: "Check Bank of America for latest Alaska Business offer.",

  why: "Best for Alaska Airlines loyalists and Oneworld award travelers.",

  myReview:
    "Alaska miles can be extremely valuable for premium international flights.",

  goodFor: [
    "Oneworld travel",
    "Alaska flyers",
    "International award flights"
  ],

  notGoodFor: [
    "Everyday cash back",
    "People without Alaska usage"
  ],

  bestPairing: [
    "Bilt Mastercard"
  ],

  weaknesses: [
    "Smaller domestic footprint"
  ],

  premium: false,
  beginnerFriendly: false,
  business: true,
  featured: false
},
];

window.businessCreditCards = businessCreditCards;