/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    home: "Inicio",
    venues: "Salones & Eventos",
    all: "Todos",
    
    // Hero / Header
    excellence: "EXCELENCIA CINCO ESTRELLAS",
    welcome: "Bienvenido a",
    subtitle: "Explore de forma táctil nuestras instalaciones, conozca las salas de convención, suites sofisticadas y sumérjase en nuestros modernos recorridos 3D escaneados con Matterport.",
    bg_alt: "Fondo de Wyndham Bogotá",
    coordinates: "Bogotá D.C. • Ciudad Salitre",
    check_in_out: "Check-In: 3:00 PM • Check-Out: 12:00 PM",
    
    // Directory / Search
    dir_title: "Directorio Principal de Espacios",
    dir_desc: "Toca una de las siguientes categorías para ver más detalles",
    tap_enter: "Toca para ingresar",
    hotel_info_services: "Servicio Informativo del Hotel",
    
    // Categories
    cat_venues_title: "Salones y Centros de Negocios",
    cat_venues_desc: "Espacios corporativos premium equipados con la más alta tecnología, acústica controlada y configuraciones flexibles para banquetes o conferencias empresariales.",
    cat_venues_badge: "11 Salones Flexibles",
    
    cat_rooms_title: "Habitaciones & Suites Ejecutivas",
    cat_rooms_desc: "Espacios de diseño moderno pensados para el descanso del viajero de negocios. conectividad WiFi de alta velocidad y escritorio de trabajo ergonómico.",
    cat_rooms_badge: "Información General",
    
    cat_dining_title: "Gourmet, Café & Lobby Bar",
    cat_dining_desc: "Servicio gastronómico completo. Nuestro Restaurante ofrece un exquisito desayuno buffet de cortesía y cenas mediterráneas con acentos criollos colombianos elaborados con ingredientes autóctonos.",
    cat_dining_badge: "Información Gastronómica",
    
    // Matterport Home
    matterport_heading: "Módulos Inmersivos de Escaneo 3D",
    matterport_title: "Acceso Inmediato a Recorridos Virtuales",
    view_setups_link: "Ver capacidades de montaje",
    ver_recorrido: "Ver Recorrido",
    pers: "Pers.",
    cap_short: "Cap.",
    recorrido_3d: "Recorrido 3D Matterport",
    
    // Commitments / Placement Info
    hotel_wyndham_bogota: "Hotel Wyndham Bogotá",
    location_desc_hero: "Ubicado estratégicamente sobre la Avenida La Esperanza, Wyndham Bogotá se establece como el hotel idóneo para convenciones, a sólo pasos de la Fiscalía de la Nación, la Embajada de los Estados Unidos y Corferias. Nuestra infraestructura está plenamente adaptada para touch-exploration e itinerarios premium.",
    airport_dist: "12 Min",
    airport_desc: "De Aeropuerto El Dorado",
    star_rating: "5 Estrellas",
    star_desc: "Garantía Wyndham",

    // Venues Page
    venues_header_tag: "Centro de Eventos & Convenciones",
    venues_header_title: "Nuestros Dignos Salones",
    venues_header_subtitle: "Diseño modular y premium adaptado a convenciones académicas, banquetes conmemorativos, juntas de alta dirección y lanzamientos corporativos en Bogotá.",
    todos_pisos: "Todos los Pisos",
    abras_3d: "Abrir Recorrido 3D",
    invitados: "invitados",
    cap_maxima: "Capacidad Máxima",
    area_total: "Área total aproximada",
    equipamiento_destacado: "Equipamiento Premium Destacado:",
    view_details_setups: "Ver Detalles & Montajes",
    wyndham_spaces: "Wyndham Bogotá Spaces",

    // Detail Page
    regresar_salones: "Regresar a Salones & Eventos",
    room_not_found: "Salón No Encontrado",
    room_not_found_desc: "El espacio solicitado no se encuentra cargado en el sistema.",
    regresar_catalogo: "Regresar al Catálogo de Salones",
    immersiva_3d_tag: "Experiencia Inmersiva 3D",
    desea_explorar: "¿Desea explorar este salón en 3D?",
    desea_explorar_desc: "Active nuestro escáner interactivo Matterport en pantalla completa para caminar por el salón, ver las perspectivas y planear su evento estratégicamente con gestos touch.",
    iniciar_virtual_button: "Iniciar Recorrido Virtual en Fullscreen",
    capacidad_montaje_title: "Capacidad según Tipo de Montaje",
    recomendado: "Recomendado",
    max_people: "Personas Máx",
    amenidades_infra: "Amenidades e Infraestructura",
    ubicacion_espacio: "Ubicación del Espacio",
    coffee_break_available: "Servicio Gourmet de Coffee Break Disponible a Solicitud",

    // Additional Paid Services
    additional_services_title: "Servicios con costo Adicional",
    service_internet: "Internet de alta velocidad",
    service_transit: "Transporte VIP",
    service_parking: "Parqueadero Privado",
    service_av: "Equipamiento Audiovisual",

    // Gallery / Utility
    no_images: "Sin imágenes disponibles",
    premium_images: "Imágenes Premium",
    of: "de",
    view: "Vista",
    prev_image: "Imagen anterior",
    next_image: "Siguiente imagen",
    thumbnail: "miniatura",

    // Footer
    weather_desc: "Bogotá, Colombia • Parcialmente Nublado",
    touch_active_info: "Pantalla Táctil Activa • Toque para explorar espacios • Retorno automático tras 60s",
    address_street: "Av. La Esperanza # 51-40",
    phone_reception: "Ext. 601 6083000 (Recepción)",

    // Chat / Idle Warning
    sigues_ahi: "¿Sigues ahí?",
    idle_desc_1: "Esta pantalla regresará al menú principal automáticamente en",
    idle_desc_2: "segundos debido a inactividad.",
    keep_exploring: "Continuar Explorando",
    go_home_now: "Regresar al Inicio Ahora",
  },
  en: {
    // Navigation
    home: "Home",
    venues: "Venues & Events",
    all: "All",
    
    // Hero / Header
    excellence: "FIVE-STAR EXCELLENCE",
    welcome: "Welcome to",
    subtitle: "Touch-explore our top facilities, discover meeting rooms, executive suites, and immerse yourself in our advanced 3D virtual tours powered by Matterport.",
    bg_alt: "Wyndham Bogotá background",
    coordinates: "Bogotá D.C. • Ciudad Salitre",
    check_in_out: "Check-In: 3:00 PM • Check-Out: 12:00 PM",
    
    // Directory / Search
    dir_title: "Main Spaces Directory",
    dir_desc: "Tap one of the following categories to view more details",
    tap_enter: "Tap to enter",
    hotel_info_services: "Hotel Informational Service",
    
    // Categories
    cat_venues_title: "Meeting Rooms & Business Centers",
    cat_venues_desc: "Premium corporate venues equipped with cutting-edge technology, controlled acoustics, and flexible arrangements for banquets or business conferences.",
    cat_venues_badge: "11 Flexible Rooms",
    
    cat_rooms_title: "Rooms & Executive Suites",
    cat_rooms_desc: "Modern-designed spaces meticulously tailored for the business traveler's rest. High-speed WiFi connectivity and ergonomic workstations.",
    cat_rooms_badge: "General Information",
    
    cat_dining_title: "Gourmet, Café & Lobby Bar",
    cat_dining_desc: "Full gastronomic experience. Our Restaurant offers an exquisite complimentary breakfast buffet and local Colombian-Mediterranean fusion dinners using native ingredients.",
    cat_dining_badge: "Dining Information",
    
    // Matterport Home
    matterport_heading: "Immersive 3D Scanner Modules",
    matterport_title: "Immediate Access to Virtual Tours",
    view_setups_link: "View setup capacities",
    ver_recorrido: "View Tour",
    pers: "Guests",
    cap_short: "Cap.",
    recorrido_3d: "3D Matterport Tour",
    
    // Commitments / Placement Info
    hotel_wyndham_bogota: "Hotel Wyndham Bogotá",
    location_desc_hero: "Strategically located on La Esperanza Avenue, Wyndham Bogotá establishes itself as the ideal hotel for conventions, steps from the Attorney General, the US Embassy, and Corferias. Our facilities are fully adapted for touchscreen travel and premium itineraries.",
    airport_dist: "12 Min",
    airport_desc: "From El Dorado Airport",
    star_rating: "5 Star",
    star_desc: "Wyndham Guarantee",

    // Venues Page
    venues_header_tag: "Events & Conventions Center",
    venues_header_title: "Our Distinguished Rooms",
    venues_header_subtitle: "Modular and premium layouts customized for academic congresses, solemn banquets, boards, and high-impact corporate launches in Bogotá.",
    todos_pisos: "All Floors",
    abras_3d: "Open 3D Tour",
    invitados: "guests",
    cap_maxima: "Maximum Capacity",
    area_total: "Approximate Total Area",
    equipamiento_destacado: "Featured Premium Equipment:",
    view_details_setups: "View Details & Setups",
    wyndham_spaces: "Wyndham Bogotá Spaces",

    // Detail Page
    regresar_salones: "Back to Venues & Events",
    room_not_found: "Room Not Found",
    room_not_found_desc: "The requested space is not loaded in the system.",
    regresar_catalogo: "Back to Rooms Catalog",
    immersiva_3d_tag: "3D Immersive Experience",
    desea_explorar: "Would you like to explore in 3D?",
    desea_explorar_desc: "Launch our interactive Matterport fullscreen scanner to walk around the venue, explore angles, and budget your setup layout using touchscreen actions.",
    iniciar_virtual_button: "Start Virtual Tour in Fullscreen",
    capacidad_montaje_title: "Capacity by Setup Layout",
    recomendado: "Recommended",
    max_people: "Max Guests",
    amenidades_infra: "Amenities & Infrastructure",
    ubicacion_espacio: "Space Location",
    coffee_break_available: "Gourmet Coffee Break Service Available On Request",

    // Additional Paid Services
    additional_services_title: "Services with Additional Cost",
    service_internet: "High-Speed Internet",
    service_transit: "VIP Transportation",
    service_parking: "Private Parking",
    service_av: "Audiovisual Equipment",

    // Gallery / Utility
    no_images: "No images available",
    premium_images: "Premium Images",
    of: "of",
    view: "View",
    prev_image: "Previous image",
    next_image: "Next image",
    thumbnail: "thumbnail",

    // Footer
    weather_desc: "Bogotá, Colombia • Part Cloud",
    touch_active_info: "Touch Screen Active • Tap to explore • Returns home automatically after 60s of inactivity",
    address_street: "Av. La Esperanza # 51-40",
    phone_reception: "Ext. 601 6083000 (Reception)",

    // Chat / Idle Warning
    sigues_ahi: "Are you still there?",
    idle_desc_1: "This screen will return to the main menu automatically in",
    idle_desc_2: "seconds due to inactivity.",
    keep_exploring: "Continue Exploring",
    go_home_now: "Go Home Now",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("wyndham_kiosk_lang");
    return (saved === "es" || saved === "en") ? saved : "es";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("wyndham_kiosk_lang", lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["es"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
