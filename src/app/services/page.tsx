import type { Metadata } from "next";
import { businessData } from "@/lib/seo-data";
import { CheckCircle2, Sparkles } from "lucide-react";

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
            Event arrangements for 50 to 500 guests, with packages for different occasions.
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#C89D3C] font-semibold">Detailed Pricing</span>
          <h2 className="font-serif text-3xl font-bold text-[#062A24] mt-1">Event Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessData.packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between ${
                pkg.popular
                  ? "bg-[#062A24] text-white border-2 border-[#C89D3C] shadow-xl relative"
                  : "bg-white text-[#062A24] border border-stone-200 shadow-sm"
              }`}
            >
              <div>
                <h3 className={`font-serif text-2xl font-bold ${pkg.popular ? "text-[#C89D3C]" : "text-[#062A24]"}`}>
                  {pkg.name}
                </h3>
                <div className="text-3xl font-extrabold my-4">{pkg.price}</div>
                <p className={`text-xs mb-6 ${pkg.popular ? "text-[#B4C5C0]" : "text-stone-500"}`}>
                  {pkg.idealFor}
                </p>

                <ul className="space-y-3 text-xs mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? "text-[#C89D3C]" : "text-[#062A24]"}`} />
                      <span className={pkg.popular ? "text-[#D9E3E0]" : "text-stone-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
