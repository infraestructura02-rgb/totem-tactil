/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SalonVenue, HotelRoom, DiningVenue, CorporateEvent } from "../types";

export const SALONES_DATA: SalonVenue[] = [
  {
    id: "salon-gran-wyndham",
    name: "Gran Salón Wyndham",
    nameEn: "Wyndham Grand Ballroom",
    description: "El monumental y sofisticado salón insignia en el Piso 2, diseñado para albergar las convenciones empresariales más multitudinarias, lanzamientos internacionales y cenas de gala memorables.",
    descriptionEn: "The monumental and sophisticated flagship hall on Floor 2, designed to host massive business conventions, international launches, and memorable gala dinners.",
    capacity: 400,
    dimensions: "456.2 m²",
    floor: "Piso 2",
    floorEn: "Floor 2",
    image: "https://my.matterport.com/resources/model/Uov9CmnMSEA/image",
    gallery: [
      "https://my.matterport.com/resources/model/Uov9CmnMSEA/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=Uov9CmnMSEA",
    amenities: [
      "Sistemas de sonido Line Array de nivel óptimo",
      "Rigging points para iluminación escénica compleja",
      "Aire acondicionado regulable automatizado inteligente"
    ],
    amenitiesEn: [
      "Optimal Line Array sound systems",
      "Rigging points for complex scenic lighting",
      "Smart automated climate control system"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 400, iconName: "Presentation" },
      { type: "Aula", typeEn: "Classroom", capacity: 240, iconName: "GraduationCap" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 220, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 400, iconName: "Wine" }
    ],
    locationDesc: "Ingreso principal destacado a través del Gran Foyer del Piso 2.",
    locationDescEn: "Featured main entrance through the Floor 2 Grand Foyer."
  },
  {
    id: "salon-negrett",
    name: "Salón Negret",
    nameEn: "Negret Room",
    description: "Espectacular sala en el Piso 2 ideal para talleres simultáneos, capacitaciones departamentales, exposiciones y almuerzos comerciales.",
    descriptionEn: "Spectacular room on Floor 2 ideal for simultaneous workshops, departmental training, exhibitions, and commercial lunches.",
    capacity: 200,
    dimensions: "222.9 m²",
    floor: "Piso 2",
    floorEn: "Floor 2",
    image: "https://my.matterport.com/resources/model/gGaQU6C3xLo/image",
    gallery: [
      "https://my.matterport.com/resources/model/gGaQU6C3xLo/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=gGaQU6C3xLo",
    amenities: [
      "Aislamiento de alto nivel acústico móvil",
      "Proyectores duales de excelente luminosidad"
    ],
    amenitiesEn: [
      "High level mobile acoustic isolation",
      "Dual high-luminosity projectors"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 200, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 50, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 100, iconName: "GraduationCap" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 90, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 200, iconName: "Wine" }
    ],
    locationDesc: "Piso 2, sector suroeste del complejo.",
    locationDescEn: "Floor 2, southwest sector of the complex."
  },
  {
    id: "salon-arango",
    name: "Salón Arango",
    nameEn: "Arango Room",
    description: "Excelente espacio adaptado para conferencias de prensa, comités estratégicos ejecutivos y reuniones empresariales de alta reserva con privacidad absoluta en el Piso 2.",
    descriptionEn: "Excellent space adapted for press conferences, strategic executive committees and high-security business meetings with absolute privacy on Floor 2.",
    capacity: 200,
    dimensions: "233.3 m²",
    floor: "Piso 2",
    floorEn: "Floor 2",
    image: "https://my.matterport.com/resources/model/VuCwsayj645/image",
    gallery: [
      "https://my.matterport.com/resources/model/VuCwsayj645/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=VuCwsayj645",
    amenities: [
      "Cámara omnidireccional robotizada PTZ",
      "Sillas de alto confort ergonómico"
    ],
    amenitiesEn: [
      "PTZ robotic omnidirectional camera",
      "High comfort ergonomic seats"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 200, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 50, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 100, iconName: "GraduationCap" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 90, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 200, iconName: "Wine" }
    ],
    locationDesc: "Costado sur del Piso 2, contiguo a la terraza o descanso ejecutivo.",
    locationDescEn: "South side of Floor 2, adjacent to the terrace or executive lobby."
  },
  {
    id: "salon-grau",
    name: "Salón Grau",
    nameEn: "Grau Room",
    description: "Salón elegante de dimensiones intermedias en el Piso 2, ideal para entrenamientos continuados, juntas corporativas participativas y almuerzos vip.",
    descriptionEn: "Elegant, medium-sized room on Floor 2, ideal for continuous training, highly collaborative corporate board meetings and VIP lunches.",
    capacity: 90,
    dimensions: "129.51 m²",
    floor: "Piso 2",
    floorEn: "Floor 2",
    image: "https://my.matterport.com/resources/model/ANbP9ct5iKD/image",
    gallery: [
      "https://my.matterport.com/resources/model/ANbP9ct5iKD/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=ANbP9ct5iKD",
    amenities: [
      "Climatización individual digitalizada",
      "Iluminación indirecta optimizada",
      "Conectividad multimedios avanzada"
    ],
    amenitiesEn: [
      "Individual digital climate control",
      "Optimized indirect lighting",
      "Advanced multimedia connectivity"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 90, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 30, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 60, iconName: "GraduationCap" },
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 25, iconName: "Briefcase" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 48, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 90, iconName: "Wine" }
    ],
    locationDesc: "Piso 2, corredor lateral derecho del hotel.",
    locationDescEn: "Floor 2, lateral right corridor of the hotel."
  },
  {
    id: "salon-botero",
    name: "Salón Botero",
    nameEn: "Botero Room",
    description: "Imponente salón en el Piso 2 de gran escala. Cuenta con una acústica calibrada perfecta para foros magistrales, banquetes conmemorativos de gala y lanzamientos de alto perfil.",
    descriptionEn: "Imposing large-scale hall on Floor 2. It features calibrated acoustics perfect for keynote forums, gala commemorative banquets, and high-profile launches.",
    capacity: 90,
    dimensions: "144.04 m²",
    floor: "Piso 2",
    floorEn: "Floor 2",
    image: "https://my.matterport.com/resources/model/rEWtPSFtcv6/image",
    gallery: [
      "https://my.matterport.com/resources/model/rEWtPSFtcv6/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=rEWtPSFtcv6",
    amenities: [
      "Sistema de sonido stereo de alta fidelidad",
      "Pantalla de formato gigante integrada",
      "Ubicado en el área principal de Foyer corporativo"
    ],
    amenitiesEn: [
      "High fidelity stereo sound system",
      "Giant format screen integrated",
      "Located in the main corporate Foyer area"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 90, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 30, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 60, iconName: "GraduationCap" },
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 25, iconName: "Briefcase" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 48, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 90, iconName: "Wine" }
    ],
    locationDesc: "Frente a las canchas de escaleras mecánicas principales en el Piso 2.",
    locationDescEn: "In front of the main escalator banks on Floor 2."
  },
  {
    id: "salon-manzur",
    name: "Salón Manzur",
    nameEn: "Manzur Room",
    description: "Ubicado en el prestigioso Piso 2, este salón ofrece una atmósfera refinada e inmejorable para seminarios académicos, banquetes y juntas corporativas amplias.",
    descriptionEn: "Located on the prestigious Floor 2, this room offers a refined and unbeatable atmosphere for academic seminars, banquets and spacious corporate boards.",
    capacity: 80,
    dimensions: "103.79 m²",
    floor: "Piso 2",
    floorEn: "Floor 2",
    image: "https://my.matterport.com/resources/model/aZsW8W6G3C5/image",
    gallery: [
      "https://my.matterport.com/resources/model/aZsW8W6G3C5/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=aZsW8W6G3C5",
    amenities: [
      "Proyector digital de alto brillo",
      "Aislamiento termoacústico",
      "Control de luces inteligente"
    ],
    amenitiesEn: [
      "High brightness digital projector",
      "Thermoacoustic isolation",
      "Intelligent light control"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 80, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 20, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 50, iconName: "GraduationCap" },
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 15, iconName: "Briefcase" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 32, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 80, iconName: "Wine" }
    ],
    locationDesc: "Ala Norte, Piso 2. Conexión rápida al foyer de congresos.",
    locationDescEn: "North Wing, Floor 2. Quick connection to the congress foyer."
  },
  {
    id: "salon-obregon",
    name: "Salón Obregón",
    nameEn: "Obregón Room",
    description: "Salón dinámico y de gran versatilidad en el Piso 2 que destaca por sus sistemas de paneles divisorios acústicos y óptimo equipamiento para conferencias.",
    descriptionEn: "Dynamic and highly versatile room on Floor 2 that stands out for its acoustic partition systems and optimal conference equipment.",
    capacity: 60,
    dimensions: "78.88 m²",
    floor: "Piso 2",
    floorEn: "Floor 2",
    image: "https://my.matterport.com/resources/model/w5C7gSLYRnA/image/R5HMJNpFPcd",
    gallery: [
      "https://my.matterport.com/resources/model/w5C7gSLYRnA/image/R5HMJNpFPcd"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=w5C7gSLYRnA",
    amenities: [
      "Sonido Bose® integrado",
      "Controles inteligentes de luz",
      "Proyección de alta resolución"
    ],
    amenitiesEn: [
      "Integrated Bose® sound",
      "Intelligent lighting controls",
      "High resolution projection"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 60, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 15, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 40, iconName: "GraduationCap" },
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 15, iconName: "Briefcase" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 32, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 60, iconName: "Wine" }
    ],
    locationDesc: "Centro de Convenciones del Piso 2, sector oeste.",
    locationDescEn: "Floor 2 Conventions Center, west sector."
  },
  {
    id: "salon-tejada",
    name: "Salón Tejada",
    nameEn: "Tejada Room",
    description: "Espacio ejecutivo moderno ubicado en el Sótano 1, ideal para capacitaciones y juntas corporativas de mediano tamaño con total control acústico y aislamiento.",
    descriptionEn: "Modern executive space located on Basement 1, ideal for training sessions and medium-sized corporate boards with total acoustic control and noise isolation.",
    capacity: 110,
    dimensions: "187 m²",
    floor: "Sótano 1",
    floorEn: "Basement 1",
    image: "https://my.matterport.com/resources/model/tQfLxhXfVNX/image/zYsnt9ksN2t",
    gallery: [
      "https://my.matterport.com/resources/model/tQfLxhXfVNX/image/zYsnt9ksN2t"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=tQfLxhXfVNX",
    amenities: [
      "Conexión de fibra óptica dedicada",
      "Proyector interactivo Full HD",
      "Climatización regulable"
    ],
    amenitiesEn: [
      "Dedicated fiber optic connection",
      "Interactive Full HD projector",
      "Adjustable air conditioning"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 110, iconName: "Presentation" },
      { type: "Aula", typeEn: "Classroom", capacity: 80, iconName: "GraduationCap" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 72, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 110, iconName: "Wine" }
    ],
    locationDesc: "Costado oriental del Sótano 1, cerca del ascensor secundario.",
    locationDescEn: "Eastern side of Basement 1, near the secondary elevator."
  },
  {
    id: "salon-arenas",
    name: "Salón Arenas",
    nameEn: "Arenas Room",
    description: "Salón imponente y espacioso en el Sótano 1, equipado con acabados refinados para banquetes solemnes, entrenamientos y asambleas corporativas.",
    descriptionEn: "Stately and spacious hall on Basement 1, equipped with refined finishes for solemn banquets, professional training, and corporate assemblies.",
    capacity: 50,
    dimensions: "91.16 m²",
    floor: "Sótano 1",
    floorEn: "Basement 1",
    image: "https://my.matterport.com/resources/model/1Hq2XGGkgAs/image",
    gallery: [
      "https://my.matterport.com/resources/model/1Hq2XGGkgAs/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=1Hq2XGGkgAs",
    amenities: [
      "Sonido envolvente digital",
      "Climatización zonificada silenciosa",
      "Iluminación indirecta regulable"
    ],
    amenitiesEn: [
      "Digital surround sound",
      "Silent zoned climate control",
      "Adjustable indirect lighting"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 50, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 30, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 40, iconName: "GraduationCap" },
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 26, iconName: "Briefcase" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 32, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 50, iconName: "Wine" }
    ],
    locationDesc: "Centro del Sótano 1, con acceso ágil desde los ascensores principales de eventos.",
    locationDescEn: "Center of Basement 1, with quick access from the main events elevators."
  },
  {
    id: "salon-rayo",
    name: "Salón Rayo",
    nameEn: "Rayo Room",
    description: "Espacio ejecutivo óptimo para juntas directivas, focus groups y comités privados que requieren la más alta concentración y excelente confort técnico.",
    descriptionEn: "Optimal executive space for boards of directors, focus groups, and private committees that require maximum concentration and excellent technical comfort.",
    capacity: 40,
    dimensions: "73.1 m²",
    floor: "Sótano 1",
    floorEn: "Basement 1",
    image: "https://my.matterport.com/resources/model/o7FqsCWJwPr/image",
    gallery: [
      "https://my.matterport.com/resources/model/o7FqsCWJwPr/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=o7FqsCWJwPr",
    amenities: [
      "Pantalla multipanel LED de última generación",
      "Soporte para videoconferencia híbrida de alta definición"
    ],
    amenitiesEn: [
      "State-of-the-art multi-panel LED screen",
      "Support for high-definition hybrid videoconferencing"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 40, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 20, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 24, iconName: "GraduationCap" },
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 20, iconName: "Briefcase" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 24, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 40, iconName: "Wine" }
    ],
    locationDesc: "Sótano 1, contiguo al vestíbulo oeste.",
    locationDescEn: "Basement 1, adjacent to the west lobby."
  },
  {
    id: "salon-villegas",
    name: "Salón Villegas",
    nameEn: "Villegas Room",
    description: "Versátil espacio en el Sótano 1 idóneo para conferencias empresariales, dinámicas de equipo y talleres prácticos en un entorno privado de alto rendimiento.",
    descriptionEn: "Versatile space in Basement 1 suitable for business conferences, team building dynamics and practical workshops in a high-performance private environment.",
    capacity: 50,
    dimensions: "91.32 m²",
    floor: "Sótano 1",
    floorEn: "Basement 1",
    image: "https://my.matterport.com/resources/model/fsZs3PB3jbh/image",
    gallery: [
      "https://my.matterport.com/resources/model/fsZs3PB3jbh/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=fsZs3PB3jbh",
    amenities: [
      "Aislamiento acústico integral",
      "Dimmers táctiles",
      "Sonido ambiental integrado"
    ],
    amenitiesEn: [
      "Comprehensive acoustic insulation",
      "Tactile dimmers",
      "Integrated ambient sound"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 50, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 30, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 40, iconName: "GraduationCap" },
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 26, iconName: "Briefcase" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 32, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 50, iconName: "Wine" }
    ],
    locationDesc: "Sótano 1, junto a las escaleras de servicio principal.",
    locationDescEn: "Basement 1, next to the main service stairs."
  },
  {
    id: "salon-roda",
    name: "Salón Roda",
    nameEn: "Roda Room",
    description: "Hermoso y reservado espacio en el Sótano 1 diseñado para comités selectos u organizadores que exijan total conectividad simétrica dedicada.",
    descriptionEn: "Beautiful and reserved space in Basement 1 designed for select committees or organizers demanding dedicated high-speed symmetric connectivity.",
    capacity: 60,
    dimensions: "96.1 m²",
    floor: "Sótano 1",
    floorEn: "Basement 1",
    image: "https://my.matterport.com/resources/model/vg3UfmtNnDM/image",
    gallery: [
      "https://my.matterport.com/resources/model/vg3UfmtNnDM/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=vg3UfmtNnDM",
    amenities: [
      "WiFi corporativo de alta velocidad",
      "Tomas de energía de cómodo acceso integradas"
    ],
    amenitiesEn: [
      "High-speed corporate WiFi",
      "Conveniently located integrated power outlets"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 60, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 34, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 40, iconName: "GraduationCap" },
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 26, iconName: "Briefcase" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 40, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 60, iconName: "Wine" }
    ],
    locationDesc: "Sótano 1, costado norte del foyer de descarga.",
    locationDescEn: "Basement 1, north side of the unload foyer."
  },
  {
    id: "salon-aguilar",
    name: "Salón Aguilar",
    nameEn: "Aguilar Room",
    description: "Excelente espacio compacto en el Sótano 1 de alta privacidad para juntas corporativas, talleres ágiles y comités de mediano formato.",
    descriptionEn: "Excellent compact space on Basement 1 featuring high privacy for corporate boards, agile workshops and medium sized committees.",
    capacity: 30,
    dimensions: "62.17 m²",
    floor: "Sótano 1",
    floorEn: "Basement 1",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80"
    ],
    matterportUrl: "",
    amenities: [
      "Materiales acústicos premium de última generación",
      "Conectores de recarga empotrados ergonómicos",
      "Iluminación LED dimerizable"
    ],
    amenitiesEn: [
      "State of the art premium acoustic materials",
      "Ergonomically embedded electrical recharge ports",
      "Dimmable LED ambient lighting"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 30, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 20, iconName: "Users" },
      { type: "Aula", typeEn: "Classroom", capacity: 30, iconName: "GraduationCap" },
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 24, iconName: "Briefcase" },
      { type: "Mesa Redonda", typeEn: "Round Table", capacity: 24, iconName: "Utensils" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 30, iconName: "Wine" }
    ],
    locationDesc: "Sótano 1, extremo oriental contiguo a zona de servicios.",
    locationDescEn: "Basement 1, eastern end contiguous to service area."
  },
 /* {
    id: "salon-lounge",
    name: "Salón Lounge Ejecutivos",
    nameEn: "Executive Lounge Room",
    description: "Prestigioso espacio VIP del hotel diseñado para encuentros corporativos exclusivos, dinámicas de networking corporativo y eventos selectos de co-working.",
    descriptionEn: "Prestigious VIP venue of the hotel designed for exclusive corporate gatherings, corporate networking events, and select VIP co-working schedules.",
    capacity: 30,
    dimensions: "95 m²",
    floor: "Piso 2",
    floorEn: "Floor 2",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    matterportUrl: "",
    amenities: [
      "Zonas de lounge semi-privadas de alto confort",
      "Servicio permanente de café gourmet y bocadillos premium",
      "Soporte de conserjería dedicado"
    ],
    amenitiesEn: [
      "High-comfort semi-private lounge zones",
      "All-day gourmet coffee and premium finger food service",
      "Dedicated concierge support"
    ],
    setups: [
      { type: "Auditorio", typeEn: "Auditorium", capacity: 30, iconName: "Presentation" },
      { type: "Tipo U", typeEn: "U-Shape", capacity: 24, iconName: "Users" },
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 20, iconName: "Briefcase" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 30, iconName: "Wine" }
    ],
    locationDesc: "Piso 2, entrada directa con credencial VIP en el ala izquierda del foyer central.",
    locationDescEn: "Floor 2, direct entrance with VIP card at the left wing of central foyer."
  },
  {
    id: "salon-mesa-chef",
    name: "Mesa del Chef",
    nameEn: "Chef's Table",
    description: "Experiencia culinaria ultra-exclusiva ideal para cenas comerciales de alta dirección e incentivos gourmet especiales maridados por nuestro chef ejecutivo.",
    descriptionEn: "Ultra-exclusive culinary experience perfect for high-level business board diners and tailored gourmet incentives curated by our executive chef.",
    capacity: 12,
    dimensions: "35 m²",
    floor: "Piso 1",
    floorEn: "Floor 1",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    matterportUrl: "",
    amenities: [
      "Cocina de exhibición en directo",
      "Menú degustación personalizado de 7 tiempos",
      "Servicio de sommelier dedicado"
    ],
    amenitiesEn: [
      "Live show kitchen setups",
      "Customized 7-course tasting menu pairing",
      "Dedicated sommelier service"
    ],
    setups: [
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 12, iconName: "Briefcase" }
    ],
    locationDesc: "Piso 1, contiguo al Restaurante Madrigal.",
    locationDescEn: "Floor 1, adjacent to Madrigal Restaurant."
  },
  {
   id: "salon-suite-presidencial",
    name: "Mesa VIP Suite Presidencial",
    nameEn: "Presidential Suite Boardroom",
    description: "El espacio de mayor prestigio corporativo en el último piso del hotel. Reúne el confort de nuestra suite presidencial con una magnífica mesa imperial idónea para firmas de contratos y comités.",
    descriptionEn: "The most prestigious corporate hosting space on the hotel's top floor. Blends presidential luxury dining setups with a magnificent board design for high profile meetings and agreements.",
    capacity: 30,
    dimensions: "120 m²",
    floor: "Piso 5",
    floorEn: "Floor 5",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    matterportUrl: "",
    amenities: [
      "Entrada privada de alta seguridad VIP",
      "Terraza panorámica privada con vista a Bogotá",
      "Bar de licores premium importados de cortesía"
    ],
    amenitiesEn: [
      "High security private entrance",
      "Panoramic privatized cityscape view over Bogota",
      "Complimentary bar of imported premium spirits"
    ],
    setups: [
      { type: "Mesa Imperial", typeEn: "Boardroom", capacity: 16, iconName: "Briefcase" },
      { type: "Cóctel", typeEn: "Cocktail", capacity: 30, iconName: "Wine" }
    ],
    locationDesc: "Piso 5, Suite Presidencial (acceso restringido mediante ascensor VIP).",
    locationDescEn: "Floor 5, Presidential Suite (restricted access via VIP keycard lift)."
 }
];

export const ROOMS_DATA: HotelRoom[] = [
  {
    id: "deluxe-king",
    name: "Habitación Deluxe King",
    description: "El balance perfecto entre lujo y comodidad ergonómica. Diseñada meticulosamente para el viajero de negocios moderno, combina espacios de trabajo óptimos con un descanso excepcional en nuestro exclusivo colchón prémium de tecnología patentada.",
    size: "32 m²",
    capacity: 2,
    bedType: "1 Cama King Serta® Suite Dreams",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Escritorio de diseño ergonómico con silla Herman Miller®",
      "Sofá de descanso contemporáneo al ventanal",
      "Televisor Smart LED de 55 pulgadas con Chromecast integrado",
      "Ventanas insonorizadas de triple panel termoacústico",
      "Cafetera prémium con café del eje cafetero de cortesía",
      "Caja de seguridad electrónica con espacio para laptop"
    ],
    features: ["Vista a la Hermosa Ciudad", "Acceso a Gimnasio 24h", "WiFi de 155 Mbps Incluido"]
  },
  {
    id: "executive-twin",
    name: "Habitación Executive Double",
    description: "Soberbia habitación con acabados de la más alta sofisticación y dos camas de tamaño Queen. Ideal para ejecutivos que comparten viaje corporativo o familias exigentes. Incluye acceso directo y selecto al Lounge VIP Ejecutivo del hotel.",
    size: "36 m²",
    capacity: 4,
    bedType: "2 Camas Queen Serta® Suite Dreams",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Acceso privilegido al Executive VIP Club Lounge",
      "Cafetera Espresso italiana con cápsulas ilimitadas",
      "Baño de mármol importado con tina y ducha tipo lluvia",
      "Menú de almohadas de memory foam exclusivas",
      "Batas de baño de felpa cepillada y pantuflas de lujo",
      "Planchador con vaporera marca Singer®"
    ],
    features: ["Acceso al Executive Lounge", "Desayuno VIP Premium", "Cócteles y canapés de cortesía (5 a 7 PM)"]
  },
  {
    id: "junior-suite",
    name: "Junior Suite Premier",
    description: "Una experiencia inmersiva de espacio y elegancia. Cuenta con una amplia e independiente sala de estar separada para descansar o efectuar reuniones casuales, armario de vestidor integrado y ventanas con fantástica vista a los Cerros Orientales.",
    size: "48 m²",
    capacity: 3,
    bedType: "1 Cama King Serta® + Sofá Cama Imperial",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Sala de estar independiente equipada con TV 4K de 65 pulgadas",
      "Baño de lujo doble tocador y grifería táctil Kohler®",
      "Amenidades orgánicas exclusivas de L'Occitane en Provence®",
      "Mini-bar prémium completamente equipado y reabastecido",
      "Mesa de comedor para 4 personas ideal para Room Service",
      "Servicio de lustrado de calzado corporativo express sin costo"
    ],
    features: ["Ventanas de Piso a Techo", "Check-in Prioritario VIP", "Clasificada como de Alta Experiencia"]
  }
];*/

