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

];

window.businessCreditCards = businessCreditCards;