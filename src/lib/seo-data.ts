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
      name: "Single Event",
      eventCount: 1,
      subtitle: "Ideal for Barat, Walima, or Mehndi",
      totalPrice: "PKR 50,000",
      perEventPrice: "PKR 50,000",
      originalPrice: null,
      discount: null,
      savings: null,
      bookingLabel: "Book Single Event",
      bestValue: false,
      popular: false,
    },
    {
      name: "Two Events",
      eventCount: 2,
      subtitle: "Best for Barat + Walima combo",
      totalPrice: "PKR 80,000",
      perEventPrice: "PKR 40,000",
      originalPrice: "PKR 100,000",
      discount: "SAVE 20%",
      savings: "Save PKR 20,000",
      bookingLabel: "Book Two Events",
      bestValue: false,
      popular: true,
    },
    {
      name: "Three Events",
      eventCount: 3,
      subtitle: "Complete Mehndi, Barat & Walima package",
      totalPrice: "PKR 105,000",
      perEventPrice: "PKR 35,000",
      originalPrice: "PKR 150,000",
      discount: "SAVE 30%",
      savings: "Save PKR 45,000",
      bookingLabel: "Book Three Events",
      bestValue: true,
      popular: false,
    },
  ],
  packageFacilities: [
    "300–500 Guests Hall Capacity",
    "Choice of Lunch, 1:00 PM – 6:00 PM, or Night, 7:00 PM – 12:00 AM (Midnight)",
    "Standard Stage Setup Included",
    "Professional DJ System & Operator",
    "Waiter Service, UPS & Generator Backup",
    "Parking (Up to 10 Cars & 100 Bikes)",
  ],
  eventSlots: [
    { name: "Lunch Event", time: "1:00 PM – 6:00 PM" },
    { name: "Night Event", time: "7:00 PM – 12:00 AM (Midnight)" },
  ],
  cateringOptions: [
    {
      name: "In-house Catering",
      description: "Full menu arranged by Iftikhari Marriage Hall.",
    },
    {
      name: "Outside Catering",
      description: "Hire your own external catering service.",
    },
  ],
  optionalAddOns: ["Special Fog Effects", "Fire Fountain Effects", "Custom Stage Redesign"],
  faqs: [
    {
      question: "Where is IFTIKHARI Marriage Hall, and how can I find it on Google Maps?",
      answer: "IFTIKHARI Marriage Hall is in Hazara Town, Quetta, near Ameeri Taj Mahal Marriage Hall. Open the map on our Contact page for directions.",
    },
    {
      question: "How many guests can IFTIKHARI Marriage Hall accommodate?",
      answer: "Each event can host 300 to 500 guests, including weddings, Walima, engagements, birthdays, and corporate events.",
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
