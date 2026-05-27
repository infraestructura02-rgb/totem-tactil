/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SalonVenue, HotelRoom, DiningVenue, CorporateEvent } from "../types";

export const SALONES_DATA: SalonVenue[] = [
  // --- SÓTANO 1 ---
  {
    id: "salon-tejada",
    name: "Salón Tejada",
    description: "Espacio ejecutivo moderno ubicado en el Sótano 1, ideal para capacitaciones y juntas corporativas de mediano tamaño con total control acústico y aislamiento.",
    capacity: 60,
    dimensions: "9m x 8m (72 m²)",
    floor: "Sótano 1",
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
    setups: [
      { type: "Auditorio", capacity: 60, iconName: "Presentation" },
      { type: "U-Shape", capacity: 25, iconName: "Users" }
    ],
    locationDesc: "Costado oriental del Sótano 1, cerca del ascensor secundario."
  },
  {
    id: "salon-villegas",
    name: "Salón Villegas",
    description: "Versátil espacio en el Sótano 1 idóneo para conferencias empresariales, dinámicas de equipo y talleres prácticos en un entorno privado de alto rendimiento.",
    capacity: 80,
    dimensions: "12m x 8m (96 m²)",
    floor: "Sótano 1",
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
    setups: [
      { type: "Auditorio", capacity: 80, iconName: "Presentation" },
      { type: "Aula/Escuela", capacity: 50, iconName: "GraduationCap" }
    ],
    locationDesc: "Sótano 1, junto a las escaleras de servicio principal."
  },
  {
    id: "salon-rayo",
    name: "Salón Rayo",
    description: "Espacio ejecutivo óptimo para juntas directivas, focus groups y comités privados que requieren la más alta concentración y excelente confort técnico.",
    capacity: 50,
    dimensions: "8m x 8m (64 m²)",
    floor: "Sótano 1",
    image: "https://my.matterport.com/resources/model/o7FqsCWJwPr/image",
    gallery: [
      "https://my.matterport.com/resources/model/o7FqsCWJwPr/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=o7FqsCWJwPr",
    amenities: [
      "Pantalla multipanel LED de última generación",
      "Soporte para videoconferencia híbrida de alta definición"
    ],
    setups: [
      { type: "Espacio de Junta", capacity: 20, iconName: "Briefcase" },
      { type: "Auditorio", capacity: 50, iconName: "Presentation" }
    ],
    locationDesc: "Sótano 1, contiguo al vestíbulo oeste."
  },
  {
    id: "salon-arenas",
    name: "Salón Arenas",
    description: "Salón imponente y espacioso en el Sótano 1, equipado con acabados refinados para banquetes solemnes, entrenamientos y asambleas corporativas.",
    capacity: 100,
    dimensions: "15m x 8m (120 m²)",
    floor: "Sótano 1",
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
    setups: [
      { type: "Auditorio", capacity: 100, iconName: "Presentation" },
      { type: "Banquete", capacity: 70, iconName: "Utensils" }
    ],
    locationDesc: "Centro del Sótano 1, con acceso ágil desde los ascensores principales de eventos."
  },
  {
    id: "salon-roda",
    name: "Salón Roda",
    description: "Hermoso y reservado espacio en el Sótano 1 diseñado para comités selectos u organizadores que exijan total conectividad simétrica dedicada.",
    capacity: 45,
    dimensions: "8m x 7m (56 m²)",
    floor: "Sótano 1",
    image: "https://my.matterport.com/resources/model/vg3UfmtNnDM/image",
    gallery: [
      "https://my.matterport.com/resources/model/vg3UfmtNnDM/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=vg3UfmtNnDM",
    amenities: [
      "WiFi corporativo de alta velocidad",
      "Tomas de energía de cómodo acceso integradas"
    ],
    setups: [
      { type: "Espacio de Junta", capacity: 18, iconName: "Briefcase" },
      { type: "Auditorio", capacity: 40, iconName: "Presentation" }
    ],
    locationDesc: "Sótano 1, costado norte del foyer de descarga."
  },

  // --- PISO 2 ---
  {
    id: "salon-manzur",
    name: "Salón Manzur",
    description: "Ubicado en el prestigioso Piso 2, este salón ofrece una atmósfera refinada e inmejorable para seminarios académicos, banquetes y juntas corporativas amplias.",
    capacity: 120,
    dimensions: "15m x 10m (150 m²)",
    floor: "Piso 2",
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
    setups: [
      { type: "Auditorio", capacity: 120, iconName: "Presentation" },
      { type: "Banquete", capacity: 80, iconName: "Utensils" }
    ],
    locationDesc: "Ala Norte, Piso 2. Conexión rápida al foyer de congresos."
  },
  {
    id: "salon-botero",
    name: "Salón Botero",
    description: "Imponente salón en el Piso 2 de gran escala. Cuenta con una acústica calibrada perfecta para foros magistrales, banquetes conmemorativos de gala y lanzamientos de alto perfil.",
    capacity: 180,
    dimensions: "18m x 12m (216 m²)",
    floor: "Piso 2",
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
    setups: [
      { type: "Auditorio", capacity: 180, iconName: "Presentation" },
      { type: "Banquete", capacity: 110, iconName: "Utensils" },
      { type: "Cóctel", capacity: 170, iconName: "Wine" }
    ],
    locationDesc: "Frente a las canchas de escaleras mecánicas principales en el Piso 2."
  },
  {
    id: "salon-grau",
    name: "Salón Grau",
    description: "Salón elegante de dimensiones intermedias en el Piso 2, ideal para entrenamientos continuados, juntas corporativas participativas y almuerzos vip.",
    capacity: 90,
    dimensions: "12m x 9m (108 m²)",
    floor: "Piso 2",
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
    setups: [
      { type: "Auditorio", capacity: 90, iconName: "Presentation" },
      { type: "Aula/Escuela", capacity: 55, iconName: "GraduationCap" }
    ],
    locationDesc: "Piso 2, corredor lateral derecho del hotel."
  },
  {
    id: "salon-obregon",
    name: "Salón Obregón",
    description: "Salón dinámico y de gran versatilidad en el Piso 2 que destaca por sus sistemas de paneles divisorios acústicos y óptimo equipamiento para conferencias.",
    capacity: 150,
    dimensions: "16m x 10m (160 m²)",
    floor: "Piso 2",
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
    setups: [
      { type: "Auditorio", capacity: 150, iconName: "Presentation" },
      { type: "Banquete", capacity: 90, iconName: "Utensils" }
    ],
    locationDesc: "Centro de Convenciones del Piso 2, sector oeste."
  },
  {
    id: "salon-arango",
    name: "Salón Arango",
    description: "Excelente espacio adaptado para conferencias de prensa, comités estratégicos ejecutivos y reuniones empresariales de alta reserva con privacidad absoluta en el Piso 2.",
    capacity: 70,
    dimensions: "10m x 8m (80 m²)",
    floor: "Piso 2",
    image: "https://my.matterport.com/resources/model/VuCwsayj645/image",
    gallery: [
      "https://my.matterport.com/resources/model/VuCwsayj645/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=VuCwsayj645",
    amenities: [
      "Cámara omnidireccional robotizada PTZ",
      "Sillas de alto confort ergonómico"
    ],
    setups: [
      { type: "Espacio de Junta", capacity: 25, iconName: "Briefcase" },
      { type: "Auditorio", capacity: 70, iconName: "Presentation" }
    ],
    locationDesc: "Costado sur del Piso 2, contiguo a la terraza o descanso ejecutivo."
  },
  {
    id: "salon-negrett",
    name: "Salón Negrett",
    description: "Espectacular sala en el Piso 2 ideal para talleres simultáneos, capacitaciones departamentales, exposiciones y almuerzos comerciales.",
    capacity: 130,
    dimensions: "14m x 10m (140 m²)",
    floor: "Piso 2",
    image: "https://my.matterport.com/resources/model/gGaQU6C3xLo/image",
    gallery: [
      "https://my.matterport.com/resources/model/gGaQU6C3xLo/image"
    ],
    matterportUrl: "https://my.matterport.com/show/?m=gGaQU6C3xLo",
    amenities: [
      "Aislamiento de alto nivel acústico móvil",
      "Proyectores duales de excelente luminosidad"
    ],
    setups: [
      { type: "Auditorio", capacity: 130, iconName: "Presentation" },
      { type: "Banquete", capacity: 80, iconName: "Utensils" }
    ],
    locationDesc: "Piso 2, sector suroeste del complejo."
  },
  {
    id: "salon-gran-wyndham",
    name: "Gran Salón Wyndham",
    description: "El monumental y sofisticado salón insignia en el Piso 2, diseñado para albergar las convenciones empresariales más multitudinarias del país, lanzamientos internacionales y cenas de gala memorables.",
    capacity: 400,
    dimensions: "24m x 16m (384 m²)",
    floor: "Piso 2",
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
    setups: [
      { type: "Auditorio", capacity: 400, iconName: "Presentation" },
      { type: "Banquete", capacity: 250, iconName: "Utensils" },
      { type: "Cóctel", capacity: 380, iconName: "Wine" }
    ],
    locationDesc: "Ingreso principal destacado a través del Gran Foyer del Piso 2."
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
    features: ["Vista a la Hermosa Ciudad", "Acceso a Gimnasio 24h", "WiFi de 150 Mbps Incluido"]
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
];

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
