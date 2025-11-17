


import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import {
  AnimatedGrid,
  DataParticles,
  AnimatedChart,
  TrendLine,
  KPICounter,
  DataFlow,
} from "./AnimatedBackground";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image with Multiple Overlays */}
      <div
        className="absolute inset-0 z-0"
        style={{
           backgroundImage: `url('https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjAzODYwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
           backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>

      {/* Animated Grid Background */}
      <AnimatedGrid />

      {/* Data Flow Network */}
      <DataFlow />

      {/* Floating Data Particles */}
      <DataParticles />

      {/* Animated Chart */}
      <AnimatedChart />

      {/* Trend Line */}
      <TrendLine />

      {/* KPI Counter */}
      <KPICounter />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-10 relative">
          {/* Fondo oscuro solo detrás del texto */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-fit bg-gradient-to-br from-gray-900/98 via-gray-900/95 to-gray-900/90 rounded-2xl backdrop-blur-xl -z-10 px-8 py-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl text-white uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-4 sm:mb-6 drop-shadow-xl leading-tight"
              style={{ fontWeight: 300, textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Transformamos
              <motion.span
                className="block text-yellow-400 mt-1 sm:mt-2 text-3xl sm:text-4xl lg:text-5xl tracking-[0.05em] sm:tracking-[0.1em] leading-snug"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                información en valor para tu negocio
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-white tracking-[0.1em] uppercase drop-shadow-lg"
            style={{ fontWeight: 200, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Consultoría · Analytics · Business Intelligence
          </motion.p>

          {/* Animated CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="px-10 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-all flex items-center gap-3 uppercase text-sm tracking-[0.15em] shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Comienza Ahora
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
            <motion.button
              onClick={() => {
                const element = document.getElementById("servicios");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-10 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all border border-white/30 uppercase text-sm tracking-[0.15em]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar Servicios
            </motion.button>
          </motion.div>

          {/* ELIMINADO: Scroll Indicator (La figura ovalada que se movía) */}
          
        </div>
      </div>
    </section>
  );
}
