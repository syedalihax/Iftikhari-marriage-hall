import Link from "next/link";
import { businessData } from "@/lib/seo-data";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Facebook, Instagram, Phone, MapPin, Clock, ShieldCheck, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#031713] text-[#FAF8F5] border-t border-[#C89D3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <div>
              <span className="block font-serif text-xl font-bold tracking-wider text-[#FDFBF7]">
                IFTIKHARI
              </span>
              <span className="block text-sm tracking-widest text-[#C89D3C] uppercase">
                Marriage Hall
              </span>
            </div>
            <p className="text-sm text-[#B4C2BE] leading-relaxed">
              A welcoming marriage and event venue in Hazara Town, Quetta, for weddings, family celebrations, and functions for 300 to 500 guests.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#062A24] border border-[#C89D3C]/30 flex items-center justify-center text-[#C89D3C] hover:bg-[#C89D3C] hover:text-[#062A24] transition"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={businessData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#062A24] border border-[#C89D3C]/30 flex items-center justify-center text-[#C89D3C] hover:bg-[#C89D3C] hover:text-[#062A24] transition"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-[#FDFBF7] tracking-wider uppercase mb-4 border-l-2 border-[#C89D3C] pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-[#B4C2BE]">
              <li><Link href="/" className="hover:text-[#C89D3C] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#C89D3C] transition">About IFTIKHARI Marriage Hall</Link></li>
              <li><Link href="/services" className="hover:text-[#C89D3C] transition">Services & Packages</Link></li>
              <li><Link href="/gallery" className="hover:text-[#C89D3C] transition">Gallery & Decor</Link></li>
              <li><Link href="/faq" className="hover:text-[#C89D3C] transition">Frequently Asked Questions</Link></li>
              <li><Link href="/contact" className="hover:text-[#C89D3C] transition">Contact & Location</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-[#FDFBF7] tracking-wider uppercase mb-4 border-l-2 border-[#C89D3C] pl-2">
              Hall Highlights
            </h3>
            <ul className="space-y-3 text-xs text-[#B4C2BE]">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C89D3C] shrink-0 mt-0.5" />
                <span>Capacity for 300 to 500 guests per function</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-[#C89D3C] shrink-0 mt-0.5" />
                <span>Dual backup with generator and UPS</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C89D3C] shrink-0 mt-0.5" />
                <span>Parking for up to 10 cars and up to 100 motorcycles</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C89D3C] shrink-0 mt-0.5" />
                <span>Outside catering is welcome</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-[#FDFBF7] tracking-wider uppercase mb-4 border-l-2 border-[#C89D3C] pl-2">
              Contact & Bookings
            </h3>
            <div className="space-y-3 text-sm text-[#B4C2BE]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89D3C] shrink-0 mt-1" />
                <p className="text-xs leading-relaxed">
                  Near Ameeri Taj Mahal Marriage Hall, Hazara Town, Quetta, Pakistan.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89D3C] shrink-0" />
                <a href={`tel:${businessData.phone}`} className="text-xs hover:text-[#C89D3C]">
                  {businessData.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={businessData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-[#25D366]"
                >
                  Direct WhatsApp Chat
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C89D3C] shrink-0" />
                <span className="text-xs">Office Timings: 10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A9C96] gap-4">
          <p>© {new Date().getFullYear()} IFTIKHARI Marriage Hall, Quetta. All Rights Reserved.</p>
          <a
            href="https://syedalihax.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center sm:text-right hover:text-[#C89D3C] hover:underline cursor-pointer transition-colors"
          >
            Designed by SyedAliHax
          </a>
        </div>
      </div>
    </footer>
  );
}
