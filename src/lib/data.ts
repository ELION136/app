export const institution = {
  name: "Corporación Boliviana de Talento y Formación Integral",
  shortName: "CBTI",
  whatsapp: "59177101440",
  phone: "+591 77101440",
  email: "info@cenacap.edu.bo",
  address: "Calle Reza Nro. 0236, entre España y Baptista, Cochabamba – Bolivia",
  heroImage: "/assets/img/lan.png",
};

export type TickerLogo = {
  name: string;
  logo: string; // path desde /public
};
 
export const tickerData: TickerLogo[] = [
  { name: "Corporación Boliviana",          logo: "/assets/img/log1.png" },
  { name: "CENACAP",                        logo: "/assets/img/log2.png" },
  { name: "INFOCADE",                       logo: "/assets/img/log3.png" },
  { name: "Ministerio de Educación",        logo: "/assets/img/log4.png" },
  { name: "Universidad Mayor de San Simón", logo: "/assets/img/log5.png" },
  { name: "Comité Olímpico Boliviano",      logo: "/assets/img/log6.png" },
  { name: "Federación Boliviana Fútbol",    logo: "/assets/img/log7.png" },
  { name: "Alcaldía Cochabamba",            logo: "/assets/img/log8.png" },
];

export const features = [
  {
    num: "01",
    icon: "fa-briefcase",
    title: "Orientado al Empleo",
    text: "Programas diseñados con el sector productivo para garantizar las competencias que el mercado laboral realmente necesita.",
  },
  {
    num: "02",
    icon: "fa-trophy",
    title: "Excelencia Deportiva",
    text: "Programas de Alto Rendimiento, arbitraje, entrenamiento y gestión deportiva con metodologías internacionales.",
  },
  {
    num: "03",
    icon: "fa-medal",
    title: "Certificación Oficial",
    text: "Títulos reconocidos por el Ministerio de Educación de Bolivia y Entidades Aliadas Nacionales e Internacionales.",
  },
  {
    num: "04",
    icon: "fa-users",
    title: "Inclusión y Bienestar",
    text: "Promovemos igualdad de oportunidades, diversidad y hábitos saludables en toda la comunidad educativa.",
  },
];

// lib/data.ts  (agrega este bloque al archivo existente o crea uno nuevo)

export type Autoridad = {
  nombre: string;
  cargo: string;
  foto: string;
  iniciales: string;
  color: string;
  descripcionCorta: string;
  descripcionLarga: string;
  logros: string[];
  redes: { linkedin: string; email: string };
};

