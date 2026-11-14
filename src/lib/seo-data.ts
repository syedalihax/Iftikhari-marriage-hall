const phone = "+923498059149";

function createWhatsAppUrl(message = "Hello, I would like to know more about booking and packages at IFTIKHARI Marriage Hall.") {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export const businessData = {
  name: "IFTIKHARI Marriage Hall",
  legalName: "IFTIKHARI Marriage Hall",
  url: "https://iftikharihall.pk",
  phone,
  phoneFormatted: "+92 349 8059149",
  whatsappUrl: createWhatsAppUrl(),
  address: {
    street: "Near Ameeri Taj Mahal Marriage Hall, Hazara Town",
    city: "Quetta",
    region: "Balochistan",
    country: "PK",
    plusCode: "5XM5+F3J, Hazara Town, Quetta, Pakistan",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=5XM5%2BF3J%2C+Hazara+Town%2C+Quetta%2C+Pakistan",
  },
  social: {
    facebook: "https://www.facebook.com/p/Iftikhari-Hall-61569787506106/",
    instagram: "https://www.instagram.com/iftikhari_hall/",
  },
  capacity: {
    min: 300,
    max: 500,
  },
  parking: "Parking for up to 10 cars and up to 100 motorcycles",
  powerBackup: "Dual Backup: Commercial Generator + UPS system (Zero electricity interruption)",
  packages: [
    {
      name: "Single Function",
      functions: 1,
      totalPrice: "PKR 50,000",
      perFunctionPrice: "PKR 50,000",
      bestValue: false,
    },
    {
      name: "Two Functions",
      functions: 2,
      totalPrice: "PKR 80,000",
      perFunctionPrice: "PKR 40,000",
      bestValue: false,
    },
    {
      name: "Three Functions",
      functions: 3,
      totalPrice: "PKR 105,000",
      perFunctionPrice: "PKR 35,000",
      bestValue: true,
    },
  ],
  packageFacilities: [
    "Professional DJ system with DJ operator",
    "Existing standard stage setup",
    "Waiter service for guest hospitality",
    "Parking for up to 10 cars and up to 100 motorcycles",
    "UPS power backup",
    "Generator backup",
  ],
  functionSlots: [
    { name: "Lunch Function", time: "1:00 PM – 6:00 PM" },
    { name: "Night Function", time: "7:00 PM – 12:00 AM (Midnight)" },
  ],
  cateringOptions: [
    {
      name: "In-house Catering",
      description: "Arrange food and catering services through Iftikhari Marriage Hall.",
    },
    {
      name: "Outside Catering",
      description: "Hire your own external catering service.",
    },
  ],
  optionalAddOns: ["Special Fog Effects", "Fire Fountain Effects"],
  faqs: [
    {
      question: "Where is IFTIKHARI Marriage Hall, and how can I find it on Google Maps?",
      answer: "IFTIKHARI Marriage Hall is in Hazara Town, Quetta, near Ameeri Taj Mahal Marriage Hall. Open the map on our Contact page for directions.",
    },
    {
      question: "How many guests can IFTIKHARI Marriage Hall accommodate?",
      answer: "The hall can host events for 300 to 500 guests per function, including weddings, Walima, engagements, birthdays, and corporate events.",
    },
    {
      question: "Is parking and backup power available?",
      answer: "Yes. Parking is available for up to 10 cars and up to 100 motorcycles. The venue also has UPS and generator backup.",
    },
    {
      question: "Can we bring our own caterer?",
      answer: "Yes. You can arrange outside catering or ask about the hall's in-house catering service.",
    },
    {
      question: "How can I ask about booking a date?",
      answer: "Call or message us on WhatsApp at +92 349 8059149, or visit the hall in Hazara Town, Quetta.",
    },
  ],
};

export function getWhatsAppUrl(message = "Hello, I would like to know more about booking and packages at IFTIKHARI Marriage Hall.") {
  return createWhatsAppUrl(message);
}
