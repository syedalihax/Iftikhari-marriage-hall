import {
  Check,
  Clock3,
  Sparkles,
  Utensils,
} from "lucide-react";
import { businessData, getWhatsAppUrl } from "@/lib/seo-data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function EventPackages() {
  return (
    <section id="packages" className="bg-[#F9F8F4] py-16 sm:py-20" aria-labelledby="packages-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C59B27] font-semibold">
            EVENT PACKAGES
          </span>
          <h2 id="packages-title" className="font-serif text-3xl sm:text-4xl font-bold text-[#0D281E] mt-2">
            Packages for Your Celebration
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            For events with 300–500 guests. Choose a package for one, two, or three events.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-6 items-stretch">
          {businessData.packages.map((pkg) => (
            <article
              key={pkg.eventCount}
              className={`relative flex h-full flex-col rounded-2xl border p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:p-7 ${
                pkg.bestValue
                  ? "border-[#0D281E] bg-[#0D281E] text-white shadow-lg"
                  : pkg.popular
                    ? "border-2 border-[#C59B27] bg-white text-[#0D281E] shadow-lg md:-translate-y-1 md:z-10"
                    : "border-stone-200 bg-white text-[#0D281E]"
              }`}
            >
              {(pkg.popular || pkg.bestValue) && (
                <span className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm ${pkg.bestValue ? "bg-[#D4AF37] text-[#0D281E]" : "bg-[#D4AF37] text-[#0D281E]"}`}>
                  {pkg.popular ? "Most Popular" : "Best Value"}
                </span>
              )}

              <div className="pt-1">
                <p className={`text-[11px] font-bold uppercase tracking-widest ${pkg.bestValue ? "text-[#D4AF37]" : "text-[#C59B27]"}`}>
                  {pkg.eventCount} {pkg.eventCount === 1 ? "Event" : "Events"}
                </p>
                <h3 className={`mt-2 font-serif text-xl font-bold sm:text-2xl ${pkg.bestValue ? "text-white" : "text-[#0D281E]"}`}>
                  {pkg.name}
                </h3>
                <p className={`mt-2 min-h-10 text-sm leading-relaxed ${pkg.bestValue ? "text-white/75" : "text-stone-600"}`}>
                  {pkg.subtitle}
                </p>
              </div>

              <div className="mt-5 flex min-h-6 items-center gap-2">
                {pkg.originalPrice && (
                  <>
                    <span className={`text-sm line-through ${pkg.bestValue ? "text-white/55" : "text-stone-500"}`}>
                      {pkg.originalPrice}
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide ${pkg.bestValue ? "bg-[#D4AF37]/20 text-[#F0D36B]" : "bg-[#D4AF37]/15 text-[#8A6812]"}`}>
                      {pkg.discount}
                    </span>
                  </>
                )}
              </div>

              <div className="mt-1">
                <p className={`text-3xl font-extrabold leading-tight sm:text-4xl ${pkg.bestValue ? "text-white" : "text-[#0D281E]"}`}>
                  {pkg.totalPrice}
                </p>
                <p className={`mt-2 text-sm ${pkg.bestValue ? "text-white/80" : "text-stone-600"}`}>
                  {pkg.perEventPrice} per event{pkg.savings ? ` (${pkg.savings})` : ""}
                </p>
              </div>

              <a
                href={getWhatsAppUrl(`Hello, I would like to book the ${pkg.name} package (${pkg.totalPrice}, ${pkg.perEventPrice} per event) at Iftikhari Marriage Hall.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg px-4 py-3 text-center text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] ${pkg.bestValue || pkg.popular ? "bg-[#D4AF37] text-[#0D281E] hover:bg-[#e1c65b]" : "border border-[#0D281E] text-[#0D281E] hover:bg-[#0D281E] hover:text-white"}`}
              >
                {pkg.bookingLabel}
              </a>

              <div className={`my-6 border-t ${pkg.bestValue ? "border-white/20" : "border-stone-200"}`} />

              <ul className="flex-1 space-y-3">
                {pkg.eventCount > 1 && (
                  <li className={`flex items-start gap-2.5 text-sm font-bold ${pkg.bestValue ? "text-white" : "text-[#0D281E]"}`}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C59B27]" aria-hidden="true" />
                    Includes all single-event facilities
                  </li>
                )}
                {businessData.packageFacilities.map((facility) => (
                  <li key={facility} className={`flex items-start gap-2.5 text-sm leading-relaxed ${pkg.bestValue ? "text-white/90" : "text-stone-700"}`}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C59B27]" aria-hidden="true" />
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-5 text-xs leading-relaxed ${pkg.bestValue ? "text-white/70" : "text-stone-500"}`}>
                Catering is arranged separately. Stage decoration changes or redesign are available at additional charges.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-[#0D281E]/15 bg-white shadow-sm md:grid-cols-3 md:divide-x md:divide-y-0 divide-y divide-[#0D281E]/10">
          <section className="p-6 sm:p-7" aria-labelledby="timings-title">
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 shrink-0 text-[#C59B27]" aria-hidden="true" />
              <h3 id="timings-title" className="font-serif text-xl font-bold text-[#0D281E]">Event Timings</h3>
            </div>
            <dl className="mt-5 space-y-3">
              {businessData.eventSlots.map((slot) => (
                <div key={slot.name} className="text-sm">
                  <dt className="inline font-semibold text-[#0D281E]">{slot.name === "Lunch Event" ? "Lunch Slot: " : "Night Slot: "}</dt>
                  <dd className="inline text-stone-600">{slot.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs italic text-stone-500">Both slots are available with any package.</p>
          </section>

          <section className="p-6 sm:p-7" aria-labelledby="catering-title">
            <div className="flex items-center gap-3">
              <Utensils className="h-5 w-5 shrink-0 text-[#C59B27]" aria-hidden="true" />
              <h3 id="catering-title" className="font-serif text-xl font-bold text-[#0D281E]">Flexible Catering</h3>
            </div>
            <dl className="mt-5 space-y-3">
              {businessData.cateringOptions.map((option) => (
                <div key={option.name} className="text-sm leading-relaxed">
                  <dt className="inline font-semibold text-[#0D281E]">{option.name}: </dt>
                  <dd className="inline text-stone-600">{option.description}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs italic text-stone-500">Catering charges are separate from hall package prices.</p>
          </section>

          <section className="p-6 sm:p-7" aria-labelledby="addons-title">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 shrink-0 text-[#C59B27]" aria-hidden="true" />
              <h3 id="addons-title" className="font-serif text-xl font-bold text-[#0D281E]">Optional Add-ons</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {businessData.optionalAddOns.map((addOn) => (
                <li key={addOn} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#C59B27]" aria-hidden="true" />
                  {addOn}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs italic text-stone-500">Available at additional charges.</p>
          </section>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0D281E] px-6 py-6 text-center sm:flex-row sm:text-left sm:px-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-white">Plan your event with us</h3>
            <p className="mt-1 text-sm text-white/75">Ask about package bookings and date availability.</p>
          </div>
          <a
            href={getWhatsAppUrl("Hello, I would like to enquire about booking an event package at Iftikhari Marriage Hall.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#0D281E] transition-colors hover:bg-[#e1c65b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