export const autoridades: Autoridad[] = [
  {
    nombre: "Mg. Juan Carlos Rojas",
    cargo: "Director General",
    foto: "/assets/img/au1.png",
    iniciales: "JR",
    color: "#C9A84C",
    descripcionCorta:
      "Magíster en Gestión Educativa con más de 15 años liderando instituciones de formación técnica.",
    descripcionLarga:
      "Magíster en Gestión Educativa y Administración Pública. Ha liderado la expansión de la Corporación Boliviana de Talento y Formación Integral desde su fundación, consolidando alianzas con instituciones nacionales e internacionales. Especialista en políticas educativas y desarrollo institucional.",
    logros: [
      "15+ años en gestión educativa",
      "Fundador de CBTI",
      "Convenios con 12 instituciones internacionales",
    ],
    redes: { linkedin: "#", email: "jrojas@cbti.edu.bo" },
  },
  {
    nombre: "Lic. María Elena Vargas",
    cargo: "Directora Académica",
    foto: "/assets/img/au2.png",
    iniciales: "MV",
    color: "#1A5C38",
    descripcionCorta:
      "Licenciada en Ciencias de la Educación, especialista en diseño curricular y evaluación académica.",
    descripcionLarga:
      "Licenciada en Ciencias de la Educación con especialización en Diseño Curricular. Responsable del desarrollo y actualización de los programas académicos de CENACAP e INFOCADE. Ha liderado la acreditación de más de 8 carreras técnicas ante el Ministerio de Educación.",
    logros: [
      "8 carreras acreditadas",
      "Reforma curricular 2022-2024",
      "Docente universitaria 10 años",
    ],
    redes: { linkedin: "#", email: "mvargas@cbti.edu.bo" },
  },
  {
    nombre: "Prof. Roberto Quispe",
    cargo: "Director Deportivo INFOCADE",
    foto: "/assets/img/au3.png",
    iniciales: "RQ",
    color: "#0F1F2E",
    descripcionCorta:
      "Profesor de Educación Física y ex atleta nacional. Especialista en alto rendimiento deportivo.",
    descripcionLarga:
      "Profesor de Educación Física con maestría en Alto Rendimiento Deportivo. Ex atleta de selección nacional boliviana. Diseñó el modelo de formación deportiva integral de INFOCADE, que combina preparación técnica, física y psicológica para atletas de élite y árbitros profesionales.",
    logros: [
      "Ex atleta nacional",
      "Maestría en Alto Rendimiento",
      "Formó 200+ árbitros certificados",
    ],
    redes: { linkedin: "#", email: "rquispe@cbti.edu.bo" },
  },
  {
    nombre: "Ing. Sandra Mamani",
    cargo: "Directora Técnica CENACAP",
    foto: "/assets/img/au4.png",
    iniciales: "SM",
    color: "#4A5568",
    descripcionCorta:
      "Ingeniera Industrial con especialización en Gestión Ambiental y Calidad. Impulsora de la formación técnica.",
    descripcionLarga:
      "Ingeniera Industrial graduada de la UMSS con especialización en Sistemas de Gestión Ambiental y Calidad ISO. Responsable del desarrollo técnico de los programas de CENACAP, garantizando que los egresados cumplan estándares internacionales de competencia profesional y certificación técnica.",
    logros: [
      "Certificación ISO 9001 institucional",
      "Egresada UMSS",
      "15 convenios empresariales",
    ],
    redes: { linkedin: "#", email: "smamani@cbti.edu.bo" },
  },
];

export const valores = [
  {
    icon: "fa-heart",
    title: "Integridad",
    subtitle: "Ética y honestidad",
    desc: "Actuamos con rectitud, verdad y coherencia entre lo que pensamos, decimos y hacemos. La integridad es el fundamento de nuestra reputación institucional.",
  },
  {
    icon: "fa-lightbulb",
    title: "Innovación",
    subtitle: "Mejora continua",
    desc: "Buscamos constantemente nuevas metodologías, tecnologías y enfoques para ofrecer una formación de vanguardia que responda a los desafíos actuales.",
  },
  {
    icon: "fa-users",
    title: "Compromiso Social",
    subtitle: "Impacto en la comunidad",
    desc: "Trabajamos para generar un impacto positivo en la sociedad boliviana, formando profesionales que contribuyan al desarrollo del país.",
  },
  {
    icon: "fa-star",
    title: "Excelencia",
    subtitle: "Calidad superior",
    desc: "Nos esforzamos por alcanzar los más altos estándares de calidad en todos nuestros procesos educativos y de servicio.",
  },
  {
    icon: "fa-hands-holding-child",
    title: "Inclusión",
    subtitle: "Igualdad de oportunidades",
    desc: "Garantizamos el acceso equitativo a la educación técnica y deportiva, sin distinción de género, origen o condición socioeconómica.",
  },
  {
    icon: "fa-handshake",
    title: "Colaboración",
    subtitle: "Trabajo en equipo",
    desc: "Fomentamos alianzas estratégicas con instituciones públicas y privadas para enriquecer la experiencia formativa de nuestros estudiantes.",
  },
];

export const stats = [
  { icon: "fa-users", value: 3500, suffix: "+", label: "Estudiantes formados" },
  { icon: "fa-graduation-cap", value: 45, suffix: "", label: "Carreras técnicas" },
  { icon: "fa-trophy", value: 120, suffix: "", label: "Campeones formados" },
  { icon: "fa-handshake", value: 25, suffix: "", label: "Convenios activos" },
];

