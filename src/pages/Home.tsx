/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Building, Bed, Utensils, ArrowRight, Sparkles, MapPin, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MatterportViewer from "../components/MatterportViewer";
import { useLanguage } from "../context/LanguageContext";

const GALLERY_IMAGES = [
  {
    url: "https://www.hotelwyndhambogota.com/wp-content/uploads/2021/05/IMG_2405-1024x674.jpg",
    titleEs: "Fachada & Arquitectura Exterior",
    titleEn: "Exterior Facade & Architecture",
    descEs: "Un imponente diseño contemporáneo en el sector más estratégico y empresarial de Bogotá.",
    descEn: "An impressive contemporary design in Bogota's most strategic business district."
  },
  {
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/868932157.jpg?k=cc8cfa216887b6d601b801fc49dfba136b3954e51db8ad1fb31867f837874a05&o=",
    titleEs: "Lobby Principal & Recepción",
    titleEn: "Main Lobby & Front Desk",
    descEs: "Espacios sofisticados y de gran altura para darle la bienvenida con nuestra calidez característica.",
    descEn: "Sophisticated double-height spaces welcoming you with our signature warmth."
  },
  {
    url: "https://www.hotelwyndhambogota.com/wp-content/uploads/2022/05/Suite-Presidencial.webp",
    titleEs: "Habitaciones & Suites de Lujo",
    titleEn: "Luxury Guest Rooms & Suites",
    descEs: "Ergonomía, insonorización de triple panel y colchones premium para un descanso reparador.",
    descEn: "Ergonomic designs, triple-pane soundproofing, and premium bedding for a restorative sleep."
  },
  {
    url: "https://www.hotelwyndhambogota.com/wp-content/uploads/2022/05/WYNDHAM-BOGOTA-PISO-EJECUTIVO-2-768x512.webp",
    titleEs: "Experiencia Culinaria Restaurante",
    titleEn: "Hotel Restaurant Dining",
    descEs: "Sinfonía culinaria que fusiona ingredientes frescos colombianos con técnicas gastronómicas modernas.",
    descEn: "A culinary journey combining fresh local Colombian ingredients with modern gastronomy."
  },
  {
    url: "https://www.hotelwyndhambogota.com/wp-content/uploads/2020/08/oie_251532606HmSMEK.jpg",
    titleEs: "Salones de Eventos & Convenciones",
    titleEn: "Events & Conventions Halls",
    descEs: "Infraestructura de nivel internacional equipada con la más alta tecnología audiovisual y layouts modulares.",
    descEn: "World-class event facilities featuring state-of-the-art audiovisual tech and customizable setups."
  }
];

