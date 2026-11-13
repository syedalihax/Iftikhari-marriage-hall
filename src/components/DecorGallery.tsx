"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

type DecorItem = {
  image: string;
  title: string;
  category: string;
  description: string;
};

export default function DecorGallery({ items }: { items: DecorItem[] }) {
  const [selectedItem, setSelectedItem] = useState<DecorItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedItem) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  const closeViewer = () => {
    setSelectedItem(null);
    triggerButtonRef.current?.focus();
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.image} className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
            <button
              type="button"
              aria-label={`View ${item.title} full screen`}
              title="View full screen"
              onClick={(event) => {
                triggerButtonRef.current = event.currentTarget;
                setSelectedItem(item);
              }}
              className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C89D3C]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#062A24] shadow-sm">
                <ZoomIn className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            <div className="p-5">
              <p className="text-[11px] uppercase tracking-widest text-[#A77C23] font-semibold">
                {item.category}
              </p>
              <h2 className="font-serif text-xl font-bold text-[#062A24] mt-1">
                {item.title}
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mt-2">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeViewer();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close image viewer"
            onClick={closeViewer}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C89D3C] sm:right-6 sm:top-6"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12 text-center font-medium text-white sm:pb-6">
              {selectedItem.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