export const cenacapCarreras = {
  nombre: "CENACAP",
  cenacapLogo:"/assets/img/logocenacap.png",
  carreras: [
    {
      categoria: "Gestión y Calidad",
      icono: "fa-leaf",
      cursos: [
        { nombre: "Sistemas de Gestión Ambiental", desc: "Gestión ambiental empresarial, normativas ISO 14001 y desarrollo sostenible.", modalidad: "Presencial / Virtual", certificado: true, imagen: "/assets/img/1.png" },
        { nombre: "Sistemas de Gestión de Calidad", desc: "Implementación de normas ISO 9001, auditoría de calidad y mejora continua.", modalidad: "Presencial", certificado: true, imagen: "/assets/img/2.png" },
        { nombre: "Supervisión y Liderazgo en Prevención de Riesgos", desc: "Gestión de riesgos laborales, seguridad industrial y salud ocupacional.", modalidad: "Presencial", certificado: true, imagen: "/assets/img/5.png" },
      ],
    },
    {
      categoria: "Diseño y Tecnología",
      icono: "fa-palette",
      cursos: [
        { nombre: "Diseño Gráfico y Producción Audiovisual", desc: "Adobe Creative Suite, motion graphics, edición de video y producción digital.", modalidad: "Presencial / Virtual", certificado: true, imagen: "/assets/img/6.png" },
        { nombre: "Microsoft Project", desc: "Gestión de proyectos con MS Project, planificación y control de cronogramas.", modalidad: "Virtual", certificado: true, imagen: "/assets/img/3.png" },
      ],
    },
    {
      categoria: "Deporte y Rendimiento",
      icono: "fa-trophy",
      cursos: [
        { nombre: "Sistemas Tácticos Deportivos", desc: "Análisis táctico, estrategias de juego y preparación deportiva especializada.", modalidad: "Presencial", certificado: true, imagen: "/assets/img/4.png" },
        { nombre: "Deporte de Alto Rendimiento y Competición", desc: "Preparación física, mental y técnica para deportistas de élite.", modalidad: "Presencial", certificado: true, imagen: "/assets/img/8.png" },
       ],
    },
  ],
};

export const infocadeCarreras = {
  nombre: "INFOCADE",
  infoLogo:"/assets/img/infoLogo.jpg",
  carreras: [
    { icono: "fa-whistle", nombre: "Arbitraje de Fútbol Amateur", desc: "Formación de árbitros con las reglas FIFA, control de partidos y gestión de incidencias." },
    { icono: "fa-volleyball", nombre: "Arbitraje de Voleyball en Cancha", desc: "Árbitros certificados para competencias de voleibol indoor y playa." },
    { icono: "fa-microphone", nombre: "Comunicación y Periodismo Deportivo", desc: "Relatos deportivos, cobertura mediática y producción de contenido." },
    { icono: "fa-futbol", nombre: "Entrenador de Fútbol", desc: "Licencia de entrenador, metodologías de entrenamiento y gestión de equipos." },
    { icono: "fa-umbrella-beach", nombre: "Entrenador de Beach Voley", desc: "Especialización en vóley playa, tácticas y preparación física específica." },
    { icono: "fa-chart-line", nombre: "Marketing Deportivo", desc: "Estrategias de marketing aplicadas al deporte, patrocinios y gestión de marcas." },
    { icono: "fa-clipboard-check", nombre: "Auditoría de Organizaciones Deportivas", desc: "Control y auditoría de entidades deportivas, cumplimiento normativo." },
    { icono: "fa-users-gear", nombre: "Dirigencia Deportiva", desc: "Gestión de clubes, federaciones y organizaciones deportivas." },
    { icono: "fa-calendar-check", nombre: "Gestión de Eventos Deportivos y Protocolo", desc: "Organización de eventos, logística, protocolo y ceremonias." },
    { icono: "fa-industry", nombre: "Escuela de Negocios Industriales", desc: "Gestión empresarial aplicada al sector industrial y deportivo." },
    { icono: "fa-laptop-code", nombre: "Informática Industrial", desc: "Tecnología de la información aplicada a la gestión deportiva y empresarial." },
  ],
};