export default function Home() {
  const [active3dUrl, setActive3dUrl] = useState<string | null>(null);
  const [active3dName, setActive3dName] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t, language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const mainCategories = [
    {
      id: "cat-venues",
      title: t("cat_venues_title"),
      desc: t("cat_venues_desc"),
      link: "/salones",
      icon: Building,
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      accent: "from-[#004B75]/90 to-[#003B5C]/95",
      badge: t("cat_venues_badge"),
      isNavigable: true
    },
    {
      id: "cat-rooms",
      title: t("cat_rooms_title"),
      desc: t("cat_rooms_desc"),
      icon: Bed,
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      accent: "from-slate-800/90 to-slate-950/95",
      badge: t("cat_rooms_badge"),
      isNavigable: false
    },
    {
      id: "cat-dining",
      title: t("cat_dining_title"),
      desc: t("cat_dining_desc"),
      icon: Utensils,
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      accent: "from-emerald-800/90 to-emerald-950/95",
      badge: t("cat_dining_badge"),
      isNavigable: false
    }
  ];

  const trigger3dTour = (url: string, name: string) => {
    setActive3dUrl(url);
    setActive3dName(name);
  };

  return (
    <div id="home-view" className="flex-1 flex flex-col bg-slate-50">
      {/* 1. HERO HEADER AREA with Wyndham bogota photo */}
      <header
        id="kiosk-hero"
        className="relative overflow-hidden bg-[#003B5C] py-16 px-6 md:px-8 text-white select-none border-b-4 border-[#1E88C8]"
      >
        {/* Background Image Accent Pattern */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=50"
            className="w-full h-full object-cover opacity-15 saturate-50"
            alt={t("bg_alt")}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C] via-[#003B5C]/90 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-900/40 border border-blue-700/30 px-3.5 py-1.5 font-sans text-xs font-bold tracking-wider text-blue-200 uppercase mb-5">
              <Sparkles className="h-4 w-4 text-[#1E88C8]" />
              {t("excellence")}
            </div>

            <h1 className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t("welcome")} <br className="sm:hidden" />
              <span className="text-white">Wyndham Bogotá</span>
            </h1>

            <p className="mt-4 font-sans text-base md:text-lg text-blue-100/90 font-medium leading-relaxed">
              {t("subtitle")}
            </p>

            {/* Quick contact and coordinate chips */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-sans text-blue-200">
              <div className="flex items-center gap-1.5 bg-blue-950/50 border border-blue-900/20 px-3 py-1.5 rounded-lg">
                <MapPin className="h-3.5 w-3.5 text-[#1E88C8]" />
                <span>{t("coordinates")}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-950/50 border border-blue-900/20 px-3 py-1.5 rounded-lg">
                <Check className="h-3.5 w-3.5 text-[#1E88C8]" />
                <span>{t("check_in_out")}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN GRID SECTIONS (large touchscreen bento blocks) */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-6 py-12 md:px-8">
        <div className="mb-8">
          <h2 className="font-sans text-xs font-extrabold tracking-widest text-[#004B75] uppercase mb-1">
            {t("dir_title")}
          </h2>
          <p className="font-sans text-xl font-bold text-gray-900">
            {t("dir_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {mainCategories.map((cat) => {
            const Icon = cat.icon;
            
            const cardContent = (
              <>
                {/* Background Image representing category with zoom effect on desktop hover */}
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient color overlay, inspired by luxury hotels */}
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent} mix-blend-multiply opacity-85 transition-opacity group-hover:opacity-90`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Card Content details */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 font-sans text-xs font-bold tracking-wide uppercase">
                      {cat.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans text-xl md:text-2xl font-bold">
                      {cat.title}
                    </h3>
                    
                    <p className="mt-2 font-sans text-xs md:text-sm text-gray-200 line-clamp-2 md:leading-relaxed p-0">
                      {cat.desc}
                    </p>

                    {cat.isNavigable ? (
                      <div className="mt-4 flex items-center gap-1.5 font-sans text-sm font-bold text-[#1E88C8]">
                        <span>{t("tap_enter")}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    ) : (
                      <div className="mt-4 flex items-center gap-1.5 font-sans text-xs font-bold text-gray-300">
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>{t("hotel_info_services")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            );

            if (cat.isNavigable && cat.link) {
              return (
                <Link
                  id={cat.id}
                  key={cat.id}
                  to={cat.link}
                  className="group relative h-72 overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-200 active:scale-98"
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                id={cat.id}
                key={cat.id}
                className="group relative h-72 overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* 3. SECCIÓN GALERÍA DE IMÁGENES AUTOMÁTICA DEL HOTEL (CADA 8 SEGUNDOS) */}
        <section id="hotel-gallery-slider" className="mt-14 relative select-none">
          <div className="relative overflow-hidden w-full h-[380px] md:h-[485px] rounded-3xl bg-[#001D2E] shadow-xl border border-gray-200/20">
            {/* The Image Carousel Layer (Smooth Crossfade with motion) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.10, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={GALLERY_IMAGES[currentImageIndex].url}
                  alt={language === "en" ? GALLERY_IMAGES[currentImageIndex].titleEn : GALLERY_IMAGES[currentImageIndex].titleEs}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Dark Overlay for pristine readability of descriptors */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/15 z-10 pointer-events-none" />

            {/* Manual Circle Buttons for Prev/Next Touch Inputs */}
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between items-center pointer-events-none z-30">
              <button
                id="btn-gallery-prev"
                onClick={handlePrevImage}
                className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white/90 active:scale-95 transition shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                id="btn-gallery-next"
                onClick={handleNextImage}
                className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white/90 active:scale-95 transition shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Gallery Info Panel Overlay */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between text-white z-20 pointer-events-none">
              {/* Top Row: Badge and Counters */}
              <div className="flex justify-between items-center w-full pointer-events-auto">
                <div className="flex items-center gap-2 rounded-full bg-black/45 backdrop-blur-md px-3.5 py-1.5 border border-white/10">
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span className="font-sans text-2xs md:text-xs font-black uppercase tracking-wider text-gray-100">
                    {language === "en" ? "Wyndham Bogotá Spaces" : "Espacios Wyndham Bogotá"}
                  </span>
                </div>
                <div className="font-mono text-2xs md:text-sm text-white bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 tracking-widest font-bold">
                  {currentImageIndex + 1} / {GALLERY_IMAGES.length}
                </div>
              </div>

              {/* Bottom Row: Text Captions and Slider Indicator Dots */}
              <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-5 mt-auto pointer-events-auto">
                <div className="max-w-2xl bg-black/20 backdrop-blur-xs p-4 rounded-2xl border border-white/5 md:bg-transparent md:border-none md:p-0">
                  <h3 className="font-sans text-xl md:text-3xl font-black text-white tracking-tight drop-shadow-md">
                    {language === "en" ? GALLERY_IMAGES[currentImageIndex].titleEn : GALLERY_IMAGES[currentImageIndex].titleEs}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-gray-200 mt-2 leading-relaxed drop-shadow-sm font-medium">
                    {language === "en" ? GALLERY_IMAGES[currentImageIndex].descEn : GALLERY_IMAGES[currentImageIndex].descEs}
                  </p>
                </div>
                
                {/* Visual Dot Indicators */}
                <div className="flex gap-2 justify-start md:justify-end items-center shrink-0">
                  {GALLERY_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "w-8 bg-amber-400" : "w-2.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* High-Craftsmanship Auto-Cycling Timeline Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/30 z-20">
              <motion.div
                key={currentImageIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
                className="h-full bg-amber-400"
              />
            </div>
          </div>
        </section>

        {/* 4. HOSPITALITY CERTIFIED SERVICES AT BOGOTA */}
        <section id="quality-commitments" className="mt-14 bg-gradient-to-r from-slate-100 to-blue-50 border border-blue-100/40 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="font-sans text-sm font-bold text-[#004B75] uppercase tracking-widest mb-1.5">
              {t("hotel_wyndham_bogota")}
            </h4>
            <p className="font-sans text-xs text-gray-600 leading-relaxed">
              {t("location_desc_hero")}
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <div className="bg-white border border-gray-200/50 px-4 py-3 rounded-xl text-center shadow-xs">
              <span className="block font-sans text-lg font-extrabold text-[#004B75]">{t("airport_dist")}</span>
              <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider">{t("airport_desc")}</span>
            </div>
            <div className="bg-white border border-gray-200/50 px-4 py-3 rounded-xl text-center shadow-xs">
              <span className="block font-sans text-lg font-extrabold text-[#004B75]">{t("star_rating")}</span>
              <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider">{t("star_desc")}</span>
            </div>
          </div>
        </section>
      </main>

      {/* Embedded Virtual Tour Iframe Viewer */}
      <AnimatePresence>
        {active3dUrl && (
          <MatterportViewer
            url={active3dUrl}
            venueName={active3dName}
            onClose={() => setActive3dUrl(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
