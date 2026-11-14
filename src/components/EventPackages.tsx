import {
  CheckCircle2,
  Clock3,
  Sparkles,
  Utensils,
} from "lucide-react";
import { businessData, getWhatsAppUrl } from "@/lib/seo-data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function EventPackages() {
  return (
    <section id="packages" className="bg-[#FAF8F5] py-16 sm:py-20" aria-labelledby="packages-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C89D3C] font-semibold">
            Event Packages
          </span>
          <h2 id="packages-title" className="font-serif text-3xl sm:text-4xl font-bold text-[#062A24] mt-2">
            Packages for Your Celebration
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            For functions with 300–500 guests. Choose one, two, or three functions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {businessData.packages.map((pkg) => (
            <article
              key={pkg.functions}
              className={`relative flex flex-col rounded-xl border p-6 sm:p-7 ${
                pkg.bestValue
                  ? "border-[#C89D3C] bg-[#062A24] text-white shadow-lg"
                  : "border-stone-200 bg-white text-[#062A24] shadow-sm"
              }`}
            >
              {pkg.bestValue && (
                <span className="absolute right-4 top-4 rounded-full bg-[#C89D3C] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#062A24]">
                  Best Value
                </span>
              )}
              <p className={`text-xs font-semibold uppercase tracking-wider ${pkg.bestValue ? "text-[#C89D3C]" : "text-stone-500"}`}>
                {pkg.functions} {pkg.functions === 1 ? "function" : "functions"}
              </p>
              <h3 className={`font-serif text-xl sm:text-2xl font-bold mt-2 ${pkg.bestValue ? "text-white" : "text-[#062A24]"}`}>
                {pkg.name}
              </h3>
              <div className={`mt-6 border-t pt-5 ${pkg.bestValue ? "border-white/15" : "border-stone-200"}`}>
                <p className={`text-xs ${pkg.bestValue ? "text-[#BFCEC9]" : "text-stone-500"}`}>
                  Total package price
                </p>
                <p className="mt-1 text-3xl font-extrabold">{pkg.totalPrice}</p>
                <p className={`mt-4 text-sm ${pkg.bestValue ? "text-[#D9E3E0]" : "text-stone-600"}`}>
                  {pkg.perFunctionPrice} <span className="text-xs">per function</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14 border-y border-stone-200 py-10 sm:py-12" aria-labelledby="included-title">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C89D3C] font-semibold">Included</span>
              <h3 id="included-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#062A24] mt-2">
                Facilities in every package
              </h3>
              <p className="text-sm leading-relaxed text-stone-600 mt-3">
                Every booking includes the existing standard stage setup. Changes, customization, or redesign of the stage decoration are available at additional charges.
              </p>
            </div>
            <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {businessData.packageFacilities.map((facility) => (
                <li key={facility} className="flex items-start gap-3 text-sm text-stone-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C89D3C]" aria-hidden="true" />
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="grid gap-10 py-10 sm:py-12 lg:grid-cols-2 lg:gap-14">
          <section aria-labelledby="timings-title">
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#C89D3C]" aria-hidden="true" />
              <div>
                <h3 id="timings-title" className="font-serif text-2xl font-bold text-[#062A24]">Choose your function time</h3>
                <p className="mt-2 text-sm text-stone-600">Both time slots are available with any package.</p>
              </div>
            </div>
            <dl className="mt-6 divide-y divide-stone-200 border-y border-stone-200">
              {businessData.functionSlots.map((slot) => (
                <div key={slot.name} className="flex flex-wrap items-center justify-between gap-2 py-4">
                  <dt className="text-sm font-semibold text-[#062A24]">{slot.name}</dt>
                  <dd className="text-sm text-stone-600">{slot.time}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="catering-title">
            <div className="flex items-start gap-3">
              <Utensils className="mt-1 h-5 w-5 shrink-0 text-[#C89D3C]" aria-hidden="true" />
              <div>
                <h3 id="catering-title" className="font-serif text-2xl font-bold text-[#062A24]">Flexible catering</h3>
                <p className="mt-2 text-sm text-stone-600">Catering is not included in package prices. Choose either option:</p>
              </div>
            </div>
            <dl className="mt-6 divide-y divide-stone-200 border-y border-stone-200">
              {businessData.cateringOptions.map((option) => (
                <div key={option.name} className="py-4">
                  <dt className="text-sm font-semibold text-[#062A24]">{option.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-stone-600">{option.description}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <section className="border-t border-stone-200 pt-8" aria-labelledby="addons-title">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-[#C89D3C]" aria-hidden="true" />
              <div>
                <h3 id="addons-title" className="font-serif text-2xl font-bold text-[#062A24]">Optional Add-ons</h3>
                <p className="mt-2 text-sm text-stone-600">Available at additional charges; not included in standard packages.</p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {businessData.optionalAddOns.map((addOn) => (
                <li key={addOn} className="flex items-center gap-2 text-sm font-medium text-[#062A24]">
                  <Sparkles className="h-4 w-4 text-[#C89D3C]" aria-hidden="true" />
                  {addOn}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-xl bg-[#062A24] px-6 py-6 text-center sm:flex-row sm:text-left sm:px-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-white">Plan your event with us</h3>
            <p className="mt-1 text-sm text-[#BFCEC9]">Ask about package bookings and date availability.</p>
          </div>
          <a
            href={getWhatsAppUrl("Hello, I would like to enquire about booking an event package at Iftikhari Marriage Hall.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-[#C89D3C] px-5 py-3 text-sm font-semibold text-[#062A24] transition-colors hover:bg-[#d6ad56] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}