export const eventos = [
  { dia: "15", mes: "MAY", tipo: "seminario", tipoLabel: "Seminario", titulo: "Seminario de Gestión Deportiva Internacional", hora: "09:00 - 13:00", lugar: "Auditorio CENACAP" },
  { dia: "22", mes: "MAY", tipo: "conferencia", tipoLabel: "Conferencia", titulo: "Inteligencia Artificial en el Deporte", hora: "19:00 - 21:00", lugar: "Virtual - Zoom" },
  { dia: "05", mes: "JUN", tipo: "taller", tipoLabel: "Taller", titulo: "Taller de Arbitraje FIFA 2025", hora: "08:00 - 18:00", lugar: "Canchas INFOCADE" },
  { dia: "12", mes: "JUN", tipo: "curso", tipoLabel: "Curso", titulo: "Curso de Marketing Digital Deportivo", hora: "19:00 - 22:00", lugar: "Aula Virtual" },
];

export const convenios = [
  { abbr: "MINEDU", name: "Ministerio de Educación", desc: "Reconocimiento oficial de títulos y certificados técnicos." },
  { abbr: "FCB", name: "Federación de Fútbol", desc: "Convenio para arbitraje, entrenamiento y desarrollo deportivo." },
  { abbr: "UCB", name: "U. Católica Boliviana", desc: "Articulación para continuidad de estudios universitarios." },
  { abbr: "CEP", name: "Comité Olímpico", desc: "Programas de alto rendimiento y deporte competitivo." },
  { abbr: "SIE", name: "Sistema de Información", desc: "Certificación en tecnologías de información empresarial." },
  { abbr: "CBC", name: "Cámara de Comercio", desc: "Prácticas profesionales e inserción laboral." },
  { abbr: "FIFA", name: "FIFA Forward", desc: "Programa de desarrollo del fútbol base." },
  { abbr: "IBN", name: "Instituto Boliviano", desc: "Investigación y colaboración académica." },
];

export const testimonios = [
  { nombre: "Carlos M.", rol: "Egresado CENACAP", estrellas: 5, texto: "La formación que recibí en CENACAP cambió mi vida profesional. Hoy trabajo como gerente de calidad en una multinacional gracias a las competencias adquiridas." },
  { nombre: "Ana L.", rol: "Entrenadora INFOCADE", estrellas: 5, texto: "INFOCADE me dio las herramientas para convertir mi pasión por el deporte en una carrera profesional. Las metodologías de enseñanza son de nivel internacional." },
  { nombre: "Pedro R.", rol: "Árbitro Certificado", estrellas: 5, texto: "El curso de arbitraje fue excepcional. Los instructores son profesionales activos y las instalaciones de primer nivel. Totalmente recomendado." },
  { nombre: "Lucía G.", rol: "Diseñadora Gráfica", estrellas: 4, texto: "El programa de Diseño Gráfico está actualizado con las últimas tendencias del mercado. Aprendí Adobe Creative Suite a profundidad." },
  { nombre: "Marcos T.", rol: "Gestor Ambiental", estrellas: 5, texto: "Gracias a la certificación en Gestión Ambiental, pude liderar proyectos de sostenibilidad en importantes empresas del país." },
  { nombre: "Diana S.", rol: "Egresada Marketing", estrellas: 5, texto: "El enfoque práctico del marketing deportivo me permitió trabajar con clubes profesionales desde el primer año de egreso." },
];

export const noticias = [
  { tipo: "actividad", tipoLabel: "Actividad", titulo: "Nueva cohorte de Entrenadores de Fútbol 2025", desc: "Abierta la convocatoria para la nueva generación de entrenadores certificados. Inscripciones hasta el 30 de mayo.", fecha: "3 May 2025", tag: "INFOCADE", tagIcon: "fa-futbol" },
  { tipo: "deportivo", tipoLabel: "Deportivo", titulo: "Torneo Interinstitucional de Vóley Playa", desc: "Nuestros estudiantes de Beach Voley participarán en el torneo nacional este fin de semana.", fecha: "1 May 2025", tag: "Deporte", tagIcon: "fa-trophy" },
  { tipo: "curso", tipoLabel: "Nuevo Curso", titulo: "Curso Intensivo de Gestión de Calidad ISO 9001", desc: "Aprende a implementar sistemas de gestión de calidad en solo 4 semanas. Certificación internacional.", fecha: "28 Abr 2025", tag: "CENACAP", tagIcon: "fa-leaf" },
];
