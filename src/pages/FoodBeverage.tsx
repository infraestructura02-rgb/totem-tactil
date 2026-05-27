/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, ChefHat, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { DINING_DATA } from "../data/mockData";

export default function FoodBeverage() {
  return (
    <div id="dining-showcase-view" className="flex-1 bg-slate-50 py-10 select-none">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        
        {/* Header summary */}
        <div className="mb-10 text-left">
          <span className="font-sans text-xs font-bold tracking-widest text-emerald-700 uppercase block mb-1">
            Placeres Culinarios Wyndham
          </span>
          <h1 className="font-sans text-3xl font-extrabold text-[#003B5C] tracking-tight">
            Gourmet, Café & Mixología
          </h1>
          <p className="font-sans text-sm text-gray-500 mt-1 max-w-2xl">
            Sabor andino combinado con tendencias mundiales. Desde banquetes suntuosos, almuerzos de negocios rápidos e informales, hasta cocteles premium creados por reconocidos baristas y mixólogos locales.
          </p>
        </div>

        {/* Dining catalog entries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {DINING_DATA.map((venue) => (
            <div
              id={`dining-card-${venue.id}`}
              key={venue.id}
              className="flex flex-col bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
            >
              {/* Picture view */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Operating schedule label */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white font-sans text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-amber-400" />
                  <span>{venue.hours}</span>
                </div>
              </div>

              {/* Data Deck */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <ChefHat className="h-4 w-4" />
                    <span>{venue.cuisine}</span>
                  </div>

                  <h2 className="font-sans text-2xl font-extrabold text-[#003B5C] tracking-tight mt-1">
                    {venue.name}
                  </h2>

                  <p className="font-sans text-xs text-gray-600 mt-3 leading-relaxed text-justify">
                    {venue.description}
                  </p>

                  {/* Highlights listing */}
                  <div className="mt-6">
                    <span className="font-sans text-[10px] font-extrabold text-blue-900 uppercase tracking-widest block mb-3">
                      Características Especiales:
                    </span>
                    <div className="space-y-2">
                      {venue.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="h-4.5 w-4.5 text-[#1E88C8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Signature Plates / Drinks menu spotlights */}
                  <div className="mt-6 pt-5 border-t border-gray-100 bg-gray-50/60 p-4.5 rounded-2xl">
                    <div className="flex items-center gap-1.5 font-sans text-[10px] font-extrabold text-[#004B75] uppercase tracking-wider mb-3">
                      <Sparkles className="h-4 w-4 text-amber-500" />
                      <span>Recomendaciones del Chef & Platillos Insignia</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {venue.menuHighlights.map((plate, index) => (
                        <div
                          key={index}
                          className="font-sans text-xs text-gray-800 flex items-start gap-2 border-b border-gray-250/20 pb-2 last:border-0 last:pb-0"
                        >
                          <span className="font-mono text-[10px] font-bold text-gray-400 mt-0.5">
                            0{index + 1}
                          </span>
                          <span className="font-medium text-left leading-normal">{plate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                  <span>Wyndham Bogotá Gourmet</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-red-500" />
                    <span>Nivel Central</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
