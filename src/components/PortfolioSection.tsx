


import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react"; 
// --- Importaciones de Swiper ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';

// =========================================================================
// 1. DATOS DE PORTAFOLIO AGRUPADOS POR SLIDE (4 SLIDES * 3 FOTOS)
//    - Contiene los nuevos textos de referencia y proyecto.
// =========================================================================
const slideData = [
  // SLIDE 1: BANCO FEDERAL
  {
    project: "Banco Federal",
    reference: "Análisis comparativo de mora y riesgo crediticio por score, género y región para identificar patrones y tendencias.",
    subtitles: "Títulos dashboards seleccionados: 1. Mora y score crediticio; 2. Información sociodemográfica; 3. Información Detallada.",
    items: [
      { image: "/banco1.jpeg" },
      { image: "/banco2.jpeg" },
      { image: "/banco4.jpeg" },
    ]
  },
  // SLIDE 2: ADVENTUREWORK
  {
    project: "ADVENTUREWORK",
    reference: "Análisis de ventas, costos y rentabilidad, con foco en desempeño financiero y evolución temporal por país y producto.",
    subtitles: "Títulos dashboards seleccionados: 1. Análisis financiero global; 2. Análisis USA; 3. Series temporales.",
    items: [
      { image: "/Adventure Work_1.jpg" },
      { image: "/Adventure Work_2.jpg" },
      { image: "/Adventure Work_3.jpg" },
    ]
  },
  // SLIDE 3: BIOGENESYS FARMACÉUTICA
  {
    project: "Biogenesys Farmacéutica",
    reference: "Análisis comparativo de indicadores en LATAM para identificar relaciones y documentar dinámicas epidemiológicas.",
    subtitles: "Títulos dashboards seleccionados: 1. Perfil demográfico; 2. Correlaciones y dispersión; 3. Evolución epidemiológica.",
    items: [
      { image: "/bio1.jpeg" },
      { image: "/bio2.jpeg" },
      { image: "/bio3.jpeg" },
    ]
  },
  // SLIDE 4: NBA
  {
    project: "NBA",
    reference: "Evaluación de rendimiento de equipos y jugadores NBA (eficiencia, perfil y evolución) para analizar decisiones de fichaje y gestión deportiva.",
    subtitles: "Títulos dashboards seleccionados: 1. Perfil de jugadores; 2. Performance jugador; 3. Performance equipo.",
    items: [
      { image: "/nba1.jpeg" },
      { image: "/nba2.jpeg" },
      { image: "/nba3.jpeg" },
    ]
  },
];

const portfolioItems = slideData.flatMap(slide => slide.items);
// =========================================================================
// 2. COMPONENTE CARD SIMPLIFICADO
// =========================================================================
interface PortfolioItem {
  image: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <motion.div
      key={index}
      className="group relative rounded-xl overflow-hidden hover:shadow-xl border border-white/10 hover:border-yellow-400/50 transition-all bg-gray-800 h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <div className="w-full h-full overflow-hidden bg-gray-700">
        <img
          src={item.image}
          alt={`Proyecto ${index + 1}`}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-b-[60px] border-b-yellow-400/20" />
    </motion.div>
  );
}

