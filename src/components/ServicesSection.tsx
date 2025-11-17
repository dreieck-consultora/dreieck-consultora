

import {
  BarChart3,
  Database,
  TrendingUp,
  Users,
  FileSpreadsheet,
  Lightbulb,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: BarChart3,
    title: "Análisis de Datos y visualización",
    description:
      "Desarrollamos soluciones personalizadas basadas en el análisis de datos de tu organización. Creamos dashboards interactivos en Power BI para monitorear KPIs en tiempo real y generar reportes estratégicos que transforman la información en conocimiento útil para la toma de decisiones.",
  },
  {
    icon: FileSpreadsheet,
    title: "Optimización de Procesos y Control de Gestión",
    description:
      "Implementamos herramientas y metodologías que permiten monitorear indicadores clave de desempeño (KPIs), detectar oportunidades de mejora y fortalecer la gestión interna.",
  },
  {
    icon: Users,
    title: "Capacitaciones y Asesoramiento Institucional",
    description:
      "Brindamos formación a equipos de trabajo e instituciones educativas en temas de gestión, análisis de datos, planificación y evaluación de proyectos, fortaleciendo capacidades para la toma de decisiones.",
  },
  {
    icon: Lightbulb,
    title: "Consultoría en Gestión Organizacional",
    description:
      "Relevamos, analizamos y optimizamos los procesos administrativos, financieros y operativos de las organizaciones. Diseñamos procedimientos claros y eficientes para mejorar la productividad y reducir costos.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ scale: 0, rotate: 0 }}
        whileHover={{ scale: 1, rotate: 5 }}
        transition={{ duration: 0.5 }}
      />

      {/* Mini gráfico animado */}
      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-20"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <motion.polyline
            points="0,35 10,28 20,20 30,15 40,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-yellow-500"
            initial={{ pathLength: 0 }}
            whileHover={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>
      </motion.div>

      <div className="relative z-10">
        <motion.div
          className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 group-hover:bg-yellow-400 rounded-lg mb-6 transition-colors duration-300"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon
            className="text-gray-900 group-hover:text-white transition-colors"
            size={28}
          />
        </motion.div>
        <h3 className="mb-3 uppercase tracking-wider">{service.title}</h3>
        <p className="text-gray-600 tracking-wide">{service.description}</p>
      </div>

      {/* Indicador animado */}
      <motion.div
        className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}

function FloatingDataPoints() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl font-mono text-gray-900"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            delay: Math.random() * 3,
            repeat: Infinity,
          }}
        >
          {["#", "%", "$", "∑", "∞", "±"][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}
    </div>
  );
}

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="servicios" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Fondo decorativo */}
      <FloatingDataPoints />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-1 bg-yellow-500 rounded-full" />
          </motion.div>
          <motion.h2
            className="mb-6 uppercase tracking-[0.2em] text-4xl"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto tracking-wide text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Soluciones integrales de gestión diseñadas para impulsar el crecimiento
            y la eficiencia de tu organización
          </motion.p>
        </motion.div>

        {/* 🔧 Ajuste principal: ahora hay 2 columnas en pantallas grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
