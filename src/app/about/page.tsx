import type { Metadata } from "next";
import Image from "next/image";
import { businessData } from "@/lib/seo-data";
import { ShieldCheck, HeartHandshake, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About IFTIKHARI Marriage Hall | Hazara Town, Quetta",
  description:
    "Learn about IFTIKHARI Marriage Hall in Hazara Town, Quetta, including its event facilities, guest capacity, backup power, and hospitality.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F5]">
      
      <section className="bg-[#062A24] text-white py-16 sm:py-20 border-b border-[#C89D3C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-[#C89D3C] font-semibold">
            Our Story & Commitment
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#FAF8F5]">
            About IFTIKHARI Marriage Hall
          </h1>
          <p className="text-sm sm:text-base text-[#BFCEC9] mt-3">
            A welcoming venue in Hazara Town, Quetta, for meaningful family celebrations and events.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-5 text-sm sm:text-base text-stone-700 leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#062A24]">
              Thoughtful Hospitality and Event Planning
            </h2>
            <p>
              IFTIKHARI Marriage Hall is located in Hazara Town, Quetta, near Ameeri Taj Mahal Marriage Hall. The venue is designed to host events for 50 to 500 guests.
            </p>
            <p>
              To help keep events running during power outages, IFTIKHARI Marriage Hall has a <strong>generator and dedicated UPS backup system</strong> for lighting and sound.
            </p>
            <p>
              Guests can ask about in-house catering or arrange an outside caterer. The hall team can help coordinate event arrangements.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <p className="font-serif text-2xl font-bold text-[#062A24]">50 - 500</p>
                <p className="text-xs text-stone-500">Guest capacity</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <p className="font-serif text-2xl font-bold text-[#C89D3C]">100%</p>
                <p className="text-xs text-stone-500">Generator and UPS backup</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#C89D3C]/30 shadow-xl">
            <Image
              src="/images/stage-arch.jpg"
              alt="White floral triple-arch stage with ornate seating and blue accent lighting"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
          </div>

        </div>

        <div className="mt-20 pt-12 border-t border-stone-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif text-2xl font-bold text-[#062A24]">
              What the Venue Offers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-[#C89D3C] mb-3" />
              <h4 className="font-serif font-bold text-base text-[#062A24] mb-1">Clear Package Options</h4>
              <p className="text-xs text-stone-600">
                Packages are listed from PKR 50,000. Contact the team to confirm inclusions and any additional costs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <Zap className="w-8 h-8 text-[#C89D3C] mb-3" />
              <h4 className="font-serif font-bold text-base text-[#062A24] mb-1">Backup Power</h4>
              <p className="text-xs text-stone-600">
                Generator and UPS backup help keep lighting and event sound running during power interruptions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <HeartHandshake className="w-8 h-8 text-[#C89D3C] mb-3" />
              <h4 className="font-serif font-bold text-base text-[#062A24] mb-1">Complete Flexibility</h4>
              <p className="text-xs text-stone-600">
                Ask about in-house catering or bring an outside caterer for your event.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-[#062A24] py-12 text-center text-white">
        <h3 className="font-serif text-2xl font-bold mb-3">Plan a Visit or Ask a Question</h3>
        <p className="text-xs sm:text-sm text-[#A8BBB5] mb-6">Message the team to ask about the venue, packages, or date availability.</p>
        <div className="flex justify-center gap-4">
          <a
            href={businessData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg bg-[#25D366] text-white font-bold text-xs uppercase"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
