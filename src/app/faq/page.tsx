import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { businessData } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "FAQs | IFTIKHARI Marriage Hall Quetta",
  description:
    "Frequently asked questions about IFTIKHARI Marriage Hall in Quetta, including booking inquiries, parking, backup power, and packages.",
};

export default function FAQPage() {
  return (
    <div>
      <JsonLd type="faq" />
      <FAQSection />

      <section className="bg-[#FAF8F5] pb-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#062A24]">
              Have Another Question?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 mb-6">
              Contact the team for more information about the venue or your event.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
