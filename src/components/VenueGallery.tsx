/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface VenueGalleryProps {
  images: string[];
  title: string;
}

export default function VenueGallery({ images, title }: VenueGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const { t } = useLanguage();

  const viewNext = () => {
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  const viewPrev = () => {
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video w-full rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
        {t("no_images")}
      </div>
    );
  }

  return (
    <div id="venue-gallery-wrapper" className="flex flex-col gap-4 w-full">
      {/* Active large view */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900 border border-gray-100 shadow-lg group">
        <AnimatePresence mode="popLayout">
          <motion.img
            id={`gallery-active-image-${activeIdx}`}
            key={images[activeIdx]}
            src={images[activeIdx]}
            alt={`${title} - ${t("view")} ${activeIdx + 1}`}
            className="h-full w-full object-cover select-none"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Ambient overlay shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Caption */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-sans text-xs">
          {t("premium_images")} • {activeIdx + 1} {t("of")} {images.length}
        </div>

        {/* Touch nav arrows */}
        <div className="absolute inset-y-0 left-3 flex items-center">
          <button
            id="gallery-prev-btn"
            onClick={viewPrev}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-gray-800 shadow-md backdrop-blur-sm active:scale-90 select-none hover:bg-white"
            aria-label={t("prev_image")}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-3 flex items-center">
          <button
            id="gallery-next-btn"
            onClick={viewNext}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-gray-800 shadow-md backdrop-blur-sm active:scale-90 select-none hover:bg-white"
            aria-label={t("next_image")}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Thumbnails (Extra big targets for precise touchscreen tap) */}
      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-gray-200">
        {images.map((img, idx) => {
          const isSelected = idx === activeIdx;
          return (
            <button
              id={`gallery-thumbnail-btn-${idx}`}
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 transition-all active:scale-95 border-2 ${
                isSelected
                  ? "border-[#1E88C8] shadow-md ring-2 ring-blue-100"
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              <img
                src={img}
                alt={`${title} ${t("thumbnail")} ${idx + 1}`}
                className="h-full w-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-200 ${
                  isSelected ? "bg-black/0" : "bg-black/30 hover:bg-black/10"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