export const DINING_DATA: DiningVenue[] = [
  {
    id: "restaurante-mediterraneo",
    name: "Madrigal Restaurante & Bistró",
    description: "Una propuesta gastronómica inigualable que fusiona la versatilidad de la cocina del Mediterráneo con los ingredientes más frescos cultivados artesanalmente en tierras andinas colombianas. Un espacio refinado con cocina a la vista de los comensales.",
    hours: "6:00 AM - 11:00 PM (Diario)",
    cuisine: "Fusión de Cocina Mediterránea y Colombiana Contemporánea",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Ambiente Corporativo Chic", "Capacidad para Cenas de Gala (120 personas)", "Carta de vinos de alta gama seleccionada por sommelier"],
    menuHighlights: [
      "Posta Negra Cartagenera braseada a fuego lento al balsámico",
      "Risotto de setas silvestres con queso Paipa crujiente",
      "Lomo de res sellado al café colombiano con salsa de frutos del bosque",
      "Milhojas de dulce de leche artesanal y arequipe local"
    ]
  },
  {
    id: "lobby-bar-nogal",
    name: "El Nogal Lobby Bar",
    description: "Un sofisticado punto de encuentro para el networking, que combina una atmósfera de jazz sutil, cócteles de autor de vanguardia, licores prémium importados y la mejor selección de cafés de especialidad de Colombia.",
    hours: "12:00 PM - 1:00 AM (Lunes a Sábado)",
    cuisine: "Coctelería Premium, Tapas y Selección de Café Sostenible",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Música de Piano en Vivo (Noches de Jueves a Sábado)", "Estaciones de carga rápida ocultas", "Menú especial de infusiones y tés exóticos de la selva amazónica"],
    menuHighlights: [
      "Cóctel 'Berraco' - Infusión de ron añejo, cordial de maracuyá y café espresso",
      "Miniburgers de entraña madurada con alioli de trufa y rúcula",
      "Tabla de embutidos artesanales de la sabana de Bogotá y quesos madurados",
      "Gin Tonic del Huerto - Ginebra artesanal con botánicos colombianos frescos"
    ]
  }
];

