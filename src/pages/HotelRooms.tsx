/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Bed, Users, Minimize2, Check, Sparkles } from "lucide-react";
import { ROOMS_DATA } from "../data/mockData";
import { HotelRoom } from "../types";

export default function HotelRooms() {
  const [selectedRoom, setSelectedRoom] = useState<HotelRoom | null>(null);

  return (
    <div id="rooms-catalog-view" className="flex-1 bg-slate-50 py-10 select-none">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        
        {/* Header information */}
        <div className="mb-10 text-left">
          <span className="font-sans text-xs font-bold tracking-widest text-[#004B75] uppercase block mb-1">
            Hospedaje & Confort Cinco Estrellas
          </span>
          <h1 className="font-sans text-3xl font-extrabold text-[#003B5C] tracking-tight">
            Habitaciones & Suites Ejecutivas
          </h1>
          <p className="font-sans text-sm text-gray-500 mt-1 max-w-2xl">
            Creadas bajo un concepto moderno, con ventanales insonorizados, colchones de diseñador para un descanso majestuoso, y escritorios eficientes para trabajar comfortablemente en Bogotá.
          </p>
        </div>

        {/* Rooms lists card style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room) => (
            <div
              id={`room-card-${room.id}`}
              key={room.id}
              className="group flex flex-col bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
            >
              {/* Photo placeholder with Zoom transition */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                
                {/* Bed Type tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#003B5C] font-sans text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs">
                  {room.bedType.split(" Serta")[0]}
                </div>
              </div>

              {/* Body summary */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="font-sans text-lg font-bold text-gray-900 group-hover:text-[#004B75] transition">
                      {room.name}
                    </h2>
                    <span className="font-mono text-xs font-bold text-[#1E88C8] bg-blue-50 px-2 py-1 rounded">
                      {room.size}
                    </span>
                  </div>

                  <p className="mt-2 font-sans text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Highlights section */}
                  <div className="mt-4 pt-4 border-t border-gray-150 space-y-2">
                    {room.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span className="font-sans font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Touch actions button */}
                <div className="mt-6">
                  <button
                    id={`btn-explore-room-details-${room.id}`}
                    onClick={() => setSelectedRoom(room)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#004B75] py-3.5 font-sans text-xs font-bold transition active:scale-95 border border-gray-200"
                  >
                    <Sparkles className="h-4 w-4 text-[#1E88C8]" />
                    Conocer Amenidades & Galería
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Details Touch Modal Overlay */}
      {selectedRoom && (
        <div
          id="room-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 md:p-6"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            id="room-modal-container"
            className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white text-left shadow-2xl border border-gray-100 flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image */}
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:h-auto overflow-hidden bg-gray-150 relative">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white md:hidden">
                <span className="font-mono text-xs font-bold text-[#1E88C8]">{selectedRoom.size}</span>
                <h3 className="font-sans text-lg font-bold">{selectedRoom.name}</h3>
              </div>
            </div>

            {/* Modal Content specs */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between max-h-[90vh] overflow-y-auto">
              <div>
                <div className="hidden md:flex justify-between items-start mb-2">
                  <span className="font-mono text-xs font-extrabold text-[#1E88C8] bg-blue-50 px-2 py-1 rounded">
                    {selectedRoom.size}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>Capacidad: {selectedRoom.capacity} adultos</span>
                  </div>
                </div>

                <h2 className="hidden md:block font-sans text-2xl font-black text-[#003B5C] tracking-tight">
                  {selectedRoom.name}
                </h2>

                <p className="font-sans text-xs text-gray-600 mt-2 leading-relaxed">
                  {selectedRoom.description}
                </p>

                {/* Full amenities lists */}
                <div className="mt-5">
                  <span className="font-sans text-[10px] font-bold text-[#004B75] uppercase tracking-wider block mb-2.5">
                    Equipamiento de Lujo de la Habitación:
                  </span>
                  
                  <div className="grid grid-cols-1 gap-2 border-t border-gray-100 pt-2.5">
                    {selectedRoom.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-start gap-2 font-sans text-xs text-gray-700">
                        <Check className="h-4 w-4 text-[#1E88C8] shrink-0 mt-0.5" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-8">
                <button
                  id="btn-close-room-modal"
                  onClick={() => setSelectedRoom(null)}
                  className="w-full rounded-xl bg-[#004B75] hover:bg-[#003B5C] text-white py-3 font-sans text-xs font-semibold tracking-wider uppercase transition active:scale-95"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
