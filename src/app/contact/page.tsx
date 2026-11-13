import type { Metadata } from "next";
import { businessData } from "@/lib/seo-data";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Location | IFTIKHARI Marriage Hall Quetta",
  description:
    "Find IFTIKHARI Marriage Hall in Hazara Town, Quetta. View the map, opening hours, phone number, and WhatsApp contact details.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F5] pb-20">
      <section className="bg-[#062A24] text-white py-16 text-center border-b border-[#C89D3C]/20">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-[#C89D3C] font-semibold">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#FAF8F5]">
            Contact & Location
          </h1>
          <p className="text-sm sm:text-base text-[#BFCEC9] mt-3">
            Contact the team by phone or WhatsApp, or visit the hall in Hazara Town.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-md text-center">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto mb-4">
              <WhatsAppIcon className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#062A24]">WhatsApp Booking</h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">Ask about dates, packages, and the venue</p>
            <a
              href={businessData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-bold text-xs uppercase tracking-wide hover:brightness-105"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-md text-center">
            <div className="w-12 h-12 rounded-full bg-[#C89D3C]/10 text-[#C89D3C] flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#062A24]">Phone Call</h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">{businessData.phoneFormatted}</p>
            <a
              href={`tel:${businessData.phone}`}
              className="inline-block px-5 py-2.5 rounded-lg bg-[#062A24] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#093d34]"
            >
              Call Now
            </a>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-md text-center">
            <div className="w-12 h-12 rounded-full bg-[#062A24]/10 text-[#062A24] flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#062A24]">Office Timings</h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">Daily, 10:00 AM to 6:00 PM</p>
            <span className="inline-block px-4 py-2 rounded-lg bg-stone-100 text-stone-700 font-semibold text-xs">
              Open 7 Days a Week
            </span>
          </div>

        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2 text-[#C89D3C] font-semibold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                Address
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#062A24] mt-1">
                Hazara Town, Quetta
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                Near Ameeri Taj Mahal Marriage Hall, Hazara Town, Quetta, Balochistan, Pakistan.
              </p>
            </div>

            <a
              href={businessData.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#062A24] text-[#C89D3C] font-bold text-xs uppercase tracking-wider hover:bg-[#041c18] transition shadow-md shrink-0"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>

          <div className="mt-6 w-full h-[400px] rounded-xl overflow-hidden border border-stone-200 relative bg-stone-100">
            <iframe
              title="IFTIKHARI Marriage Hall Quetta Location Map"
              src="https://maps.google.com/maps?q=5XM5%2BF3J%2C%20Hazara%20Town%2C%20Quetta%2C%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </section>
    </div>
  );
}
