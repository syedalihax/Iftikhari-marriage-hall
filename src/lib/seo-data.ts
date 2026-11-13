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
    min: 50,
    max: 500,
  },
  parking: "10 Cars and 100+ Motorcycles dedicated secure parking space",
  powerBackup: "Dual Backup: Commercial Generator + UPS system (Zero electricity interruption)",
  packages: [
    {
      name: "Classic Event Package",
      price: "PKR 50,000",
      idealFor: "Engagement, Birthday Parties, Small Gatherings (50-150 guests)",
      popular: false,
      features: [
        "Hall rental with complete royal lighting setup",
        "Air-conditioned / Heated climate management",
        "Standard stage decoration & floral backdrop",
        "UPS and Generator continuous power backup",
        "Dedicated motorcycle & car parking space",
        "Outside or in-house catering option allowed",
      ],
    },
    {
      name: "Grand Wedding Package",
      price: "PKR 80,000",
      idealFor: "Mehndi, Barat, Walima (150-350 guests)",
      popular: true,
      features: [
        "Premium mirrored glass dance floor & walkway setup",
        "Deluxe floral arch stage with warm bridal lighting",
        "Exclusive VIP sofa lounge seating for family",
        "Dedicated sound & ambient illumination controls",
        "Full staff support & hygiene management",
        "Full UPS + Heavy generator backup without pause",
      ],
    },
    {
      name: "Royal Exclusive Package",
      price: "PKR 100,000+",
      idealFor: "Full Grand Weddings, Corporate Awards (300-500 guests)",
      popular: false,
      features: [
        "Exclusive single-slot hall reservation",
        "Customized stage architecture & theme design",
        "Bridal suite room access for preparation",
        "Valet parking assistance for 10 cars & 100 bikes",
        "Complete flexibility for in-house or external catering",
        "Personalized hall supervisor for hassle-free coordination",
      ],
    },
  ],
  faqs: [
    {
      question: "Where is IFTIKHARI Marriage Hall, and how can I find it on Google Maps?",
      answer: "IFTIKHARI Marriage Hall is in Hazara Town, Quetta, near Ameeri Taj Mahal Marriage Hall. Open the map on our Contact page for directions.",
    },
    {
      question: "How many guests can IFTIKHARI Marriage Hall accommodate?",
      answer: "The hall can host events for 50 to 500 guests, including weddings, Walima, engagements, birthdays, and corporate events.",
    },
    {
      question: "Is parking and backup power available?",
      answer: "Yes. Parking is available for up to 10 cars and 100+ motorcycles. The venue also has a dual UPS and generator backup system.",
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