// =========================================================================
// 3. COMPONENTE PRINCIPAL CON SWIPER Y LÓGICA DE ESTADO
// =========================================================================
export function PortfolioSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); 

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const activeSlide = slideData[activeSlideIndex];
  
 const handleSlideChange = (swiper: { realIndex: number }) => {
    // Calcula el índice del grupo de 3 elementos
    const newIndex = Math.floor(swiper.realIndex / 3);
    
    // Asegura que el índice no exceda los límites de nuestro array
    setActiveSlideIndex(newIndex % slideData.length);
  };
  
  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-32 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* ... (Fondos Parallax y Grid SVG) ... */}
      <motion.div className="absolute inset-0 opacity-10" style={{ y: backgroundY }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </motion.div>
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="portfolio-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#portfolio-grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ... (Encabezado de la sección) ... */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="inline-flex items-center justify-center mb-6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div className="w-12 h-1 bg-yellow-400 rounded-full" />
          </motion.div>
          <motion.h2
            className="mb-6 uppercase tracking-[0.15em] text-3xl sm:text-4xl px-2"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            PROYECTOS Y VISUALIZACIONES
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto tracking-wide text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Algunos de los proyectos desarrollados como parte de nuestra formación
            y práctica profesional en análisis de datos y gestión.
          </motion.p>
        </motion.div>

        {/* CARRUSEL SWIPER */}
        <div className="relative">
            <Swiper
                modules={[Pagination]} 
                slidesPerView={1} 
                spaceBetween={24}
                loop={true} 
                
                // Configuración de la Paginación customizada para 4 puntos grandes
                pagination={{ 
                    clickable: true, 
                    el: '.swiper-pagination-custom',
                    type: 'custom', 
                    renderCustom: function (swiper, current, total) {
                        const numSlides = slideData.length; 
                        let paginationHtml = '';
                        
                        for (let i = 1; i <= numSlides; i++) {
                            const isActive = i === (activeSlideIndex + 1);

                            // Estilos en línea para hacer los puntos más grandes y visibles
                            paginationHtml += `<span 
                                class="swiper-pagination-bullet-custom ${isActive ? 'swiper-pagination-bullet-active-custom' : ''}" 
                                data-index="${(i - 1) * 3}" 
                                aria-label="Go to slide ${i}"
                                style="width: 14px; height: 14px; background: ${isActive ? '#FBBF24' : 'rgba(255, 255, 255, 0.2)'}; border-radius: 50%; display: inline-block; margin: 0 6px; cursor: pointer; transition: all 0.3s;"
                            ></span>`;
                        }
                        return paginationHtml;
                    }
                }}
                
                // Asegura la transición de 3 fotos de golpe (desktop)
                breakpoints={{
                    1024: {
                        slidesPerView: 3, 
                        slidesPerGroup: 3, 
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2, 
                        slidesPerGroup: 2, 
                        spaceBetween: 24,
                    },
                    0: {
                        slidesPerView: 1, 
                        slidesPerGroup: 1, 
                        spaceBetween: 16,
                    },
                }}
                className="pb-12"
                onSlideChange={handleSlideChange} 
            >
                {portfolioItems.map((item, index) => (
                    <SwiperSlide key={index} className="h-auto"> 
                        <PortfolioCard item={item} index={index} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* CONTENEDOR DE PAGINACIÓN */}
            <div className="flex justify-center mt-4">
                <div 
                    className="swiper-pagination-custom flex items-center justify-center space-x-2 text-sm"
                    // Lógica para que al hacer click en el punto, cambie el slide
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                        const target = e.target as HTMLElement;
                        const indexAttr = target.getAttribute('data-index');
                        if (indexAttr) {
                            // Necesitas la instancia de Swiper para llamar a slideToLoop
                            const swiperElement = document.querySelector('.swiper') as HTMLElement & { swiper: any };
                            if (swiperElement?.swiper) {
                                swiperElement.swiper.slideToLoop(parseInt(indexAttr, 10));
                            }
                        }
                    }}
                ></div>
            </div>
            
        </div>
        {/* FIN DEL CARRUSEL SWIPER */}
        
        {/* REFERENCIA DEL SLIDE ACTIVO (ACTUALIZADO CON SUBTÍTULOS) */}
        <motion.div 
            key={activeSlide.project}
            className="mt-16 text-center bg-gray-800/50 p-6 rounded-xl border border-yellow-400/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-yellow-400 tracking-wider">
            Proyecto: {activeSlide.project}
          </h3>
          <p className="text-gray-300 tracking-wide text-md mb-2">
            {activeSlide.reference}
          </p>
          {/* Nuevo campo de subtítulos */}
      
        </motion.div>

        {/* Sección Nuestros Clientes */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <motion.h2
              className="mb-6 uppercase tracking-[0.2em] text-3xl"
              style={{ fontWeight: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              NUESTROS CLIENTES
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-yellow-400 mx-auto mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Contenedor de logos de clientes */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-12 px-4">
            {[
              "empresas/abasto.jpeg",
              "empresas/la pacheca.jpeg",
              "/empresas/rosell.png",
              "/empresas/bigliardi.png"
            ].map((logo, index) => (
              <motion.div
                key={index}
                className="relative h-24 w-40 md:h-28 md:w-48 flex items-center justify-center bg-white/5 p-4 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <img
                  src={logo}
                  alt={`Logo cliente ${index + 1}`}
                  className="h-full w-full object-contain object-center filter grayscale hover:grayscale-0 transition-all duration-300 max-h-16 md:max-h-20"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 tracking-wide">
            ¿Querés ver más ejemplos de nuestro trabajo? Hablemos sobre tu proyecto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}