export const EVENTS_DATA: CorporateEvent[] = [
  {
    id: "corp-meetings",
    title: "Reuniones Corporativas Wyndham",
    description: "Ofrecemos coordinadores dedicados certificados en eventos para garantizar que cada junta, congreso o sesión estratégica sea impecable. Ofrecemos la máxima infraestructura de Ciudad Salitre, a minutos del Aeropuerto El Dorado y Corferias.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
    services: [
      "Coordinador de eventos 'Event Guru' asignado 24/7",
      "Soporte de ingeniería audiovisual especializado en el sitio",
      "Estaciones de hidratación ecológica personalizadas",
      "Servicios de traslado vip desde/hacia Aeropuerto Internacional El Dorado (12 minutos)",
      "Tarjetas de acceso personalizadas para todos los delegados"
    ]
  },
  {
    id: "weddings-socials",
    title: "Celebraciones Sociales & Bodas",
    description: "Espacios románticos que se transforman mágicamente para albergar bodas inolvidables, aniversarios o recepciones elegantes. Ponemos a disposición una gastronomía refinada de catering y alianzas estratégicas de decoración de clase mundial.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    services: [
      "Asesoría de planificación nupcial integral certificada",
      "Prueba de menú de 5 tiempos para los anfitriones",
      "Tarifas preferenciales especiales de bloqueo de habitaciones para invitados",
      "Decoración floral de alta gama y diseño de iluminación escenográfica",
      "Suite nupcial de cortesía para la noche de bodas con champaña y fresas"
    ]
  }
];
