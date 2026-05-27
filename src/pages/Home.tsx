/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Building, Bed, Utensils, Award, ArrowRight, Eye, Sparkles, MapPin, Check, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SALONES_DATA } from "../data/mockData";
import MatterportViewer from "../components/MatterportViewer";

export default function Home() {
  const [active3dUrl, setActive3dUrl] = useState<string | null>(null);
  const [active3dName, setActive3dName] = useState<string>("");

  const mainCategories = [
    {
      id: "cat-venues",
      title: "Salones y Centros de Negocios",
      desc: "Espacios corporativos premium equipados con la más alta tecnología, acústica controlada y configuraciones flexibles para banquetes o conferencias empresariales.",
      link: "/salones",
      icon: Building,
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      accent: "from-[#004B75]/90 to-[#003B5C]/95",
      badge: "4 Salones Flexibles",
      isNavigable: true
    },
    {
      id: "cat-rooms",
      title: "Habitaciones & Suites Ejecutivas",
      desc: "Espacios de diseño moderno pensados para el descanso del viajero de negocios. conectividad WiFi de alta velocidad y escritorio de trabajo ergonómico.",
      icon: Bed,
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      accent: "from-slate-800/90 to-slate-950/95",
      badge: "Información General",
      isNavigable: false
    },
    {
      id: "cat-dining",
      title: "Gourmet, Café & Lobby Bar",
      desc: "Servicio gastronómico completo. Nuestro Restaurante ofrece un exquisito desayuno buffet de cortesía y cenas mediterráneas con acentos criollos colombianos elaborados con ingredientes autóctonos.",
      icon: Utensils,
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      accent: "from-emerald-800/90 to-emerald-950/95",
      badge: "Información Gastronómica",
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
            alt="Wyndham Bogotá background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C] via-[#003B5C]/90 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-900/40 border border-blue-700/30 px-3.5 py-1.5 font-sans text-xs font-bold tracking-wider text-blue-200 uppercase mb-5">
              <Sparkles className="h-4 w-4 text-[#1E88C8]" />
              EXCELENCIA CINCO ESTRELLAS
            </div>

            <h1 className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Bienvenido a <br className="sm:hidden" />
              <span className="text-white">Wyndham Bogotá</span>
            </h1>

            <p className="mt-4 font-sans text-base md:text-lg text-blue-100/90 font-medium leading-relaxed">
              Explore de forma táctil nuestras instalaciones, conozca las salas de convención, 
              suites sofisticadas y sumérjase en nuestros modernos{" "}
              <span className="text-[#1E88C8] font-bold">recorridos 3D escaneados</span> con Matterport.
            </p>

            {/* Quick contact and coordinate chips */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-sans text-blue-200">
              <div className="flex items-center gap-1.5 bg-blue-950/50 border border-blue-900/20 px-3 py-1.5 rounded-lg">
                <MapPin className="h-3.5 w-3.5 text-[#1E88C8]" />
                <span>Bogotá D.C. • Ciudad Salitre</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-950/50 border border-blue-900/20 px-3 py-1.5 rounded-lg">
                <Check className="h-3.5 w-3.5 text-[#1E88C8]" />
                <span>Check-In: 3:00 PM • Check-Out: 12:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN GRID SECTIONS (large touchscreen bento blocks) */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-6 py-12 md:px-8">
        <div className="mb-8">
          <h2 className="font-sans text-xs font-extrabold tracking-widest text-[#004B75] uppercase mb-1">
            Directorio Principal de Espacios
          </h2>
          <p className="font-sans text-xl font-bold text-gray-900">
            Toca una de las siguientes categorías para ver más detalles
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
                        <span>Toca para ingresar</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    ) : (
                      <div className="mt-4 flex items-center gap-1.5 font-sans text-xs font-bold text-gray-300">
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Servicio Informativo del Hotel</span>
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

        {/* 3. MATTERPORT DIRECT INTEGRATION BAR */}
        <section id="matterport-quick-access" className="mt-14">
          <div className="mb-6 flex flex-col sm:flex-row justify-between sm:items-end gap-3">
            <div>
              <span className="font-sans text-xs font-extrabold tracking-widest text-[#1E88C8] uppercase">
                Módulos Inmersivos de Escaneo 3D
              </span>
              <h3 className="font-sans text-2xl font-bold text-gray-900 mt-1">
                Acceso Inmediato a Recorridos Virtuales
              </h3>
            </div>
            
            <Link
              id="view-all-salones-shortcut"
              to="/salones"
              className="flex items-center gap-1.5 text-sm font-bold text-[#004B75] hover:underline"
            >
              Ver capacidades de montaje
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SALONES_DATA.map((venue) => (
              <div
                id={`matterport-shortcut-${venue.id}`}
                key={venue.id}
                onClick={() => trigger3dTour(venue.matterportUrl, venue.name)}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white border border-gray-150 shadow-sm transition hover:shadow-md hover:border-gray-200 p-4 active:scale-97 flex flex-col justify-between"
              >
                <div className="flex items-start gap-3.5">
                  <div className="relative h-15 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-sans text-xs font-extrabold text-[#003B5C] uppercase tracking-wider line-clamp-1">
                      {venue.name}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-500 mt-0.5">
                      {venue.floor} • Cap. {venue.capacity} Pers.
                    </p>
                    <span className="inline-block mt-2 font-mono text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded uppercase font-semibold">
                      Recorrido 3D Matterport
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between font-sans text-xs font-bold text-[#004B75]">
                  <span>Ver Recorrido</span>
                  <div className="h-6 w-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#004B75] group-hover:text-white transition">
                    <Eye className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. HOSPITALITY CERTIFIED SERVICES AT BOGOTA */}
        <section id="quality-commitments" className="mt-14 bg-gradient-to-r from-slate-100 to-blue-50 border border-blue-100/40 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="font-sans text-sm font-bold text-[#004B75] uppercase tracking-widest mb-1.5">
              Hotel Wyndham Bogotá
            </h4>
            <p className="font-sans text-xs text-gray-600 leading-relaxed">
              Ubicado estratégicamente sobre la Avenida La Esperanza, Wyndham Bogotá se establece como el hotel idóneo para convenciones, a sólo pasos de la Fiscalía de la Nación, la Embajada de los Estados Unidos y Corferias. Nuestra infraestructura está plenamente adaptada para touch-exploration e itinerarios premium.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <div className="bg-white border border-gray-200/50 px-4 py-3 rounded-xl text-center shadow-xs">
              <span className="block font-sans text-lg font-extrabold text-[#004B75]">12 Min</span>
              <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider">De Aeropuerto El Dorado</span>
            </div>
            <div className="bg-white border border-gray-200/50 px-4 py-3 rounded-xl text-center shadow-xs">
              <span className="block font-sans text-lg font-extrabold text-[#004B75]">5 Estrellas</span>
              <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider">Garantía Wyndham</span>
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
