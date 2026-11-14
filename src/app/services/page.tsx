import type { Metadata } from "next";
import EventPackages from "@/components/EventPackages";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Packages | IFTIKHARI Marriage Hall Quetta",
  description:
    "Explore wedding, engagement, and event packages at IFTIKHARI Marriage Hall in Quetta. Packages start from PKR 50,000.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF8F5] pb-20">
      
      <section className="bg-[#062A24] text-white py-16 text-center border-b border-[#C89D3C]/20">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-[#C89D3C] font-semibold">
            Wedding & Event Solutions
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#FAF8F5]">
            Services & Packages
          </h1>
          <p className="text-sm sm:text-base text-[#BFCEC9] mt-3">
            Event packages for functions with 300 to 500 guests.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#062A24] mb-12">
          Events at IFTIKHARI Marriage Hall
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Barat & Walima",
              desc: "Stage decoration, bridal lounge, VIP seating, and a photo-ready setting.",
            },
            {
              title: "Nikah & Engagement",
              desc: "A bright, welcoming setting for family and friends to gather.",
            },
            {
              title: "Mehndi & Sangeet",
              desc: "A reflective stage floor with event audio and lighting support.",
            },
            {
              title: "Birthdays & Awards",
              desc: "Hall arrangements for corporate events, award ceremonies, and birthday parties.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <Sparkles className="w-6 h-6 text-[#C89D3C] mb-3" />
              <h3 className="font-serif font-bold text-lg text-[#062A24] mb-1">{item.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <EventPackages />

    </div>
  );
}
