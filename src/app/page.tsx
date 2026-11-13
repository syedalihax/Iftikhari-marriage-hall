import Image from "next/image";
import Link from "next/link";
import { businessData } from "@/lib/seo-data";
import JsonLd from "@/components/JsonLd";
import FAQSection from "@/components/FAQSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  Users,
  Car,
  Zap,
  Utensils,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Quote,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <JsonLd type="local" />
      
      {/* HERO SECTION */}
      <section className="relative bg-[#062A24] text-[#FAF8F5] pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C89D3C]/15 border border-[#C89D3C]/30 text-[#C89D3C] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                A Celebration Venue in Hazara Town, Quetta
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#FDFBF7]">
                Make Your Special Moments <br />
                <span className="text-[#C89D3C]">Beautiful and Memorable.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#C7D4D0] max-w-2xl leading-relaxed">
                A welcoming venue for weddings, family celebrations, and special events. With capacity for 50 to 500 guests, backup power, and on-site parking.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={businessData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm tracking-wide shadow-lg hover:brightness-105 transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp
                </a>

                <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C89D3C] to-[#DFBA63] text-[#062A24] font-bold text-sm tracking-wide shadow-lg hover:brightness-110 transition-all">
                  View Packages <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#A8BBB5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C89D3C]" />
                  <span>50 to 500 guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C89D3C]" />
                  <span>Generator + UPS backup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C89D3C]" />
                  <span>Packages from PKR 50,000</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border-2 border-[#C89D3C]/40 shadow-2xl bg-[#09362e]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/stage-white.jpg"
                    alt="IFTIKHARI Marriage Hall Stage White Floral Decor"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 bg-[#041c18] border-t border-[#C89D3C]/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#C89D3C] uppercase tracking-wider font-semibold">Real Hall View</p>
                    <p className="text-sm font-serif text-white font-medium">Premium White Floral Bridal Stage</p>
                  </div>
                  <Link
                    href="/services"
                    className="text-xs text-[#C89D3C] flex items-center gap-1 hover:underline"
                  >
                    View Packages <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C89D3C]">
              Venue Highlights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#062A24] mt-2">
              A Venue for Every Celebration
            </h2>
            <p className="text-sm text-stone-600 mt-3">
              A thoughtfully arranged event space in Hazara Town, Quetta, for gathering with family and friends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#062A24] text-[#C89D3C] flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#062A24] mb-2">
                50 to 500 Guests
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                From intimate engagements and birthdays to larger weddings, the hall can be arranged for different guest counts.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#062A24] text-[#C89D3C] flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#062A24] mb-2">
                Generator + UPS Backup
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Generator and UPS backup are available to help keep your event running during power interruptions.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#062A24] text-[#C89D3C] flex items-center justify-center mb-5">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#062A24] mb-2">
                On-site Parking
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Parking is available for up to 10 cars and more than 100 motorcycles.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#062A24] text-[#C89D3C] flex items-center justify-center mb-5">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#062A24] mb-2">
                Flexible Catering Options
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Ask about in-house catering or arrange an outside caterer for your event.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-[#062A24] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C89D3C] font-semibold">
                Event Decor & Setups
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-[#FAF8F5]">
                Explore the Hall and Stage
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#B7C7C3] max-w-md mt-4 md:mt-0">
              Take a look at stage designs and event spaces at IFTIKHARI Marriage Hall.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl overflow-hidden border border-[#C89D3C]/30 bg-[#041c18] aspect-[4/3]">
              <Image
                src="/images/stage-white.jpg"
                alt="Classic White Stage with Royal Sofa"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">White Floral Stage Setup</h4>
                  <p className="text-xs text-[#C89D3C]">For weddings and Nikah</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-[#C89D3C]/30 bg-[#041c18] aspect-[4/3]">
              <Image
                src="/images/stage-glass-floor.jpg"
                alt="Mirrored Glass Runway and Stage"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">Glass Mirror Floor & Floral Arch</h4>
                  <p className="text-xs text-[#C89D3C]">Reflective stage runway</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-[#C89D3C]/30 bg-[#041c18] aspect-[4/3]">
              <Image
                src="/images/stage-arch.jpg"
                alt="Grand Arch Stage with Ambient Lighting"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">Triple Arch Stage & Warm Lanterns</h4>
                  <p className="text-xs text-[#C89D3C]">Warm, traditional styling</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C89D3C] hover:text-white transition-colors"
            >
              View the Full Decor Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C89D3C] font-semibold">
              Guest Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#062A24] mt-2">
              A Venue for Meaningful Gatherings
            </h2>
            <p className="text-sm text-stone-600 mt-3">
              Special celebrations and memorable moments at IFTIKHARI Marriage Hall.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "/images/testimonal (1).jpg",
                name: "Ibrahim",
                event: "Qadir Ibrahim Award Ceremony",
                quote: "The Qadir Ibrahim Award Ceremony at IFTIKHARI Marriage Hall was a memorable evening. The stage looked elegant, and the team helped everything run smoothly.",
              },
              {
                image: "/images/testimonal (2).jpg",
                name: "Sir Zafar Khan",
                event: "Marriage Celebration",
                quote: "We celebrated our marriage at IFTIKHARI Marriage Hall. The stage looked beautiful, and the staff made our family feel welcome throughout the event.",
              },
              {
                image: "/images/testimonal (3).jpg",
                name: "Syed Ahmed",
                event: "Family Celebration",
                quote: "We hosted a family celebration at IFTIKHARI Marriage Hall. The Hazara Town location was convenient, and the team helped us plan a comfortable gathering.",
              },
            ].map(({ image, name, event, quote }) => (
              <blockquote key={image} className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={image}
                    alt={`Portrait of ${name}`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#062A24]">{name}</p>
                    <p className="text-xs text-stone-500">{event}</p>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-[#C89D3C] mb-2" aria-hidden="true" />
                <p className="text-sm text-stone-700 leading-relaxed">“{quote}”</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C89D3C] font-semibold">
              Event Packages
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#062A24] mt-2">
              Packages for Your Celebration
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Explore the available package options and contact the team to confirm inclusions, pricing, and date availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessData.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 transition-all flex flex-col justify-between ${
                  pkg.popular
                    ? "bg-[#062A24] text-white border-2 border-[#C89D3C] shadow-xl relative scale-105 z-10"
                    : "bg-white text-[#062A24] border border-stone-200 shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C89D3C] text-[#062A24] font-bold text-[10px] uppercase tracking-widest">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <h3 className={`font-serif text-xl font-bold mb-1 ${pkg.popular ? "text-[#C89D3C]" : "text-[#062A24]"}`}>
                    {pkg.name}
                  </h3>
                  <div className="text-2xl sm:text-3xl font-extrabold my-4">
                    {pkg.price}
                  </div>
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

        </div>
      </section>

      <FAQSection />

    </div>
  );
}
