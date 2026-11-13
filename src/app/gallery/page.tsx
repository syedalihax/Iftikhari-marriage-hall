import type { Metadata } from "next";
import DecorGallery from "@/components/DecorGallery";

export const metadata: Metadata = {
  title: "Gallery & Decor | IFTIKHARI Marriage Hall Quetta",
  description:
    "Explore wedding stages, reception layouts, and event decor at IFTIKHARI Marriage Hall in Quetta.",
};

const decorItems = [
  {
    image: "/images/decor/decor (1).jpg",
    title: "Lavender Reception Setup",
    category: "Reception",
    description: "Lavender lighting, floral centerpieces, and a softly lit reception layout.",
  },
  {
    image: "/images/decor/decor (2).jpg",
    title: "Purple Floral Wedding Stage",
    category: "Wedding Stage",
    description: "A floral stage framed by rich purple lighting and a cloud-like aisle effect.",
  },
  {
    image: "/images/decor/decor (3).jpg",
    title: "Floral Birthday Celebration",
    category: "Birthday",
    description: "A flower-arch backdrop, warm lights, and a polished reflective floor for a birthday event.",
  },
  {
    image: "/images/decor/decor (4).jpg",
    title: "Mirror-Floor Wedding Stage",
    category: "Wedding Stage",
    description: "A bright floral stage paired with a glossy mirrored floor and soft ambient lighting.",
  },
  {
    image: "/images/decor/decor (5).jpg",
    title: "Pastel Draped Stage",
    category: "Wedding Stage",
    description: "Soft pink and blue draping, delicate floral arrangements, and a clean white stage.",
  },
  {
    image: "/images/decor/decor (6).jpg",
    title: "Classic White Floral Stage",
    category: "Wedding Stage",
    description: "A timeless white-on-white stage with layered flowers and crystal details.",
  },
  {
    image: "/images/decor/decor (7).jpg",
    title: "Winter-Inspired Stage",
    category: "Themed Decor",
    description: "Cool blue lighting and frosted branch details create a winter-inspired setting.",
  },
  {
    image: "/images/decor/decor (8).jpg",
    title: "Modern Geometric Stage",
    category: "Modern Decor",
    description: "A bold geometric backdrop with contrasting blue and red accent lighting.",
  },
  {
    image: "/images/decor/decor (9).jpg",
    title: "Golden Traditional Stage",
    category: "Traditional Decor",
    description: "Ornate golden panels, chandelier lighting, and a classic floral arrangement.",
  },
  {
    image: "/images/decor/decor (10).jpg",
    title: "Luxury Excellence Awards Stage",
    category: "Awards Ceremony",
    description: "A formal awards stage with a floral arch, warm lighting, and a dedicated presentation area.",
  },
  {
    image: "/images/decor/decor (11).jpg",
    title: "Colorful Mehndi Stage",
    category: "Mehndi",
    description: "A vibrant Mehndi setting with marigold garlands, colorful draping, and traditional seating.",
  },
  {
    image: "/images/decor/decor (12).jpg",
    title: "Golden Birthday Stage",
    category: "Birthday",
    description: "A warm birthday setup with a flower arch, glowing backdrop, and mirrored aisle.",
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#FAF8F5] pb-20">
      <section className="bg-[#062A24] text-white py-16 sm:py-20 border-b border-[#C89D3C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-[#C89D3C] font-semibold">
            Stage Designs & Event Decor
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#FAF8F5]">
            Gallery & Decor
          </h1>
          <p className="text-sm sm:text-base text-[#BFCEC9] mt-3 max-w-2xl mx-auto">
            Browse wedding stages, reception arrangements, and decor ideas for your event at IFTIKHARI Marriage Hall.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <DecorGallery items={decorItems} />
      </section>
    </div>
  );
}